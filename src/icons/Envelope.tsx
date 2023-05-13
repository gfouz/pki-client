import * as React from 'react';
import { ISvgProps } from './constants';

export function SvgEnvelope(props: React.SVGProps<SVGSVGElement> | ISvgProps) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: props.width || '1em',
      length: props.height || 'auto',
      ...props,
    },
    React.createElement('path', {
      fill: props.color,
      d: 'M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969.562.343.563-.343L27 10.875V24H5z',
    })
  );
}
export default SvgEnvelope;
