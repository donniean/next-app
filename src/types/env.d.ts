declare module '*.svg' {
  import type { ComponentProps, FunctionComponent } from 'react';

  const ReactComponent: FunctionComponent<
    ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}
