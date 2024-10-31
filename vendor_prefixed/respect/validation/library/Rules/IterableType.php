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
namespace OmniForm\Dependencies\Respect\Validation\Rules;

use OmniForm\Dependencies\Respect\Validation\Helpers\CanValidateIterable;
/**
 * Validates whether the pseudo-type of the input is iterable or not.
 *
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class IterableType extends AbstractRule
{
    use CanValidateIterable;
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        return $this->isIterable($input);
    }
}
