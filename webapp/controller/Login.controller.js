sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "LoginPoc/LoginPoc/util/Constants",
	"sap/ui/core/ValueState"
], function(Controller, MessageToast, JSONModel, Constant, ValueState) {
	"use strict";

	return Controller.extend("LoginPoc.LoginPoc.controller.Login", {
		/* 
		 *@function onInit
		 *@summary Called as the page loads
		 */
		onInit: function() {

		},
		/* 
		 *@function onLogin
		 *@summary Checks the Email Id and Password entered against the information stored in the JSON 
		 */
		onLogin: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var sEmail = this.getView().byId(Constant.Ids.EMAIL).getValue();
			var sPwd = this.getView().byId(Constant.Ids.PASSWORD).getValue();
			var oData = this.getOwnerComponent().getModel(Constant.Model.LOGIN_MODEL);
			var oDataLogin = oData.getData().login;
			for (var i = 0; i < oDataLogin.length; i++) {
				if (sEmail === "") {
					this.getView().byId(Constant.Ids.EMAIL).setValueState(ValueState.Error);
				}
				if (sPwd === "") {
					this.getView().byId(Constant.Ids.PASSWORD).setValueState(ValueState.Error);
				}
				if (sEmail === oDataLogin[i].email && sPwd === oDataLogin[i].password) {
					MessageToast.show(Constant.Text.LOGIN_SUCCESS);
					oRouter.navTo(Constant.NavView.HOME);
					break;
				} else {
					MessageToast.show(Constant.Text.LOGIN_FAILED);
				}
			}
		}
	});

});