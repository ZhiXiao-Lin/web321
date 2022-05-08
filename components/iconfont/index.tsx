/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconMenu from './IconMenu';
export { default as IconMenu } from './IconMenu';

export type IconNames = 'menu';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'menu':
      return <IconMenu {...rest} />;

  }

  return null;
};

export default IconFont;
