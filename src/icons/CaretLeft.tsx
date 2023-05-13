import * as React from 'react';
import { ISvgProps } from './constants';

export function CaretLeft(props: React.SVGProps<SVGSVGElement> | ISvgProps) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: props.width || '1em',
      length: props.height || 'auto',
      ...props,
    },
    React.createElement('path', {
      fill: props.color,
      d: 'M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z',
    })
  );
}
export default CaretLeft;
