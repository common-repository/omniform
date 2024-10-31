<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument;

/** @internal */
interface ResolvableArgumentInterface extends ArgumentInterface
{
    public function getValue() : string;
}
