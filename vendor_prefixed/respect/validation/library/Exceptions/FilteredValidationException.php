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
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
class FilteredValidationException extends ValidationException
{
    public const EXTRA = 'extra';
    /**
     * {@inheritDoc}
     */
    protected function chooseTemplate() : string
    {
        return $this->getParam('additionalChars') ? self::EXTRA : self::STANDARD;
    }
}
