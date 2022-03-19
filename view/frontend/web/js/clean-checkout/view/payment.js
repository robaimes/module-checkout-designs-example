/**
 * Copyright © 2018 Rubic. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'Magento_Checkout/js/view/payment',
    'ko',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer'
], function (Payment, ko, quote, customer) {
    'use strict';

    /**
     * This is a direct copy of the 'payment-mixin' but using a custom component instead, which extends
     * the default payment component. This ensure that other designs are not polluted with invalid logic.
     */
    return Payment.extend({
        /**
         * Remove email step in payment template for virtual quotes.
         */
        defaults: {
            template: 'Rubic_CleanCheckoutTheme/payment',
            activeMethod: ''
        },

        /**
         * Disable visibility on billing, since it's no longer the first step.
         */
        isVisible: ko.observable(customer.isLoggedIn() && quote.isVirtual())
    });
});
