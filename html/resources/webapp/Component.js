sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"apps/html/model/models"
], function (UIComponent, Device, models) {
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
		init: function () {
			// call the base component's init function
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		 getRouter: function() {
		      return sap.ui.core.UIComponent.getRouterFor(this);
		    }
	});
});