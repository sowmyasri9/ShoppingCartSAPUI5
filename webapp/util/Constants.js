sap.ui.define([],
	function() {
		"use strict";
		return {
			/**
			 * this object holds all Constants
			 */
			Text: {

				LOGIN_SUCCESS: "LOGIN SUCCESS",
				LOGIN_FAILED: "LOGIN FAILED"
			},
			Model: {
				LOGIN_MODEL: "LoginModel",
				HOME_MODEL: "HomeModel",
				CART_ITEMS_MODEL:"CartItemsModel",
				PAYMENT_DETAILS_MODEL:"PaymentDetails"
			},
			Ids: {

				EMAIL: "inputEmail",
				PASSWORD: "passwordInput",
				PRODUCTS: "products",
				ITEMS: "items",
				NAME: "name",
				PRICE: "price",
				SORTBY: "sortBy"

			},
			String: {
				PRICE: "Price"
			},
			Fragment: {
				SORT_PRODUCTS: "LoginPoc.LoginPoc.view.SortProducts"
			},
			NavView: {
				HOME: "Home",
				CARTITEMS: "CartItems",
				CARDPAYMENT:"CardPayment"
			},
			TitleAndState: {
				TITLE: "Information",
				STATE: "Information",
				TYPE: "Message"
			}

		};
	});