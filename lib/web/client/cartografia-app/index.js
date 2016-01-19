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
