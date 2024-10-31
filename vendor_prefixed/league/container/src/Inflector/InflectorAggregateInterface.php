<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Inflector;

use IteratorAggregate;
use OmniForm\Dependencies\League\Container\ContainerAwareInterface;
/** @internal */
interface InflectorAggregateInterface extends ContainerAwareInterface, IteratorAggregate
{
    public function add(string $type, callable $callback = null) : Inflector;
    public function inflect(object $object);
}
