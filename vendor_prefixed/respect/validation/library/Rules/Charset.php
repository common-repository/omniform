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

use OmniForm\Dependencies\Respect\Validation\Exceptions\ComponentException;
use function array_diff;
use function in_array;
use function mb_detect_encoding;
use function mb_list_encodings;
/**
 * Validates if a string is in a specific charset.
 *
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @author William Espindola <oi@williamespindola.com.br>
 * @internal
 */
final class Charset extends AbstractRule
{
    /**
     * @var string[]
     */
    private $charset;
    /**
     * Initializes the rule.
     *
     * @throws ComponentException
     */
    public function __construct(string ...$charset)
    {
        $available = mb_list_encodings();
        if (!empty(array_diff($charset, $available))) {
            throw new ComponentException('Invalid charset');
        }
        $this->charset = $charset;
    }
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        return in_array(mb_detect_encoding($input, $this->charset, \true), $this->charset, \true);
    }
}
