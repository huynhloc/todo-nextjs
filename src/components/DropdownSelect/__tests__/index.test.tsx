import React, { useState } from 'react';
import { render, cleanup } from '@testing-library/react';
import selectEvent from 'react-select-event';
import DropdownSelect from '../DropdownSelect';
afterEach(cleanup);

const OPTIONS: DropdownOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', isDisabled: true },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' },
  { value: 'option8', label: 'Option 8' },
  { value: 'option9', label: 'Option 9' },
  { value: 'option10', label: 'Option very long one 10' },
];

const ROLE = 'form';

describe('DropdownSelect component', () => {
  describe('Single selection', () => {
    let LABEL = '';
    let SelectForm = () => <div />;
    beforeEach(() => {
      LABEL = 'single';
      SelectForm = () => {
        const [value, setValue] = useState<DropdownSelectValue>(undefined);
        const onChange = (value: DropdownSelectValue) => {
          setValue(value);
        };

        return (
          <form role={ROLE}>
            <DropdownSelect
              name={LABEL}
              label={LABEL}
              options={OPTIONS}
              value={value}
              onChange={onChange}
              inputId={LABEL}
            />
          </form>
        );
      };
    });
    test('match snapshot close and open', async () => {
      const { asFragment, getByLabelText } = render(<SelectForm />);
      expect(asFragment()).toMatchSnapshot();
      const label = getByLabelText(LABEL);
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });

    test('can select single value', async () => {
      const { asFragment, getByRole, getByLabelText } = render(<SelectForm />);
      const form = getByRole(ROLE);
      expect(form).toHaveFormValues({ [LABEL]: '' });
      const label = getByLabelText(LABEL);
      await selectEvent.select(label, 'Option 1');
      expect(form).toHaveFormValues({ [LABEL]: 'option1' });
      await selectEvent.select(label, ['Option 2', 'Option 4']);
      expect(form).toHaveFormValues({ [LABEL]: 'option4' });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Error select', () => {
    test('math snapshot', async () => {
      const LABEL = 'error';
      const ErrorMessage = 'Error message';
      const SelectForm = () => {
        const [value, setValue] = useState<DropdownSelectValue>(undefined);
        const onChange = (value: DropdownSelectValue) => {
          setValue(value);
        };

        return (
          <form role={ROLE}>
            <DropdownSelect
              name={LABEL}
              label={LABEL}
              options={OPTIONS}
              value={value}
              onChange={onChange}
              inputId={LABEL}
              isError
              errorMessage={ErrorMessage}
            />
          </form>
        );
      };

      const { asFragment, getByLabelText, getByText } = render(<SelectForm />);
      const error = getByText(ErrorMessage);
      expect(error).not.toBeNull();
      expect(asFragment()).toMatchSnapshot();
      const label = getByLabelText(LABEL);
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Multi select without wrap', () => {
    let LABEL = '';
    let SelectForm = () => <div />;
    beforeEach(() => {
      LABEL = 'multi-nowrap';
      SelectForm = () => {
        const [value, setValue] = useState<DropdownSelectValue>(undefined);
        const onChange = (value: DropdownSelectValue) => {
          setValue(value);
        };

        return (
          <form role={ROLE}>
            <DropdownSelect
              name={LABEL}
              label={LABEL}
              options={OPTIONS}
              value={value}
              onChange={onChange}
              inputId={LABEL}
              isMulti
            />
          </form>
        );
      };
    });

    test('match open close snapshot', async () => {
      const { asFragment, getByLabelText } = render(<SelectForm />);
      expect(asFragment()).toMatchSnapshot();
      const label = getByLabelText(LABEL);
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });

    test('can select multiple value', async () => {
      const { asFragment, getByRole, getByLabelText } = render(<SelectForm />);
      const form = getByRole(ROLE);
      expect(form).toHaveFormValues({ [LABEL]: '' });
      const label = getByLabelText(LABEL);
      await selectEvent.select(label, ['Option 2', 'Option 4', 'Option 5']);
      expect(form).toHaveFormValues({
        [LABEL]: ['option2', 'option4', 'option5'],
      });
      expect(asFragment()).toMatchSnapshot();
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Multi select with wrap', () => {
    let LABEL = '';
    let SelectForm = () => <div />;
    beforeEach(() => {
      LABEL = 'multi-wrap';
      SelectForm = () => {
        const [value, setValue] = useState<DropdownSelectValue>(undefined);
        const onChange = (value: DropdownSelectValue) => {
          setValue(value);
        };

        return (
          <form role={ROLE}>
            <DropdownSelect
              name={LABEL}
              label={LABEL}
              options={OPTIONS}
              value={value}
              onChange={onChange}
              inputId={LABEL}
              isMulti
              multiContainerTheme="wrap"
            />
          </form>
        );
      };
    });

    test('match open close snapshot', async () => {
      const { asFragment, getByLabelText } = render(<SelectForm />);
      expect(asFragment()).toMatchSnapshot();
      const label = getByLabelText(LABEL);
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });

    test('can select multiple value', async () => {
      const { asFragment, getByRole, getByLabelText } = render(<SelectForm />);
      const form = getByRole(ROLE);
      expect(form).toHaveFormValues({ [LABEL]: '' });
      const label = getByLabelText(LABEL);
      await selectEvent.select(label, ['Option 2', 'Option 4', 'Option 8']);
      expect(form).toHaveFormValues({
        [LABEL]: ['option2', 'option4', 'option8'],
      });
      expect(asFragment()).toMatchSnapshot();
      await selectEvent.openMenu(label);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
