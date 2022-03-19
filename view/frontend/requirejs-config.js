/**
 * The below mixins have been disabled as they have been replaced with custom components.
 *
 * Mixins should be used to extend global functionality, not change logic. For example, the current
 * shipping-mixin changes the logic of validating the form for the default Magento shipping component.
 * Instead, we should create a custom component that extends the default, and change the logic there instead.
 *
 * This is an attempt to encourage proper component declarations and prevent 'abusive' mixins.
 */
var config = {
    config: {
        mixins: {
            /*
            This mixin remains enabled because of limitations in the navigate code.
            Ideally, the navigation logic should be tied to the step itself and not the navigator.

            'Magento_Checkout/js/model/step-navigator': {
                'Rubic_CleanCheckoutTheme/js/mixin/navigator-mixin': false
            },
            */
            'Magento_Checkout/js/view/progress-bar': {
                'Rubic_CleanCheckoutTheme/js/mixin/progress-bar-mixin': false
            },
            'Magento_Checkout/js/view/shipping': {
                'Rubic_CleanCheckoutTheme/js/mixin/shipping-mixin': false
            },
            'Magento_Checkout/js/view/payment': {
                'Rubic_CleanCheckoutTheme/js/mixin/payment-mixin': false
            }
        }
    }
};
