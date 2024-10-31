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

use OmniForm\Dependencies\Psr\Http\Message\UploadedFileInterface;
use SplFileInfo;
use function is_scalar;
use function is_uploaded_file;
/**
 * Validates if the given data is a file that was uploaded via HTTP POST.
 *
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @author Paul Karikari <paulkarikari1@gmail.com>
 * @internal
 */
final class Uploaded extends AbstractRule
{
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        if ($input instanceof SplFileInfo) {
            return $this->validate($input->getPathname());
        }
        if ($input instanceof UploadedFileInterface) {
            return \true;
        }
        if (!is_scalar($input)) {
            return \false;
        }
        return is_uploaded_file((string) $input);
    }
}
