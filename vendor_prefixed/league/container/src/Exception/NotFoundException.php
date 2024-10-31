<?php

declare (strict_types=1);
namespace OmniForm\Dependencies\League\Container\Exception;

use OmniForm\Dependencies\Psr\Container\NotFoundExceptionInterface;
use InvalidArgumentException;
/** @internal */
class NotFoundException extends InvalidArgumentException implements NotFoundExceptionInterface
{
}
