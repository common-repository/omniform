<?php

/*
 * This file is part of Respect/Validation.
 *
 * (c) Alexandre Gomes Gaigalas <alganet@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE file
 * that was distributed with this source code.
 */
declare (strict_types=1);
namespace OmniForm\Dependencies\Respect\Validation\Exceptions;

/**
 * @author Kirill Dlussky <kirill@dlussky.ru>
 * @internal
 */
final class ContainsAnyException extends ValidationException
{
    /**
     * {@inheritDoc}
     */
    protected $defaultTemplates = [self::MODE_DEFAULT => [self::STANDARD => '{{name}} must contain at least one of the values {{needles}}'], self::MODE_NEGATIVE => [self::STANDARD => '{{name}} must not contain any of the values {{needles}}']];
}
