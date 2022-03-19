<?php
/**
 * Copyright © Rob Aimes - https://aimes.dev/
 * https://github.com/robaimes
 */

namespace Aimes\CheckoutDesignsExample\Model\Checkout\Design\CleanCheckoutExample;

use Magento\Checkout\Block\Checkout\LayoutProcessorInterface;

class LayoutProcessor implements LayoutProcessorInterface
{
    /**
     * @inheritDoc
     */
    public function process($jsLayout): array
    {
        return $jsLayout;
    }
}
