import { css } from 'styled-components';
import { withSuomifiTheme, TokensAndTheme } from '../theme';
import { element, font, focus } from '../theme/reset';

export const baseStyles = withSuomifiTheme(
  ({ theme }: TokensAndTheme) => css`
  ${element({ theme })}
  display: flex;
  flex-direction: column;
  & > .fi-expander-group_expanders {
    flex: none;

    & .fi-expander {
      margin-top: 0;
      margin-bottom: 0;
      border-radius: 0;
      border-top: 1px solid ${theme.colors.depthLight1};
      transition: margin ${`${theme.transitions.basicTime}
        ${theme.transitions.basicTimingFunction}`};

      &:first-child {
        border-radius: ${theme.radius.basic} ${theme.radius.basic} 0 0;
        border-top: none;
      }
      &:last-child {
        border-radius: 0 0 ${theme.radius.basic} ${theme.radius.basic};
      }

      &.fi-expander--open {
        border-top: none;
        &:not(:first-of-type) {
          margin-top: ${theme.spacing.insetXl};
        }
        &:not(:last-of-type) {
          margin-bottom: ${theme.spacing.insetXl};
        }
        &:first-child, &:first-child:before {
          border-radius: ${theme.radius.basic} ${theme.radius.basic} 0 0;
        }
        &:last-child, &:last-child:before {
          border-radius: 0 0 ${theme.radius.basic} ${theme.radius.basic};
        }
        & + .fi-expander {
          border-top: none;
        }
      }
    }
  }

  & > .fi-expander-group_all-button {
    ${element({ theme })}
    ${font({ theme })('actionElementInnerTextBold')}
    ${focus({ theme })}
    flex: 1 1 auto;
    align-self: flex-end; 
    margin-left: auto;
    margin-bottom: ${theme.spacing.insetM};
    padding: ${theme.spacing.insetXs} 0;
    color: ${theme.colors.highlightBase};
    cursor: pointer;
  }
`,
);
