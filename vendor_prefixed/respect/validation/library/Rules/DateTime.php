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

use DateTimeInterface;
use OmniForm\Dependencies\Respect\Validation\Helpers\CanValidateDateTime;
use function gmdate;
use function is_scalar;
use function strtotime;
/**
 * @author Alexandre Gomes Gaigalas <alganet@gmail.com>
 * @author Emmerson Siqueira <emmersonsiqueira@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class DateTime extends AbstractRule
{
    use CanValidateDateTime;
    /**
     * @var string|null
     */
    private $format;
    /**
     * @var string
     */
    private $sample;
    /** @phpstan-ignore-line */
    /**
     * Initializes the rule.
     */
    public function __construct(?string $format = null)
    {
        $this->format = $format;
        $this->sample = gmdate($format ?: 'c', strtotime('2005-12-30 01:02:03'));
    }
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if ($input instanceof DateTimeInterface) {
            return $this->format === null;
        }
        if (!is_scalar($input)) {
            return \false;
        }
        if ($this->format === null) {
            return strtotime((string) $input) !== \false;
        }
        return $this->isDateTime($this->format, (string) $input);
    }
}
