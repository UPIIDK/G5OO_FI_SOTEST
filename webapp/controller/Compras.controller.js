sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("Compras.controller.Compras", {
		
			onInit: function() 
			{
			
			var sRootPath = jQuery.sap.getModulePath("Compras"); 
			//var JModel = new sap.ui.model.json.JSONModel("./model/PurchaseOrders.json");
			 var JModel = new sap.ui.model.json.JSONModel([sRootPath, "model/BaseData.json"].join("/"));
			this.getView().setModel(JModel);
			this.Json = "/NumberContract/";
			this.JsonIndex=0;
			},

		PressButon1: function () {
			this.getView().byId("NContract").mBindingInfos.value.binding.sPath = this.Json +  "0/Id";
			this.JsonIndex=1;
			this.getView().getModel().refresh(true);
		},

		PressButon2: function () {
			
			this.getView().byId("NContract").mBindingInfos.value.binding.sPath = this.Json + "1/Id";
			this.JsonIndex=2;
			this.getView().getModel().refresh(true);
			},
		
		PressButon3: function () {
			this.getView().byId("NContract").mBindingInfos.value.binding.sPath = this.Json + "2/Id";
			this.JsonIndex=3;
			this.getView().getModel().refresh(true);
			},	
		
		onPressResumen: function (){
			var RuteoPag = sap.ui.core.UIComponent.getRouterFor(this);
			//RuteoPag.navTo("Resumen",{Jindex: this.JsonIndex},{JName: this.Json});
			console.log(RuteoPag);
			RuteoPag.navTo("Resumen",{Jindex: this.JsonIndex});
		},
		
		_handleNavigationToStep : function (iStepNumber) {
			var fnAfterNavigate = function () {
				this.getView().byId("_id_wizard").goToStep(this.getView().byId("_id_wizard").getSteps()[iStepNumber]);
				// this._oNavContainer.detachAfterNavigate(fnAfterNavigate);
			}.bind(this);

			// this._oNavContainer.attachAfterNavigate(fnAfterNavigate);
			// this.backToWizardContent();
		},
		
		_handleMessageBoxOpen : function (sMessage, sMessageBoxType) {
			MessageBox[sMessageBoxType](sMessage, {
				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === MessageBox.Action.YES) {
						this._handleNavigationToStep(0);
						// this._wizard.discardProgress(this._wizard.getSteps()[0]);
					}
				}.bind(this)
			});
		},	
		
		HandleWizardCancel : function () {
			this._handleMessageBoxOpen("Are you sure you want to cancel your Purchase?", "warning");
		}
	});	
});