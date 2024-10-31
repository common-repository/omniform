<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container;

use BadMethodCallException;
use OmniForm\Dependencies\League\Container\Exception\ContainerException;
/** @internal */
trait ContainerAwareTrait
{
    /**
     * @var ?DefinitionContainerInterface
     */
    protected $container;
    public function setContainer(DefinitionContainerInterface $container) : ContainerAwareInterface
    {
        $this->container = $container;
        if ($this instanceof ContainerAwareInterface) {
            return $this;
        }
        throw new BadMethodCallException(\sprintf('Attempt to use (%s) while not implementing (%s)', ContainerAwareTrait::class, ContainerAwareInterface::class));
    }
    public function getContainer() : DefinitionContainerInterface
    {
        if ($this->container instanceof DefinitionContainerInterface) {
            return $this->container;
        }
        throw new ContainerException('No container implementation has been set.');
    }
}
