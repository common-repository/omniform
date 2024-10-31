<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Argument;

use OmniForm\Dependencies\League\Container\ContainerAwareInterface;
use ReflectionFunctionAbstract;
/** @internal */
interface ArgumentResolverInterface extends ContainerAwareInterface
{
    public function resolveArguments(array $arguments) : array;
    public function reflectArguments(ReflectionFunctionAbstract $method, array $args = []) : array;
}
