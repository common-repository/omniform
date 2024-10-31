<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container;

/** @internal */
interface ContainerAwareInterface
{
    public function getContainer() : DefinitionContainerInterface;
    public function setContainer(DefinitionContainerInterface $container) : ContainerAwareInterface;
}
