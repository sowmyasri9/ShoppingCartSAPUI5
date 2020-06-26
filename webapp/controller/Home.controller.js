sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "LoginPoc/LoginPoc/util/Constants"
], function(Controller, MessageToast, JSONModel, Constant) {
	"use strict";

	return Controller.extend("LoginPoc.LoginPoc.controller.Login", {
		/* 
		 *@function onInit
		 *@summary Called as the page loads
		 */
		onInit: function() {
			var oModel = this.getOwnerComponent().getModel(Constant.Model.LOGIN_MODEL);
			this.getView().setModel(oModel);
		},
		/*
		 *@function onSearchProducts
		 *@summary To search a product by its name
		 */
		onSearchProducts: function(oEvent) {
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var oFilter = new sap.ui.model.Filter(Constant.Ids.NAME, sap.ui.model.FilterOperator.Contains, sQuery);
			}
			var oList = this.getView().byId(Constant.Ids.PRODUCTS);
			var oBinding = oList.getBinding(Constant.Ids.ITEMS);
			oBinding.filter(oFilter);

		},
		/*
		 *@function handlePress
		 *@summary Opens a fragment when sort icon is pressed
		 */
		handlePress: function() {
			if (!this.dialog) {
				this.dialog = sap.ui.xmlfragment(Constant.Fragment.SORT_PRODUCTS, this);
			}

			this.dialog.open();
		},
		/*
		 *@function closeDialog
		 *@summary Closes the opened Dialog
		 */
		closeDialog: function() {
			this.dialog.close();
		},
		/*
		 *@function onSort
		 *@summary Sorts items based on given Product name or Price details
		 */
		onSort: function() {

			var sSortBy = sap.ui.getCore().byId(Constant.Ids.SORTBY).getValue();
			var oList = this.getView().byId(Constant.Ids.PRODUCTS);
			var oBinding = oList.getBinding(Constant.Ids.ITEMS);
			if (sSortBy === Constant.String.PRICE) {
				var oSorter = new sap.ui.model.Sorter(Constant.Ids.PRICE);
				oBinding.sort(oSorter);
				this.dialog.close();
			} else {
				var oSort = new sap.ui.model.Sorter(Constant.Ids.NAME);
				oBinding.sort(oSort);
				this.dialog.close();

			}

		},
		/* 
		 *@function onCheck
		 *@summary Gets all the selected rows and calculates the total amount after checking out
		 */
		onCheck: function() {
			var oCartModel = this.getOwnerComponent().getModel(Constant.Model.CART_ITEMS_MODEL);
			var oPaymentModel = this.getOwnerComponent().getModel(Constant.Model.PAYMENT_DETAILS_MODEL);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var aContexts = this.getView().byId(Constant.Ids.PRODUCTS).getSelectedContexts();
			var oItems = aContexts.map(
				function(c) {
					return c.getObject();
				});
			oCartModel.setProperty("/oSelectedItems", oItems);
			oPaymentModel.setProperty("/oPaymentDetails", oItems);
			var oPayment = oPaymentModel.getData();
			var len = oPayment.oPaymentDetails.length;
			var amount = 0;
			for (var i = 0; i < len; i++) {
				var payDetails = oPayment.oPaymentDetails[i];
				amount = amount + payDetails.price;
			}
			oPaymentModel.setProperty("/oTotalAmount", amount);
			oRouter.navTo(Constant.NavView.CARTITEMS);

		}
	});

});