import * as React from 'react';
import { ISvgProps } from './constants';

export function Download(props: React.SVGProps<SVGSVGElement> | ISvgProps) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 20 20',
      width: props.width || '1em',
      length: props.height || 'auto',
      ...props,
    },
    React.createElement('path', {
      fill: props.color,
      d: 'M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z',
    })
  );
}
export default Download;
