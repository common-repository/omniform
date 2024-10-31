<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Inflector;

/** @internal */
interface InflectorInterface
{
    public function getType() : string;
    public function inflect(object $object) : void;
    public function invokeMethod(string $name, array $args) : InflectorInterface;
    public function invokeMethods(array $methods) : InflectorInterface;
    public function setProperties(array $properties) : InflectorInterface;
    public function setProperty(string $property, $value) : InflectorInterface;
}
