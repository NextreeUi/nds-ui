import * as React from 'react';

export interface Accordion {
  wrap?: boolean;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  iconLocation?: 'left' | 'right';
  iconRotate?: 'deg90' | 'deg180' | 'deg270';
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
}

export interface InputProps extends Accordion {
  [key: string]: any
}

export interface InputOnChangeData extends InputProps {
  value: string
}