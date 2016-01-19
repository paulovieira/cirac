var LayerM = Backbone.Model.extend({
    initialize: function() {

        // apply the backbone.select mixin (must also be done in the respective collection)
        Backbone.Select.Me.applyTo(this);

        this.on("change:opacity", this.changeOpacity);
        this.on("change:zindex", this.changeZIndex);
    },

    changeOpacity: function(model, newOpacity) {

        this.get("tileLayer").setOpacity(newOpacity / 100);
    },

    changeZIndex: function(model, newZIndex) {

        this.get("tileLayer").setZIndex(newZIndex);
    },


});


var LayersBaseC = Backbone.Collection.extend({

    addTileLayer: function(layerM) {
//debugger;
        var leafletMap = layerM.collection.parent.get("leafletMap");

        if (!leafletMap || leafletMap.hasLayer(layerM.get("tileLayer"))) {
            return;
        }

        // 1. add the tile layer

        leafletMap.addLayer(layerM.get("tileLayer"));
        if(layerM.get("zindex")){
        //if (layerM.get("tileJson").isExclusive) {
            layerM.get("tileLayer").setZIndex(layerM.get("zindex"));
        }
        // else if(!layerM.get("tileJson").isCirac){
        //     debugger;
        //     //layerM.get("tileLayer").setZIndex(20);   
        // }


        // 2. add the grid layer (UTF tiles) + the respective grid control

        if (layerM.has("gridLayer")) {
            leafletMap.addLayer(layerM.get("gridLayer"));
            leafletMap.addControl(layerM.get("gridControl"));
        }


        // 3. add the legend (if defined in the project in tilemill)

        var legend = layerM.get("tileJson").legend;
        if (legend) {
            leafletMap.legendControl.addLegend(legend);
        }

    },

    removeTileLayer: function(layerM) {

        var leafletMap = layerM.collection.parent.get("leafletMap");

        if (!leafletMap || !leafletMap.hasLayer(layerM.get("tileLayer"))) {
            return;
        }

        // 1. remove the tile layer
        leafletMap.removeLayer(layerM.get("tileLayer"));

        // 2. remove the grid layer (UTF tiles) + the respective grid control
        if (layerM.has("gridLayer")) {
            leafletMap.removeLayer(layerM.get("gridLayer"));
            leafletMap.removeControl(layerM.get("gridControl"));
        }


        // 3. remove the legend (if defined in the project in tilemill)

        var legend = layerM.get("tileJson").legend;
        if (legend) {
            leafletMap.legendControl.removeLegend(legend);
        }


        // update the "active" property in the mapsMenu array
        var mapsMenu = layerM.collection.parent.get("mapsMenu");
        _.each(mapsMenu, function(groupObj) {
            _.each(groupObj.maps, function(mapObj) {

                if (mapObj.mapId === layerM.get("id")) {
                    mapObj.active = false;
                }

            }, this);
        }, this);
    },

    updateMenuEntry: function(layerM, status) {

        var mapsMenu = layerM.collection.parent.get("mapsMenu");
        _.each(mapsMenu, function(groupObj) {
            _.each(groupObj.maps, function(mapObj) {

                if (mapObj.mapId === layerM.get("id")) {
                    mapObj.active = status;
                }

            }, this);
        }, this);

    },

    // update the layers in the underlying leaflet map (tileLayer, gridlayer, etc)
    addLayer: function(layerM) {
        //debugger;

        var tileLayer = layerM.get("tileLayer");

        // if it is a regular map, the tileLayer property will be an instance of L.TileLayer...
        if (tileLayer && tileLayer instanceof L.TileLayer) {

            this.addTileLayer(layerM);
            this.updateMenuEntry(layerM, true)
        }
        // if it is a sequential map, it will be a Backbone collection
        else if (tileLayer instanceof Backbone.Collection) {

            // this is a sequential map
            layerM.addSequentialControl();
            this.updateMenuEntry(layerM, true)
        } else {
            throw new Error("invalid Tilelayer");
        }
    },

    removeLayer: function(layerM) {
        //debugger;

        var tileLayer = layerM.get("tileLayer");

        if (tileLayer && tileLayer instanceof L.TileLayer) {

            this.removeTileLayer(layerM);
            this.updateMenuEntry(layerM, false)
        } else if (tileLayer instanceof Backbone.Collection) {

            layerM.removeSequentialControl();
            this.updateMenuEntry(layerM, false)
        } else {
            throw new Error("invalid Tilelayer");
        }
    }



});

