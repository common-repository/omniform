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
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class BetweenException extends NestedValidationException
{
    /**
     * {@inheritDoc}
     */
    protected $defaultTemplates = [self::MODE_DEFAULT => [self::STANDARD => '{{name}} must be between {{minValue}} and {{maxValue}}'], self::MODE_NEGATIVE => [self::STANDARD => '{{name}} must not be between {{minValue}} and {{maxValue}}']];
}
