$("#js-contact-nav").on("click", function(){

    window.location.href = "mailto:aps@apseguradores.pt";   
});

var Cartografia = new Mn.Application();

Cartografia.addRegions({
    mapOneRegion: "#mn-r-map-1",
    modalOneRegion: "#mn-r-modal-contents-1"
});

Cartografia.on("start", function(){

    var map0IV = new MapIV({
        model: map0M
    });

    this.mapOneRegion.show(map0IV);
});


L.Browser.retina = false;
L.mapbox.accessToken = 'dummyAccessToken';

Cartografia.getMapModel = function(mapIndex){

    if(mapIndex===0){
        return map0M;
    }
    else if(mapIndex===1){
        return map1M;
    }
    else{
        throw new Error("wrong map index");
    }
};

Cartografia.hasUTFGrid = function(tileJson){

    //return !!tileJson.interactivity && !!$.trim(tileJson.interactivity.template_teaser);
    return !!tileJson.template;
};

var cartografiaChannel = Backbone.Radio.channel('cartografia');

cartografiaChannel.reply("selectLayer", function(mapIndex, layerId){

    mapIndex = 0;
    var layerM, mapM = Cartografia.getMapModel(mapIndex);

    // try to find the layerM in either collection
    layerM = mapM.get("vulnLayersC").get(layerId) || 
                mapM.get("riskLayersC").get(layerId) || 
                mapM.get("floodLayersC").get(layerId) || 
                mapM.get("exclusiveLayersC").get(layerId) ||
                mapM.get("overlappingLayersC").get(layerId);        

    if(layerM){
        layerM.select();
    }
    else{
        throw new Error("Unknown layerId: ", layerId);
    }
    
});

cartografiaChannel.reply("deselectLayer", function(mapIndex, layerId){
//debugger;
    mapIndex = 0;
    var mapM = Cartografia.getMapModel(mapIndex);
    var layerM = mapM.get("vulnLayersC").get(layerId) || 
                mapM.get("riskLayersC").get(layerId) || 
                mapM.get("floodLayersC").get(layerId) || 
                mapM.get("exclusiveLayersC").get(layerId) ||
                mapM.get("overlappingLayersC").get(layerId); 

    if(layerM){
        layerM.deselect();
    }
    else{
        throw new Error("Unknown layerId: ", layerId);
    }

});

Cartografia.center = {
    lisbon: L.latLng(38.71575316511502, -9.143285751342773),
    alges: L.latLng(38.703027709424724, -9.232077598571777),
    coimbra: L.latLng(40.214144869676666, -8.428831100463867),
    porto: L.latLng(41.15138653018159, -8.623666763305664)
};
Cartografia.bounds = {
    lisbon: L.latLngBounds([38.709223280002746, -9.168176651000977], [38.72884462475464, -9.119853973388672]),
    alges: L.latLngBounds([38.69703256527164, -9.232978820800781], [38.71270595962479, -9.223880767822266]),
    coimbra: L.latLngBounds([40.19093851287013, -8.440589904785156], [40.21768412409529, -8.389949798583984]),
    porto: L.latLngBounds([41.132900249463425, -8.679542541503906], [41.15371310535891, -8.571739196777344])
};

cartografiaChannel.reply("centerMap", function(mapIndex, nameAttr){

    var currentZoom = map0M.get("leafletMap").getZoom();
    var currentBounds = map0M.get("leafletMap").getBounds();

    function setView(city){

        var center = Cartografia.center[city];
        var bounds = Cartografia.bounds[city];

        if(currentZoom <= 14){
            map0M.get("leafletMap").setView(center, 15);
            return;
        }
        //debugger;
        if(!currentBounds.intersects(bounds)){
            map0M.get("leafletMap").setView(center, 15);
            return;
        }
    };

    if(nameAttr.indexOf("lisbon")!==-1){
        setView("lisbon");
    }
    else if(nameAttr.indexOf("alges")!==-1){
        setView("alges");
    }
    else if(nameAttr.indexOf("coimbra")!==-1){
        setView("coimbra");
    }
    else if(nameAttr.indexOf("porto")!==-1){
        setView("porto");
    }
});


if(Cirac.tilesHost){

    for(var i=0; i<Cirac.layers.length; i++){

        Cirac.layers[i]["tiles"][0] = Cirac.tilesHost + Cirac.layers[i]["tiles"][0];
        Cirac.layers[i]["grids"][0] = Cirac.tilesHost + Cirac.layers[i]["grids"][0];
    }    
}

// update the names of the layers (will be shown in the menu)

_.each(Cirac.layers, function(obj){

    if(Cirac.namesMapping[obj.name]){

        obj.group = Cirac.namesMapping[obj.name].group;
        obj.name = Cirac.namesMapping[obj.name].name;
        
    }
});
