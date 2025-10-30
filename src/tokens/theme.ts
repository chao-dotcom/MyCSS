export type ColorPalette = {
  background: string;
  surface: string;
  surfaceVariant: string;
  text: string;
  onSurface: string;
  primary: string;
  onPrimary: string;
  secondary: string;
};

export type SpacingScale = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type RadiiScale = {
  none: string;
  sm: string;
  md: string;
  lg: string;
};

export type Typography = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string | number;
};

export type Elevation = {
  level1: string;
  level2: string;
  level3: string;
};

export type DesignTokens = {
  colors: ColorPalette;
  spacing: SpacingScale;
  radii: RadiiScale;
  typography: Typography;
  elevation: Elevation;
  gradients?: {
    primary: string;
    secondary: string;
    surface: string;
  };
  palettes?: Record<string, Record<
    | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
    string
  >>;
  sizes?: { sm: string; md: string; lg: string };
  glass?: { border: string; blur: string; surface: string };
  motion?: {
    easeOut: string;
    easeInOut: string;
    fast: string;
    normal: string;
    slow: string;
  };
};

export const lightTheme: DesignTokens = {
  colors: {
    background: '#fafafb',
    surface: '#ffffff',
    surfaceVariant: '#f4f6f8',
    text: '#0b1220',
    onSurface: '#0b1220',
    primary: '#16A34A',
    onPrimary: '#ffffff',
    secondary: '#64748b',
  },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px' },
  radii: { none: '0', sm: '4px', md: '8px', lg: '12px' },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700,
  },
  elevation: {
    level1: '0 6px 20px rgba(2, 8, 23, 0.06)',
    level2: '0 12px 30px rgba(2, 8, 23, 0.08)',
    level3: '0 20px 40px rgba(2, 8, 23, 0.10)',
  },
  gradients: {
    primary: 'linear-gradient(180deg, #22c55e 0%, #16A34A 100%)',
    secondary: 'linear-gradient(180deg, #eef1f5 0%, #e6eaef 100%)',
    surface: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
  },
  palettes: {
    gray: { '50': '#f7fafc','100':'#edf2f7','200':'#e2e8f0','300':'#cbd5e0','400':'#a0aec0','500':'#718096','600':'#4a5568','700':'#2d3748','800':'#1a202c','900':'#171923' },
    blue: { '50': '#ebf8ff','100':'#bee3f8','200':'#90cdf4','300':'#63b3ed','400':'#4299e1','500':'#3182ce','600':'#2b6cb0','700':'#2c5282','800':'#2a4365','900':'#1A365D' },
    teal: { '50':'#e6fffa','100':'#b2f5ea','200':'#81e6d9','300':'#4fd1c5','400':'#38b2ac','500':'#319795','600':'#2c7a7b','700':'#285e61','800':'#234e52','900':'#1D4044' },
    green:{ '50':'#ecfdf5','100':'#d1fae5','200':'#a7f3d0','300':'#6ee7b7','400':'#34d399','500':'#16A34A','600':'#15803d','700':'#166534','800':'#14532d','900':'#052e16' },
    red:  { '50':'#fff5f5','100':'#fed7d7','200':'#feb2b2','300':'#fc8181','400':'#f56565','500':'#e53e3e','600':'#c53030','700':'#9b2c2c','800':'#822727','900':'#63171B' },
    purple:{ '50':'#faf5ff','100':'#e9d8fd','200':'#d6bcfa','300':'#b794f4','400':'#9f7aea','500':'#805ad5','600':'#6b46c1','700':'#553c9a','800':'#44337a','900':'#322659' },
    orange:{ '50':'#fffaf0','100':'#feebc8','200':'#fbd38d','300':'#f6ad55','400':'#ed8936','500':'#dd6b20','600':'#c05621','700':'#9c4221','800':'#7b341e','900':'#652B19' }
  },
  sizes: { sm: '36px', md: '40px', lg: '48px' },
  glass: { border: '1px solid rgba(255,255,255,0.35)', blur: 'blur(12px)', surface: 'rgba(255,255,255,0.65)' },
  motion: { easeOut: 'cubic-bezier(0.2, 0.8, 0.2, 1)', easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', fast: '120ms', normal: '200ms', slow: '360ms' },
};

export const darkTheme: DesignTokens = {
  colors: {
    background: '#0b1020',
    surface: '#0f1627',
    surfaceVariant: '#152033',
    text: '#e5eaf2',
    onSurface: '#e5eaf2',
    primary: '#19824a',
    onPrimary: '#0b1020',
    secondary: '#94a3b8',
  },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px' },
  radii: { none: '0', sm: '4px', md: '8px', lg: '12px' },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700,
  },
  elevation: {
    level1: '0 6px 16px rgba(0, 0, 0, 0.45)',
    level2: '0 10px 28px rgba(0, 0, 0, 0.5)',
    level3: '0 18px 40px rgba(0, 0, 0, 0.55)',
  },
  gradients: {
    primary: 'linear-gradient(180deg, #34d399 0%, #19824a 100%)',
    secondary: 'linear-gradient(180deg, #1a253a 0%, #0f1627 100%)',
    surface: 'linear-gradient(180deg, rgba(15,22,39,1) 0%, rgba(11,16,32,1) 100%)',
  },
  palettes: {
    gray: { '50': '#1f2737','100':'#223047','200':'#2a3a57','300':'#33425f','400':'#3c4b6a','500':'#465575','600':'#5a6b8a','700':'#93a2b8','800':'#c8d2e1','900':'#e5eaf2' },
    blue: { '50': '#0a1a2b','100':'#0f2742','200':'#133156','300':'#173a6a','400':'#1f4b8f','500':'#3b82f6','600':'#4a97ff','700':'#6caeff','800':'#9cc6ff','900':'#cfe4ff' },
    teal: { '50':'#0c2020','100':'#0f2e2e','200':'#144242','300':'#185353','400':'#1f6a6a','500':'#2c7a7b','600':'#32989a','700':'#41bfc1','800':'#6ae4e6','900':'#b2fbfd' },
    green:{ '50':'#0f1d14','100':'#12301d','200':'#154129','300':'#125437','400':'#1a6e49','500':'#38a169','600':'#49b27a','700':'#6dcd98','800':'#a7e7c4','900':'#d7f7e8' },
    red:  { '50':'#2b0d0d','100':'#3e1515','200':'#561d1d','300':'#712424','400':'#912e2e','500':'#e53e3e','600':'#f25c5c','700':'#ff8282','800':'#ffb3b3','900':'#ffdede' },
    purple:{ '50':'#1b1330','100':'#241943','200':'#2f2158','300':'#3a2970','400':'#493491','500':'#805ad5','600':'#9274df','700':'#ae99ea','800':'#cdbef5','900':'#ebe3ff' },
    orange:{ '50':'#2a1709','100':'#3d1f0b','200':'#542910','300':'#6b320f','400':'#8b4013','500':'#dd6b20','600':'#f08433','700':'#f6a655','800':'#fbcf8d','900':'#fef0c8' }
  },
  sizes: { sm: '36px', md: '40px', lg: '48px' },
  glass: { border: '1px solid rgba(255,255,255,0.08)', blur: 'blur(14px)', surface: 'rgba(15,22,39,0.55)' },
  motion: { easeOut: 'cubic-bezier(0.2, 0.8, 0.2, 1)', easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', fast: '120ms', normal: '200ms', slow: '360ms' },
};


