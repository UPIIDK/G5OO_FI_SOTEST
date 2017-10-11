sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Compras.controller.Resumen", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Compras.view.Resumen
		 */
			onInit: function() {
			
			var sRootPath = jQuery.sap.getModulePath("Compras"); 
			//var JModel = new sap.ui.model.json.JSONModel("./model/PurchaseOrders.json");
			 var JModel = new sap.ui.model.json.JSONModel([sRootPath, "model/BaseData.json"].join("/"));
			this.getView().setModel(JModel);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Resumen").attachPatternMatched(this._onObjectMatched, this);
			},
		
		_onObjectMatched: function (oEvent) {
			//this.getView().byId("TablaProducto").getModel().refresh(true);
			//this.getView().byId("NContract").mBindingInfos.value.binding.sPath = "/NumberContract/" + oEvent.getParameter("arguments").Jindex + "/Id";
			},
			
			PagAnt: function (){
			var RuteoPag = sap.ui.core.UIComponent.getRouterFor(this);
			RuteoPag.navTo("Compras");
		},
		
		handleWizardCancel : function () {
			this._handleMessageBoxOpen("Are you sure you want to cancel your Purchase?", "warning");
		},
		handleWizardSubmit : function () {
			this._handleMessageBoxOpen("Are you sure you want to submit your Purchar?", "confirm");
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Compras.view.Resumen
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Compras.view.Resumen
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Compras.view.Resumen
		 */
		//	onExit: function() {
		//
		//	}

	});

});