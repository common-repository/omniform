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
 * @author Andre Ramaciotti <andre@ramaciotti.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class SpaceException extends FilteredValidationException
{
    /**
     * {@inheritDoc}
     */
    protected $defaultTemplates = [self::MODE_DEFAULT => [self::STANDARD => '{{name}} must contain only space characters', self::EXTRA => '{{name}} must contain only space characters and {{additionalChars}}'], self::MODE_NEGATIVE => [self::STANDARD => '{{name}} must not contain space characters', self::EXTRA => '{{name}} must not contain space characters or {{additionalChars}}']];
}
