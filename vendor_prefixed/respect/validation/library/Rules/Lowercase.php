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

use function is_string;
use function mb_strtolower;
/**
 * Validates whether the characters in the input are lowercase.
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Danilo Benevides <danilobenevides01@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @author Jean Pimentel <jeanfap@gmail.com>
 * @internal
 */
final class Lowercase extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (!is_string($input)) {
            return \false;
        }
        return $input === mb_strtolower($input);
    }
}
