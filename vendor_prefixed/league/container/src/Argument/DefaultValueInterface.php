<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument;

/** @internal */
interface DefaultValueInterface extends ArgumentInterface
{
    /**
     * @return mixed
     */
    public function getDefaultValue();
}
