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

const IconCardTitle: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M785.066667 85.333333H241.066667C192 85.333333 149.333333 128 149.333333 177.066667v672c0 49.066667 40.533333 89.6 89.6 89.6 4.266667 0 6.4 0 10.666667-2.133334L512 791.466667l262.4 145.066666c2.133333 2.133333 6.4 2.133333 10.666667 2.133334 49.066667 0 89.6-40.533333 89.6-89.6V177.066667C874.666667 128 834.133333 85.333333 785.066667 85.333333zM704 618.666667H320c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h384c12.8 0 21.333333 8.533333 21.333333 21.333333s-10.666667 21.333333-21.333333 21.333334z m0-149.333334H320c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h384c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z m0-149.333333H320c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h384c12.8 0 21.333333 8.533333 21.333333 21.333334s-8.533333 21.333333-21.333333 21.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconCardTitle.defaultProps = {
  size: 1,
};

export default IconCardTitle;