var OverlappingLayersC = LayersBaseC.extend({
    model: LayerM,
    initialize: function(models) {

        // apply the backbone.select mixin (must also be done in the respective model)
        Backbone.Select.Many.applyTo(this, models);


        // listen for the events triggered by the select plugin

        // NOTE: we have to listen to select:all and select:none as well;
        // if there is only 2 models selected and we deselect 1, the event that fires
        // is "select:some";
        // but if there is only 1 model selected and we deselect it, the event that fires
        // is "select:none" ("select:some" is not fired in this case)
        this.on("select:some select:all select:none", this.updateLayers);

    },

    // update the layers in the underlying leaflet map (tileLayer, gridlayer, etc)
    updateLayers: function(diff) {
debugger;
        var selected = diff.selected;
        var deselected = diff.deselected;

        // the selected array holds models which have been newly selected ;
        // likewise, models in the deselected array have changed their status from 
        // selected to deselected
        var i, l;
        for (i = 0, l = selected.length; i < l; i++) {
            this.addLayer(selected[i]);
        }

        // repeat for models that have been deselected
        for (i = 0, l = deselected.length; i < l; i++) {
            this.removeLayer(deselected[i]);
        }
    }
});


var ExclusiveLayersC = LayersBaseC.extend({
    model: LayerM,
    initialize: function(models) {

        // apply the backbone.select mixin (must also be done in the respective model)
        Backbone.Select.One.applyTo(this, models);


        // listen for the events triggered by the select plugin
        this.on("select:one", this.addLayer);
        this.on("deselect:one", this.removeLayer);
    },
});



var MapM = Backbone.Model.extend({
    initialize: function() {}
});

var map0M = new MapM({
    mapIndex: 0,
    active: false,
    menuOpen: false,
    vulnLayersC: new ExclusiveLayersC(),
    riskLayersC: new ExclusiveLayersC(),
    floodLayersC: new ExclusiveLayersC(),
    exclusiveLayersC: new ExclusiveLayersC(),
    overlappingLayersC: new OverlappingLayersC(),
    center: {
        lat: 39.5676,
        lng: -8.7068
    },
    initialZoom: 8,
//    maxZoom: 16,
//    minZoom: 6
});
map0M.get("vulnLayersC").parent = map0M;
map0M.get("riskLayersC").parent = map0M;
map0M.get("floodLayersC").parent = map0M;
map0M.get("exclusiveLayersC").parent = map0M;
map0M.get("overlappingLayersC").parent = map0M;




// add the hardcoded tileJson objects in Cirac.exclusiveLayers to the main Cirac.layers array (before the ones that come from the server)
_.each(Cirac.exclusiveLayers, function(tileJson) {
//debugger;
    Cirac.layers.unshift(tileJson);
});

// deep clone the mapsMenu array for each leaflet map
map0M.set("mapsMenu", JSON.parse(JSON.stringify(Cirac.mapsMenu)));


// populate the layers collection in map0M (using the mapIds in the mapMenu)

