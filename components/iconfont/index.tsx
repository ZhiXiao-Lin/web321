/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconCardTitle from './IconCardTitle';
import IconMenu from './IconMenu';
export { default as IconCardTitle } from './IconCardTitle';
export { default as IconMenu } from './IconMenu';

export type IconNames = 'card-title' | 'menu';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'card-title':
      return <IconCardTitle {...rest} />;
    case 'menu':
      return <IconMenu {...rest} />;

  }

  return null;
};

export default IconFont;
