import React from 'react';
import PixelCanvas from '@/components/ui/pixel-canvas'; // Ensure this path is correct
import { IconType } from 'react-icons';

interface PixelCanvasProps {
  icon: IconType;
  colors?: string[];
  gap?: number;
  speed?: number;
  variant?: 'default' | 'icon';
  noFocus?: boolean;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
}

const CustomPixelCanvas: React.FC<PixelCanvasProps> = ({
  icon: Icon,
  colors = ['#f8fafc', '#f1f5f9', '#cbd5e1'],
  gap = 10,
  speed = 25,
  variant = 'icon',
  noFocus = false,
  width = 100,
  height = 100,
  backgroundColor = 'transparent',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor,
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid #ccc',
      }}
    >
      <PixelCanvas
        gap={gap}
        speed={speed}
        colors={colors}
        variant={variant}
        noFocus={noFocus}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size="50%" color="#555" />
      </div>
    </div>
  );
};

export default CustomPixelCanvas;
