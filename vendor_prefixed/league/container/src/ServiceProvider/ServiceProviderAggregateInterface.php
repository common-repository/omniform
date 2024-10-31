<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\ServiceProvider;

use IteratorAggregate;
use OmniForm\Dependencies\League\Container\ContainerAwareInterface;
/** @internal */
interface ServiceProviderAggregateInterface extends ContainerAwareInterface, IteratorAggregate
{
    public function add(ServiceProviderInterface $provider) : ServiceProviderAggregateInterface;
    public function provides(string $id) : bool;
    public function register(string $service) : void;
}
