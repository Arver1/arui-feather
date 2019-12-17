/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Button from '../button/button';

import { createCn } from 'bem-react-classname';
import { withTheme } from '../cn';

/**
 * Компонент тэг.
 *
 * @extends Button
 */
class TagButton extends Button {
    cn = createCn('tag-button');
}

export default withTheme(TagButton);
