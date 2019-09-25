export type spacingTokensProp = keyof typeof spacingTokens;

export const spacingTokens = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
};

export const spacingTokensKeys = Object.keys(
  spacingTokens,
) as spacingTokensProp[];

export const spacing = spacingTokens;
