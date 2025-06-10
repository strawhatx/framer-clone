import { ComponentType } from './index';

export interface ComponentStyle {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: number | string;
  fontSize?: number;
  fontWeight?: string;
  border?: string;
  width?: string;
  height?: string;
  fontStyle?: string;
  textDecoration?: string;
  borderLeft?: string;
}

export interface ComponentContent {
  text?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
}

export interface ComponentLayout {
  width: number;
  height: number;
}

export interface ComponentConfig {
  defaultStyle: ComponentStyle;
  defaultContent: ComponentContent;
  defaultLayout: ComponentLayout;
}

export type ComponentConfigs = Record<ComponentType, ComponentConfig>; 