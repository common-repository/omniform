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

use OmniForm\Dependencies\Respect\Validation\Helpers\CanValidateUndefined;
use function in_array;
/**
 * Abstract class for searches into arrays.
 *
 * @author Henrique Moody <henriquemoody@gmail.com>
 * @internal
 */
abstract class AbstractSearcher extends AbstractRule
{
    use CanValidateUndefined;
    /**
     * @return mixed[]
     */
    protected abstract function getDataSource() : array;
    /**
     * {@inheritDoc}
     */
    public function validate($input) : bool
    {
        $dataSource = $this->getDataSource();
        if ($this->isUndefined($input) && empty($dataSource)) {
            return \true;
        }
        return in_array($input, $dataSource, \true);
    }
}
