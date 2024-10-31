<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument\Literal;

use OmniForm\Dependencies\League\Container\Argument\LiteralArgument;
/** @internal */
class FloatArgument extends LiteralArgument
{
    public function __construct(float $value)
    {
        parent::__construct($value, LiteralArgument::TYPE_FLOAT);
    }
}
