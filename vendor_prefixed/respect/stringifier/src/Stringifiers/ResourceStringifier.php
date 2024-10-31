<?php

/*
 * This file is part of Respect/Stringifier.
 *
 * (c) Henrique Moody <henriquemoody@gmail.com>
 *
 * For the full copyright and license information, please view the "LICENSE.md"
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace OmniForm\Dependencies\Respect\Stringifier\Stringifiers;

use function get_resource_type;
use function is_resource;
use function sprintf;
use OmniForm\Dependencies\Respect\Stringifier\Quoter;
use OmniForm\Dependencies\Respect\Stringifier\Stringifier;
/**
 * Converts a resource value into a string.
 *
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
final class ResourceStringifier implements Stringifier
{
    /**
     * @var Quoter
     */
    private $quoter;
    /**
     * Initializes the stringifier.
     *
     * @param Quoter $quoter
     */
    public function __construct(Quoter $quoter)
    {
        $this->quoter = $quoter;
    }
    /**
     * {@inheritdoc}
     */
    public function stringify($raw, int $depth) : ?string
    {
        if (!is_resource($raw)) {
            return null;
        }
        return $this->quoter->quote(sprintf('[resource] (%s)', get_resource_type($raw)), $depth);
    }
}
