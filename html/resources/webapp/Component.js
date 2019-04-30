sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"apps/html/model/models",
	"sap/m/routing/RouteMatchedHandler",
	"sap/ui/core/routing/History",
	"jquery.sap.global"
], function (UIComponent, Device, models,Router,jquery) {
	"use strict";

	return UIComponent.extend("apps.html.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		 	
		 getRouter: function() {
		      return sap.ui.core.UIComponent.getRouterFor(this);
		    },
		    
		init: function () {
			// call the base component's init function
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this.getRouter().initialize();
			
		}
	
		    
	});
});