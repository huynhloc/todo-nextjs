import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import TextInput from '../TextInput';

afterEach(cleanup);

describe('TextInput Component', () => {
  test('TextInput should match snapshot', () => {
    let value = 'value';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      value = event.target.value;
    };

    const { container } = render(
      <>
        <TextInput
          label="text input"
          type="text"
          hint="hint"
          value={value}
          placeholder="placeholder"
          onChange={onChange}
        />
        <TextInput
          label="email input"
          type="email"
          hint="hint"
          value={value}
          placeholder="placeholder"
          required
          onChange={onChange}
        />
        <TextInput
          label="text input"
          type="text"
          hint="hint"
          value={value}
          placeholder="placeholder"
          isError
          errorMessage="Error message"
          onChange={onChange}
        />
        <TextInput
          label="text input"
          type="text"
          hint="hint"
          value={value}
          placeholder="placeholder"
          isError
          errorMessage="Error message"
          isActive
          onChange={onChange}
        />
        <TextInput
          label="text input"
          type="text"
          hint="hint"
          value={value}
          placeholder="placeholder"
          isActive
          onChange={onChange}
        />
        <TextInput
          label="password input"
          type="password"
          hint="hint"
          value={value}
          placeholder="placeholder"
          onChange={onChange}
        />

        <TextInput
          label="password input"
          type="password"
          hint="hint"
          value={value}
          placeholder="placeholder"
          onChange={onChange}
          showPasswordToggleIcon
        />
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('password should show/hide on click', async () => {
    let value = 'password';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      value = event.target.value;
    };

    const { asFragment } = render(
      <TextInput
        label="password input"
        type="password"
        hint="hint"
        placeholder="placeholder"
        value={value}
        onChange={onChange}
        showPasswordToggleIcon
      />
    );

    expect(asFragment()).toMatchSnapshot();

    const passwordIcon = screen.queryByTestId('password-icon');
    expect(passwordIcon).not.toBeNull();
    passwordIcon && fireEvent.click(passwordIcon);
    expect(asFragment()).toMatchSnapshot();
  });
});
