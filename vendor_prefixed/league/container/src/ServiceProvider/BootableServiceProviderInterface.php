<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\ServiceProvider;

/** @internal */
interface BootableServiceProviderInterface extends ServiceProviderInterface
{
    /**
     * Method will be invoked on registration of a service provider implementing
     * this interface. Provides ability for eager loading of Service Providers.
     *
     * @return void
     */
    public function boot() : void;
}
