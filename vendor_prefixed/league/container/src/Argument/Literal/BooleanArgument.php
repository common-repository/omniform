<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument\Literal;

use OmniForm\Dependencies\League\Container\Argument\LiteralArgument;
/** @internal */
class BooleanArgument extends LiteralArgument
{
    public function __construct(bool $value)
    {
        parent::__construct($value, LiteralArgument::TYPE_BOOL);
    }
}
