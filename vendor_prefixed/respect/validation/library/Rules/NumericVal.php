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

use function is_numeric;
/**
 * Validates whether the input is numeric.
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Danilo Correa <danilosilva87@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class NumericVal extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        return is_numeric($input);
    }
}
