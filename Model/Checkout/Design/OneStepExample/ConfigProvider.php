<?php
/**
 * Copyright © Rob Aimes - https://aimes.dev/
 * https://github.com/robaimes
 */

namespace Aimes\CheckoutDesignsExample\Model\Checkout\Design\OneStepExample;

use Magento\Checkout\Model\ConfigProviderInterface;

class ConfigProvider implements ConfigProviderInterface
{
    /**
     * @inheritDoc
     */
    public function getConfig(): array
    {
        return [];
    }
}
