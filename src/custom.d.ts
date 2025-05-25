declare namespace JSX {
  interface IntrinsicElements {
    'pixel-canvas': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'data-gap'?: string | number;
      'data-speed'?: string | number;
      'data-colors'?: string;
      'data-variant'?: string;
      'data-no-focus'?: string | boolean;
      // You can add any other specific props for pixel-canvas here
      // For example, if 'ref' is meant to be a specific type:
      // ref?: React.RefObject<YourPixelCanvasElementType>;
    };
  }
}
