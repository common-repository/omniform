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
 * Exceptions to be thrown by the Attribute Rule.
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Emmerson Siqueira <emmersonsiqueira@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class KeyException extends NestedValidationException implements NonOmissibleException
{
    public const NOT_PRESENT = 'not_present';
    public const INVALID = 'invalid';
    /**
     * {@inheritDoc}
     */
    protected $defaultTemplates = [self::MODE_DEFAULT => [self::NOT_PRESENT => '{{name}} must be present', self::INVALID => '{{name}} must be valid'], self::MODE_NEGATIVE => [self::NOT_PRESENT => '{{name}} must not be present', self::INVALID => '{{name}} must not be valid']];
    /**
     * {@inheritDoc}
     */
    protected function chooseTemplate() : string
    {
        return $this->getParam('hasReference') ? self::INVALID : self::NOT_PRESENT;
    }
}
