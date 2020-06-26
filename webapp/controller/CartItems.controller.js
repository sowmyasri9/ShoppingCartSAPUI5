sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "LoginPoc/LoginPoc/util/Constants"
], function(Controller, MessageToast, JSONModel, Constant) {
	"use strict";

	return Controller.extend("LoginPoc.LoginPoc.controller.CartItems", {
		/* 
		 *@function onInit
		 *@summary Called as the page loads
		 */
		onInit: function() {

			var oCartModel = this.getOwnerComponent().getModel(Constant.Model.CART_ITEMS_MODEL);
			var oPayModel = this.getOwnerComponent().getModel(Constant.Model.PAYMENT_DETAILS_MODEL);
			this.getView().setModel(oCartModel);
			this.getView().setModel(oPayModel, "Payment");
		},
		/* 
		 *@function handleBack
		 *@summary Navigate back to Home View page
		 */
		handleBack: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(Constant.NavView.HOME);
		},
		proceedToPay:function(){
				var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
				oRoute.navTo(Constant.NavView.CARDPAYMENT);
		}
	});

});