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

use function intval;
use function mb_strlen;
use function preg_match;
use function preg_replace;
/**
 * Validates whether the input is a CPF (Brazilian Natural Persons Register) number.
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @author Jair Henrique <jair.henrique@gmail.com>
 * @author Jayson Reis <santosdosreis@gmail.com>
 * @author Jean Pimentel <jeanfap@gmail.com>
 * @author William Espindola <oi@williamespindola.com.br>
 * @internal
 */
final class Cpf extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        // Code ported from jsfromhell.com
        $c = preg_replace('/\\D/', '', $input);
        if (mb_strlen($c) != 11 || preg_match('/^' . $c[0] . '{11}$/', $c) || $c === '01234567890') {
            return \false;
        }
        $n = 0;
        for ($s = 10, $i = 0; $s >= 2; ++$i, --$s) {
            $n += intval($c[$i]) * $s;
        }
        if ($c[9] != (($n %= 11) < 2 ? 0 : 11 - $n)) {
            return \false;
        }
        $n = 0;
        for ($s = 11, $i = 0; $s >= 2; ++$i, --$s) {
            $n += intval($c[$i]) * $s;
        }
        $check = ($n %= 11) < 2 ? 0 : 11 - $n;
        return $c[10] == $check;
    }
}
