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

use function is_null;
use function is_scalar;
use function preg_match;
/**
 * Validates whether a string contains no whitespace (spaces, tabs and line breaks).
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Augusto Pascutti <augusto@phpsp.org.br>
 * @author Danilo Benevides <danilobenevides01@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class NoWhitespace extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (is_null($input)) {
            return \true;
        }
        if (is_scalar($input) === \false) {
            return \false;
        }
        return !preg_match('#\\s#', (string) $input);
    }
}
