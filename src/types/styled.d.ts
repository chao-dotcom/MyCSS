import 'styled-components';
import type { DesignTokens } from '../tokens/theme';

declare module 'styled-components' {
  // Augment DefaultTheme to be our design tokens shape
  export interface DefaultTheme extends DesignTokens {}
}


