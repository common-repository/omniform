<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\ServiceProvider;

use OmniForm\Dependencies\League\Container\ContainerAwareInterface;
/** @internal */
interface ServiceProviderInterface extends ContainerAwareInterface
{
    public function getIdentifier() : string;
    public function provides(string $id) : bool;
    public function register() : void;
    public function setIdentifier(string $id) : ServiceProviderInterface;
}
