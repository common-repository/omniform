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
use OmniForm\Dependencies\Respect\Validation\Helpers\CanValidateDateTime;
use function gmdate;
use function is_scalar;
use function preg_match;
use function sprintf;
use function strtotime;
/**
 * Validates if input is a date.
 *
 * @author Bruno Luiz da Silva <contato@brunoluiz.net>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class Date extends AbstractRule
{
    use CanValidateDateTime;
    /**
     * @var string
     */
    private $format;
    /**
     * @var string
     */
    private $sample;
    /** @phpstan-ignore-line */
    /**
     * Initializes the rule.
     *
     * @throws ComponentException
     */
    public function __construct(string $format = 'Y-m-d')
    {
        if (!preg_match('/^[djSFmMnYy\\W]+$/', $format)) {
            throw new ComponentException(sprintf('"%s" is not a valid date format', $format));
        }
        $this->format = $format;
        $this->sample = gmdate($format, strtotime('2005-12-30'));
    }
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (!is_scalar($input)) {
            return \false;
        }
        return $this->isDateTime($this->format, (string) $input);
    }
}
