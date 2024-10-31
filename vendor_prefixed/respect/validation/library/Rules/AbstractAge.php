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

use OmniForm\Dependencies\Respect\Validation\Helpers\CanValidateDateTime;
use function gmdate;
use function date_parse_from_format;
use function is_scalar;
use function strtotime;
use function vsprintf;
/**
 * Abstract class to validate ages.
 *
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
abstract class AbstractAge extends AbstractRule
{
    use CanValidateDateTime;
    /**
     * @var int
     */
    private $age;
    /**
     * @var string|null
     */
    private $format;
    /**
     * @var int
     */
    private $baseDate;
    /**
     * Should compare the current base date with the given one.
     *
     * The dates are represented as integers in the format "Ymd".
     */
    protected abstract function compare(int $baseDate, int $givenDate) : bool;
    /**
     * Initializes the rule.
     */
    public function __construct(int $age, ?string $format = null)
    {
        $this->age = $age;
        $this->format = $format;
        $this->baseDate = (int) gmdate('Ymd') - $this->age * 10000;
    }
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if (!is_scalar($input)) {
            return \false;
        }
        if ($this->format === null) {
            return $this->isValidWithoutFormat((string) $input);
        }
        return $this->isValidWithFormat($this->format, (string) $input);
    }
    private function isValidWithoutFormat(string $dateTime) : bool
    {
        $timestamp = strtotime($dateTime);
        if ($timestamp === \false) {
            return \false;
        }
        return $this->compare($this->baseDate, (int) gmdate('Ymd', $timestamp));
    }
    private function isValidWithFormat(string $format, string $dateTime) : bool
    {
        if (!$this->isDateTime($format, $dateTime)) {
            return \false;
        }
        return $this->compare($this->baseDate, (int) vsprintf('%d%02d%02d', date_parse_from_format($format, $dateTime)));
    }
}
