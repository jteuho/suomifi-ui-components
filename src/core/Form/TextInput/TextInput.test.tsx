import React from 'react';
import { render } from '@testing-library/react';
import { axeTest } from '../../../utils/test/axe';

import { TextInput } from './TextInput';

const TestTextInput = (
  <TextInput labelText="Test input" data-testid="textinput" id="test-id" />
);

const TestTextInput2 = (
  <TextInput
    labelText="Test input"
    data-testid="textinput1"
    id="test-id1"
    labelMode="hidden"
    visualPlaceholder="Test TextInput"
  />
);

const TestTextInput3 = (
  <TextInput
    labelText="Test input"
    data-testid="textinput2"
    id="test-id2"
    visualPlaceholder="Test TextInput"
    statusText="This is a status text"
    status="error"
  />
);

describe('snapshots match', () => {
  test('minimal implementation', () => {
    const buttonRendered = render(TestTextInput);
    const { container } = buttonRendered;
    expect(container.firstChild).toMatchSnapshot();
  });
  test('hidden label with placeholder', () => {
    const buttonRendered = render(TestTextInput2);
    const { container } = buttonRendered;
    expect(container.firstChild).toMatchSnapshot();
  });
  test('error status with statustext', () => {
    const buttonRendered = render(TestTextInput3);
    const { container } = buttonRendered;
    expect(container.firstChild).toMatchSnapshot();
  });
});

test('should not have basic accessibility issues', axeTest(TestTextInput));
