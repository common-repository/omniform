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
namespace OmniForm\Dependencies\Respect\Validation\Message\Stringifier;

use OmniForm\Dependencies\Respect\Validation\Message\ParameterStringifier;
use function is_string;
use function OmniForm\Dependencies\Respect\Stringifier\stringify;
/** @internal */
final class KeepOriginalStringName implements ParameterStringifier
{
    /**
     * {@inheritDoc}
     */
    public function stringify(string $name, $value) : string
    {
        if ($name === 'name' && is_string($value)) {
            return $value;
        }
        return stringify($value);
    }
}