_.each(map0M.get("mapsMenu"), function(groupObj) {

    _.each(groupObj.maps, function(mapObj) {

// if(mapObj.mapId.indexOf("cirac_risk")===0){
//     debugger;
// }

        var tileJson = _.findWhere(Cirac.layers, {
            id: mapObj.mapId
        });
        if (!tileJson) {
            return;
        }

        var mapIndex = 0;

        // add the map index directly to the objects in the mapMenu array
        mapObj.mapIndex = mapIndex;

        // add some properties from the tileJson to the object in the mapsMenu (useful
        // to render the menu)
        mapObj.name = tileJson.name;
        mapObj.hasInfo = $.trim(tileJson.description).length > 0;


        //tileJson.maxzoom = 11;
        var layerM = new LayerM({
            id: tileJson.id,
            zindex: tileJson.zIndex || 0,
            opacity: 100,
            tileJson: tileJson,
            mapIndex: mapIndex
        });


        // these are the 3 required fields in the tileJson to create a L.mapbox.tileLayer object
        // NOTE: the sequential maps don't have these fields, so the tileLayer property won't be set 
        if (tileJson.tiles && tileJson.minzoom && tileJson.maxzoom) {

            var tileLayer = L.mapbox.tileLayer(tileJson);
            layerM.set("tileLayer", tileLayer);

            // the gridLayer + gridControl is only added if the teaser has been
            // defined in tilemill (otherwise it makes no sense to add )
            if (Cartografia.hasUTFGrid(tileJson)) {
                layerM.set("gridLayer", L.mapbox.gridLayer(tileJson));
                
                var gridControlOptions = {};

                var sanitizer = function(data){

                    var nunjucksTags = ["<nunjucks>", "</nunjucks>"];
                    var indexStart = data.indexOf(nunjucksTags[0]);
                    var indexEnd   = data.indexOf(nunjucksTags[1]);

                    if(indexStart===-1 || indexEnd===-1){
                        return data;
                    }

                    // extract the teaser string without the custom tags
                    var teaser = data.substring(indexStart+nunjucksTags[0].length, indexEnd);

                    // extract and parse the context object
                    var contextDelimiters = ["var context =", "}"];
                    var indexStartCtx = teaser.indexOf(contextDelimiters[0]);
                    var indexEndCtx = teaser.indexOf(contextDelimiters[1]);
                    if(indexStartCtx===-1 || indexEndCtx===-1){
                        return data;
                    }

                    var contextStr = teaser.substring(indexStartCtx + contextDelimiters[0].length, indexEndCtx + 1);

                    // extract the nunjucks template string (remove the context)
                    var template = teaser.substring(indexEndCtx + 1, teaser.length);

                    var output = "";

                    try {

                        // temporarily change to nunjucks configuration (we can't use use the default syntax because moustache removes  '{{' and '}}' )
                        nunjucks.configure('', {
                          tags: {
                            blockStart: '<%',
                            blockEnd: '%>',
                            variableStart: '<$',
                            variableEnd: '$>',
                            commentStart: '<#',
                            commentEnd: '#>'
                          }
                        });

                        output = nunjucks.renderString(template, JSON.parse(contextStr));
                    }
                    catch(e){
                        output = "Error rendering the template: " + e.message;
                    }
                    finally{

                        // restore nunjucks configuration to the default values
                        nunjucks.configure('', {
                          tags: {
                            blockStart: '{%',
                            blockEnd: '%}',
                            variableStart: '{{',
                            variableEnd: '}}',
                            commentStart: '{#',
                            commentEnd: '#}'
                          }
                        });

                        return output;
                    }

                };

                var gridControlOptions = {
                    sanitizer: sanitizer,
                    follow: true,
                    showOnClickOnly: true
                };

                layerM.set("gridControl", L.mapbox.gridControl(layerM.get("gridLayer"), gridControlOptions));
            }
        } 


        // NOTE: the above calls to the L.mapbox method are syncronous because we are passing 
        // the actual tileJson object (it would be asyncronous if we passed a string with the
        // id of the map, in which case the respective tileJson would be fetched with an ajax call)

        if (tileJson.isExclusive) {
            map0M.get("exclusiveLayersC").push(layerM);
        } 
        else if(tileJson.isCirac) {
            map0M.get("vulnLayersC").push(layerM);
        }
        else if(tileJson.isRisk) {
            map0M.get("riskLayersC").push(layerM);
        }
        else if(tileJson.isFlood) {
            map0M.get("floodLayersC").push(layerM);
        }
        else {
            map0M.get("overlappingLayersC").push(layerM);
        }

    });
});


// change the behaviour of GridControl so that the popup is shown in the map (
// at the tip of the hand cursor) and only when clicked; we use the "follow" 
// options, and override the methods that would show the popup on mousemove/mouseover
L.mapbox.GridControl.prototype._mousemove = function(o) {

    // CHANGED 160114
    return;

    // if (this._pinned) return;
    // if (!this.options.follow) return;

    // this._popup.setLatLng(o.latLng);
};

L.mapbox.GridControl.prototype._mouseover = function(o) {
    if (o.data) {
        L.DomUtil.addClass(this._map._container, 'map-clickable');
    } else {
        L.DomUtil.removeClass(this._map._container, 'map-clickable');
    }

    // CHANGED 160114
    return;

    // if (this._pinned) return;

    // var content = this._template('teaser', o.data);
    // if (content) {
    //     this._show(content, o);
    // } else {
    //     this.hide();
    // }
};
