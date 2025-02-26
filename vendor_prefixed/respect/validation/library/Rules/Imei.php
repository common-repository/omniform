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

use function is_scalar;
use function mb_strlen;
use function preg_replace;
/**
 * Validates is the input is a valid IMEI.
 *
 * @author Alexander Gorshkov <mazanax@yandex.ru>
 * @author Danilo Benevides <danilobenevides01@gmail.com>
 * @author Diego Oliveira <contato@diegoholiveira.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class Imei extends AbstractRule
{
    private const IMEI_SIZE = 15;
    /**
     * @see https://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
     *
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (!is_scalar($input)) {
            return \false;
        }
        $numbers = (string) preg_replace('/\\D/', '', (string) $input);
        if (mb_strlen($numbers) != self::IMEI_SIZE) {
            return \false;
        }
        return (new Luhn())->validate($numbers);
    }
}
