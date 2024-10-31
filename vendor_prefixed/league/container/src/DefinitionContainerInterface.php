<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container;

use OmniForm\Dependencies\League\Container\Definition\DefinitionInterface;
use OmniForm\Dependencies\League\Container\Inflector\InflectorInterface;
use OmniForm\Dependencies\League\Container\ServiceProvider\ServiceProviderInterface;
use OmniForm\Dependencies\Psr\Container\ContainerInterface;
/** @internal */
interface DefinitionContainerInterface extends ContainerInterface
{
    public function add(string $id, $concrete = null) : DefinitionInterface;
    public function addServiceProvider(ServiceProviderInterface $provider) : self;
    public function addShared(string $id, $concrete = null) : DefinitionInterface;
    public function extend(string $id) : DefinitionInterface;
    public function getNew($id);
    public function inflector(string $type, callable $callback = null) : InflectorInterface;
}
