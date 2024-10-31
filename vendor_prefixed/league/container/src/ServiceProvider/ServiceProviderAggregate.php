<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\ServiceProvider;

use Generator;
use OmniForm\Dependencies\League\Container\Exception\ContainerException;
use OmniForm\Dependencies\League\Container\ContainerAwareInterface;
use OmniForm\Dependencies\League\Container\ContainerAwareTrait;
/** @internal */
class ServiceProviderAggregate implements ServiceProviderAggregateInterface
{
    use ContainerAwareTrait;
    /**
     * @var ServiceProviderInterface[]
     */
    protected $providers = [];
    /**
     * @var array
     */
    protected $registered = [];
    public function add(ServiceProviderInterface $provider) : ServiceProviderAggregateInterface
    {
        if (\in_array($provider, $this->providers, \true)) {
            return $this;
        }
        $provider->setContainer($this->getContainer());
        if ($provider instanceof BootableServiceProviderInterface) {
            $provider->boot();
        }
        $this->providers[] = $provider;
        return $this;
    }
    public function provides(string $service) : bool
    {
        foreach ($this->getIterator() as $provider) {
            if ($provider->provides($service)) {
                return \true;
            }
        }
        return \false;
    }
    public function getIterator() : Generator
    {
        yield from $this->providers;
    }
    public function register(string $service) : void
    {
        if (\false === $this->provides($service)) {
            throw new ContainerException(\sprintf('(%s) is not provided by a service provider', $service));
        }
        foreach ($this->getIterator() as $provider) {
            if (\in_array($provider->getIdentifier(), $this->registered, \true)) {
                continue;
            }
            if ($provider->provides($service)) {
                $provider->register();
                $this->registered[] = $provider->getIdentifier();
            }
        }
    }
}
