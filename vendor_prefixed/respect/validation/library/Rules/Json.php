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

use function function_exists;
use function is_string;
use function json_decode;
use function json_last_error;
use const JSON_ERROR_NONE;
/**
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Danilo Benevides <danilobenevides01@gmail.com>
 * @author Emmerson Siqueira <emmersonsiqueira@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class Json extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (!is_string($input) || $input === '') {
            return \false;
        }
        if (function_exists('OmniForm\\Dependencies\\json_validate')) {
            return json_validate($input);
        }
        json_decode($input);
        return json_last_error() === JSON_ERROR_NONE;
    }
}
