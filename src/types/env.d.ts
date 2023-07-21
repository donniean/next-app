declare module '*.svg' {
  import type { ComponentProps } from 'react';
  import { FunctionComponent } from 'react';

  export default FunctionComponent<ComponentProps<'svg'> & { title?: string }>;
}
