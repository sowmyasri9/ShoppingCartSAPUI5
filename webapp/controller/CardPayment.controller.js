sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "LoginPoc/LoginPoc/util/Constants"
], function (Controller, MessageToast, JSONModel, Constant) {
	"use strict";

	return Controller.extend("LoginPoc.LoginPoc.controller.CardPayment", {
		/* 
		 *@function onInit
		 *@summary Called as the page loads
		 */
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel(Constant.Model.LOGIN_MODEL);
			this.getView().setModel(oModel);
			console.log(oModel);
			var oPayModel = this.getOwnerComponent().getModel(Constant.Model.PAYMENT_DETAILS_MODEL);
			this.getView().setModel(oPayModel, "Payment");
		},
		enteredText: function (oEvent) {
			var sInput = oEvent.getSource();
			var sRegex = /^[0-9-]*$/;
			if (sInput.getValue().match(sRegex)) {
				if (sInput.getValue().length === 4 || sInput.getValue().length === 9 || sInput.getValue().length === 14) {
					var sVal = sInput.getValue() + "-";
					sInput.setValue(sVal);
				}
			} else {
				var sLen = sInput.getValue();
				var sLength = sLen.slice(0, sLen.length - 1);
				sInput.setValue(sLength);
			}
		},
		validateName: function (oEvent) {
			var input = oEvent.getSource();
			var mailregex = /^[a-zA-Z.]*$/;
			if (!(input.getValue().match(mailregex))) {
				var lenT = input.getValue();
				var len = lenT.slice(0, lenT.length - 1);
				input.setValue(len);
			}
		},
		selectedCountry: function (oEvent) {
				var oModelData = this.getOwnerComponent().getModel(Constant.Model.LOGIN_MODEL);
			var sCountry = oEvent.getSource().getSelectedItem().getText();
			console.log(sCountry);
			var aCountries=oModelData.getData().countries;
			console.log(aCountries);
			for(var i=0;i<aCountries.length;i++){
				if(aCountries[i].name===sCountry){
				var aStates=aCountries[i].states;
				oModelData.setData(aStates);
				break;
				}
			}
				this.getView().setModel(oModelData,"States");
		console.log(oModelData);	
		}

	});
});