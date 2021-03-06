import { css } from 'styled-components';
import { withSuomifiTheme, TokensAndTheme } from '../theme';
import { element, inputButton, font } from '../theme/reset';

export const baseStyles = withSuomifiTheme(
  ({ theme }: TokensAndTheme) => css`
    & .fi-dropdown_label-p {
      margin-bottom: ${theme.spacing.insetM};
      ${font({ theme })('actionElementInnerTextBold')};
      color: ${theme.colors.blackBase};
    }

    & [data-reach-listbox-button].fi-dropdown_button {
      ${inputButton({ theme })}
      position: relative;
      display: inline-block;
      word-break: break-word;
      overflow-wrap: break-word;
      min-height: 22px;
      padding: 7px 38px 7px 7px;
      text-align: left;
      line-height: 1.5;
      background-color: ${theme.colors.whiteBase};
      box-shadow: ${theme.shadows.actionElementBoxShadow};
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 16px;
        margin-top: -3px;
        border-style: solid;
        border-color: ${theme.colors.depthDark1} transparent transparent
          transparent;
        border-width: 6px 4px 0 4px;
      }
      &[aria-expanded='true']:before {
        border-color: transparent transparent ${theme.colors.depthDark1}
          transparent;
        border-width: 0 4px 6px 4px;
      }
    }
  `,
);

export const listboxPopoverStyles = withSuomifiTheme(
  ({ theme }: TokensAndTheme) => css`
  &[data-reach-listbox-popover].fi-dropdown_popover {
    ${element({ theme })}
    ${theme.typography.actionElementInnerText}
    margin-top: -1px;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    border: 0;
    background-color: ${theme.colors.whiteBase};
    border-color: ${theme.colors.depthLight1};
    border-style: solid;
    border-width: 0 1px 1px 1px;
    border-radius: 0px 0px ${theme.radius.basic} ${theme.radius.basic};
    overflow: hidden;
    &:focus-within {
      outline: 0;
      box-shadow: none;
    }
  }
  
  & [data-reach-listbox-list] {
    border: 0;
    padding: 0;
    margin: 0;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  & [data-reach-listbox-option].fi-dropdown_item {
    ${element({ theme })}
    ${theme.typography.actionElementInnerText}
    line-height: 1.5;
    padding: ${theme.spacing.insetM};
    border: 0;
    &[aria-selected='true'] {
      ${theme.typography.actionElementInnerText}
      color: ${theme.colors.blackBase};
      background-image: none;
      background-color: ${theme.colors.highlightLight3};
      border: 0;
    }
    &:focus {
      outline: 0;
    }
  }
`,
);
