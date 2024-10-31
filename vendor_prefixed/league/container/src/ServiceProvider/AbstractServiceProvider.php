<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\ServiceProvider;

use OmniForm\Dependencies\League\Container\ContainerAwareTrait;
/** @internal */
abstract class AbstractServiceProvider implements ServiceProviderInterface
{
    use ContainerAwareTrait;
    /**
     * @var string
     */
    protected $identifier;
    public function getIdentifier() : string
    {
        return $this->identifier ?? \get_class($this);
    }
    public function setIdentifier(string $id) : ServiceProviderInterface
    {
        $this->identifier = $id;
        return $this;
    }
}
