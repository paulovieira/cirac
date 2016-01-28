

var MapIV = Mn.ItemView.extend({
    attributes: {
        style: "height: 100%; xborder: solid green 1px; "
    },
    template: "map/templates/map-container.html",

    initialize: function(){
    },

    bounds: {
        portugal: L.latLngBounds([[36.8928, -9.5691], [42.2244, -6.1194]]),
        lisbon:   L.latLngBounds([[38.6819, -9.2865], [38.7598, -9.0871]]),
        coimbra:  L.latLngBounds([[40.1627, -8.473 ], [40.2393, -8.3499]]),
        porto:    L.latLngBounds([[41.0575, -8.7847], [41.2121, -8.5073]])
    },

    initializeMap: function(){

        // create the leafmap map
        var mapIndex = this.model.get("mapIndex");
        var center = this.model.get("center");
        var initialZoom = this.model.get("initialZoom");
        var maxZoom = this.model.get("maxZoom") || 19;
        var minZoom = this.model.get("minZoom") || 6;

        var div = this.$("div.mn-leaflet-map").get(mapIndex);

        // crate the leaflet map in the correct div
        this.map = L.mapbox.map(div, undefined, {
            zoomControl: false,
            attributionControl: false,
            legendControl: {
                // do not sanitize (we want to be able to include images in legends)
                sanitizer: function(str){ return str }
            },
            zoom: initialZoom,
            maxZoom: maxZoom,
            minZoom: minZoom,
            center: [center.lat, center.lng],
        });

        this.model.set("active", true);
        this.model.set("leafletMap", this.map);

        this.map.on("moveend layeradd", function(e){

            var zoom = this.map.getZoom();
            var bounds = this.map.getBounds();
            var selectedLayer = map0M.get("vulnLayersC").selected;

            if(!selectedLayer){
                return;
            }

            $.notifyClose();

            if(selectedLayer.get("id").indexOf("freg")>=0 || selectedLayer.get("id").indexOf("cp4")>=0){

                // for the vuln freg and cp4 maps we have tiles for zooms 6-15
                if(zoom <= 15){
                    return;
                }

                $.notify({
                    icon: "danger",
                    message: "Este mapa não está disponível para o nível de zoom seleccionado. Para voltar a ver o mapa faça zoom out.",
                },{
                    type: "danger",
                    delay: 0,
                    z_index: 1060
                });
            }
            else if(selectedLayer.get("id").indexOf("bgri")>=0){

                // for the vuln bgri maps we have tiles zooms 6-16
                if(zoom <= 16){
                    return;
                }

                // if zoom is >= 17 and <= 19, we have tiles only for the lisbon, coimbra and porto regions
                if(zoom <= 19){
                    if(bounds.intersects(this.bounds.lisbon)||bounds.intersects(this.bounds.porto)||bounds.intersects(this.bounds.coimbra)){
                        return;
                    }
                }

                $.notify({
                    icon: "danger",
                    message: "Este mapa não está disponível para o nível de zoom e para a área seleccionados. Para voltar a ver o mapa faça zoom out ou centre na zona de Lisboa, Algés, Coimbra ou Porto.",
                },{
                    type: "danger",
                    delay: 0,
                    z_index: 1060
                });

            }

        }, this);



        // add the initial tilelayer
        cartografiaChannel.request("selectLayer", 0, "mapquest");
        //cartografiaChannel.request("selectLayer", 0, "hydda-base");
        

        // add initial layers (given in the query params)
        // NOTE: can now make the request to "selectLayer", because at this point
        // the leaflet map has been created
        _.each(Cartografia.queryParams, function(value, layerId){

            // TODO: the map index is hardcoded
            cartografiaChannel.request("selectLayer", 0, layerId);

        });

        delete Cartografia.queryParams;

    },



    initializeMapMenu: function(){

        // instantiate and render the menu view
        this.menuLV = new MenuLV({
            model: this.model
        });
        this.menuLV.render();

        // add a reference to the parent view
        //this.menuLV.mapIV = this;

        // create the control instance and add to the map
        this.menuControl = new L.Control.BackboneView({
            view: this.menuLV,
            position: "topleft"
        });
//debugger;
        // map.addControl will add the html element of the menuLV view to the DOM
        // in the right place
        this.map.addControl(this.menuControl);

        // the following assertion should be true
        //this.map === this.menuLV._map;

        // we must have the parent with the correct height
        this.menuLV.$el.parent().css("height", "100%");
        this.menuLV.$el.parent().parent().css("height", "100%");

    },

    // add the zoom control
    initializeZoom: function(options) {

        var defaultOptions = {
            position: "topright"
            //position: "bottomright",
        };

        var zoomControl = L.control.zoom(_.extend(defaultOptions, options));
        this.map.addControl(zoomControl);
    },

    // add the scale control
    initializeScale: function(options) {

        var defaultOptions = {
            position: "bottomright",
            imperial: false,
            maxWidth: 130
        };

        var scaleControl = L.control.scale(_.extend(defaultOptions, options));
        window.scaleControl = scaleControl;
        this.map.addControl(scaleControl);
    },

    initializeGeocoder: function(){
        var geocoderOptions = {
            placeholder: "Search address...",
            errorMessage: "Morada desconhecida",
            placeholder: "Inserir morada",
            geocoder: L.Control.Geocoder.bing('AoArA0sD6eBGZyt5PluxhuN7N7X1vloSEIhzaKVkBBGL37akEVbrr0wn17hoYAMy'),
            //geocoder: L.Control.Geocoder.google('AIzaSyBoM_J6Ysno6znvigDm3MYja829lAeVupM'),
            
            collapsed: "true",
        };

        var geocoderControl = new L.Control.geocoder(geocoderOptions);
        this.map.addControl(geocoderControl);
    },

    onAttach: function(){

        this.initializeMap();
        this.initializeMapMenu();
        this.initializeZoom();
        this.initializeScale();
        this.initializeGeocoder();

        // show the menu already open at the beggining
        map0M.set("menuOpen", true); 
    }
});

