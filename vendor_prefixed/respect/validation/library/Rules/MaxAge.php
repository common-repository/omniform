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

/**
 * Validates a maximum age for a given date.
 *
 * @author Emmerson Siqueira <emmersonsiqueira@gmail.com>
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class MaxAge extends AbstractAge
{
    /**
     * {@inheritDoc}
     */
    protected function compare(int $baseDate, int $givenDate) : bool
    {
        return $baseDate <= $givenDate;
    }
}
