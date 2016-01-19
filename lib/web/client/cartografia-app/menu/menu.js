var ModalMoreInfoIV = Mn.ItemView.extend({
    template: "menu/templates/modal-map-info.html",

    ui: {
        "closeBtn":  "button.js-modal-cancel",
    },

    behaviors: {
        CloseModal: {
            behaviorClass: window.Behaviors.CloseModal,  // will listen for clicks on @ui.modalCloseBtn
        },
    },

});

var ModalMapOptionsIV = Mn.ItemView.extend({

    template: "menu/templates/modal-map-options.html",

    ui: {
        "closeBtn":  "button.js-modal-cancel",
        "updateBtn": "button.js-modal-update",
        "sliderOpacity": "input[type='text']#layer-opacity",
        "sliderZIndex": "input[type='text']#layer-z-index"
    },

    events: {
        "click @ui.updateBtn": "updateMap"
    },

    behaviors: {
        CloseModal: {
            behaviorClass: window.Behaviors.CloseModal,  // will listen for clicks on @ui.modalCloseBtn
        },
    },


    onAttach: function(){

        this.ui.sliderOpacity.slider({
            tooltip: 'always',
            formatter: function(value) {
                return 'Opacidade: ' + value;
            }
        });

        this.ui.sliderZIndex.slider({
            formatter: function(value) {
                return 'Nível de sobreposição: ' + value;
            }
        });
    },

    onDestroy: function(){

        this.ui.sliderOpacity.slider("destroy");
        this.ui.sliderZIndex.slider("destroy");
    },

    updateMap: function(){

        var opacity = parseInt(this.ui.sliderOpacity.val(), 10);
        this.model.set("opacity", opacity);

        var zindex = parseInt(this.$("#zindex").val(), 10);
        this.model.set("zindex", this.ui.sliderZIndex.val());

        $("#modal-1").modal("hide");
        this.destroy();
    }


});


var MenuBodyIV = Mn.ItemView.extend({
    template: "menu/templates/menu-body.html",
    ui: {
        "chkBox": "input.js-select-layer[type='checkbox']",
        "radio": "input.js-select-layer[type='radio']",
        "infoBtn": "a.js-map-more-info",
        "optionsBtn": "a.js-map-options",
        "removeLayerBtn": "a.js-remove-layer"
    },
    events: {
        "change @ui.radio": "toggleLayer",
        "change @ui.chkBox": "toggleLayer",
        "click @ui.infoBtn": "showInfoModal",
        "click @ui.optionsBtn": "showOptionsModal",
        "click @ui.removeLayerBtn": "removeLayer"
    },

    behaviors: {

        ShowOptionsModal: {
            behaviorClass: window.Behaviors.ShowModal,
            uiKey: "optionsBtn",  // will listen for the ocurrence of the given eventType on @ui.editModalBtn
            eventType: "click",  // "click" is the default eventyType, but we can use others to trigger the modal
            viewClass: ModalMapOptionsIV,  // will show this view in the modal region, passing the current model or collection 
            //mapId: 

        },

        ShowInfoModal: {
            behaviorClass: window.Behaviors.ShowModal,
            uiKey: "infoBtn",  // will listen for the ocurrence of the given eventType on @ui.editModalBtn
            eventType: "click",  // "click" is the default eventyType, but we can use others to trigger the modal
            viewClass: ModalMoreInfoIV,  // will show this view in the modal region, passing the current model or collection 
            //mapId: 

        },

    },

    toggleLayer: function(e){

        var $input = $(e.target);        
        var mapId = $input.data("mapId");
        var mapIndex = this.model.get("mapIndex");

        if($input.is(":checked")){
            cartografiaChannel.request("selectLayer", mapIndex, mapId);
        }
        else{
            cartografiaChannel.request("deselectLayer", mapIndex, mapId);
        }

        this._updateRemoveLayerBtn();

    },

    removeLayer: function(e){

        var $btn = $(e.currentTarget);

        var mapId = $btn
                .parent()
                .siblings("div.radio")
                .find("input[type=radio]")
                .prop("checked", false)
                .data("mapId");

        var mapIndex = this.model.get("mapIndex");
        if(mapId){
            cartografiaChannel.request("deselectLayer", mapIndex, mapId);
        }

        this._updateRemoveLayerBtn();
    },

    // when a radio button is clicked, show the "remove layer" button
    _updateRemoveLayerBtn: function(){
//debugger;
        // make all remove layer button invisible
        this.$el.find("a.js-remove-layer").css("display", "none");

        // show the ones relative to selected maps
        var selectedLayers = this.$el
                .find("li.branch")
                .slice(1)   // don't show the button for the layers in the base maps
                .find("input[type=radio]:checked")
                .map(function(){ return $(this).data("mapId") })
                .toArray()

        var mapId;
        for(var i=0; i<selectedLayers.length; i++){
            mapId = selectedLayers[i];
            this.$el
                .find("a.js-remove-layer[data-map-id=" + mapId + "]")
                .css("display", "");
        }

    },

    onAttach: function(){
        //debugger;
        this.$('#tree-menu').treed({
            openedClass:'glyphicon-chevron-right', 
            closedClass:'glyphicon-chevron-down'
        });

        // show the tree open at start 
        this.$(".js-map-group").trigger("click");
    }
});

/*
 this view will be always present; when we "open" and "close" the menu, this is what really happens:
  - add/remove the "height: 95%" to style
  - show a new instance of the menuBody view in the region / close the region
 */


var MenuLV = ControlLV.extend({

    template: "menu/templates/menu.html",

    modelEvents: {
        "change:menuOpen":"toggleRegion"
    },

    ui: {
        menuBtn: "i.menu-icon",
        fullscreenBtn: "a.js-full-screen"
    },

    events: {
        "click @ui.menuBtn": "toggleMenuOpen",
        "click @ui.fullscreenBtn": "fullscreenBtnClicked"
    },

    regions: {
        bodyRegion: "div.mn-r-menu-body"
    },

    fullscreenBtnClicked: function(){

        if($.fullscreen.isFullScreen()){
            cartografiaChannel.request("closeFullscreen", "#map-container");    
        }else{
            cartografiaChannel.request("openFullscreen", "#map-container");    
        }
        
    },

    toggleMenuOpen: function(){

        var menuOpen = this.model.get("menuOpen");
        this.model.set("menuOpen", !menuOpen);
    },

    toggleRegion: function(e){

        if(this.model.get("menuOpen")===true){
            this.show();
        }
        else{
            this.reset();
        }
    },

    show: function(){
        this.$el.css("height", "95%");
        this.$(".menu-container").addClass("map-menu-open");

        var menuBodyIV = new MenuBodyIV({
            model: this.model
        });

        this.bodyRegion.show(menuBodyIV);

        // manually adjust the height of the menu body; we do this manually so that the scroll
        // only affects the menu body and not the header (which is where the menu button is);
        // we want the menu button always visible;

        var menuBodyHeight = this.$(".menu-container").height() - this.$(".menu-header").height();
        this.bodyRegion.currentView.$el.css("height", menuBodyHeight);
        this.bodyRegion.currentView.$el.css("overflow-x", "auto");
    },

    reset: function(){

        this.bodyRegion.reset();

        // remove the height because after closing the menu sometimes the body region will still
        // be selected, giving a strange effect
        this.$el.css("height", "");
        this.$(".menu-container").removeClass("map-menu-open");
    }
});
