<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument;

/** @internal */
interface ArgumentInterface
{
    /**
     * @return mixed
     */
    public function getValue();
}
