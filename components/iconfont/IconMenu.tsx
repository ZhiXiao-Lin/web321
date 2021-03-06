/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconMenu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M981.333333 554.666667 42.666667 554.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667 0-23.466667 19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667C1024 535.466667 1004.8 554.666667 981.333333 554.666667zM981.333333 213.333333 42.666667 213.333333c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667S1004.8 213.333333 981.333333 213.333333zM42.666667 810.666667l938.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667 0 23.466667-19.2 42.666667-42.666667 42.666667L42.666667 896c-23.466667 0-42.666667-19.2-42.666667-42.666667C0 829.866667 19.2 810.666667 42.666667 810.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMenu.defaultProps = {
  size: 1,
};

export default IconMenu;
