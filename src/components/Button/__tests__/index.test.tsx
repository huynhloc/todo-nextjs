import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup);

describe('Button Component', () => {
  test('should match button/link snapshot', () => {
    const { container } = render(
      <>
        <Button href="/about">Button Component</Button>
        <Button href="https://google.com">Button Component</Button>
        <Button>Button Component</Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match button type', () => {
    const { container } = render(
      <>
        <Button href="/about" buttonType="fixed">
          Button Component
        </Button>
        <Button href="https://google.com" buttonType="fixed">
          Button Component
        </Button>
        <Button buttonType="fixed">Button Component</Button>
        <Button href="/about" buttonType="scalable">
          Button Component
        </Button>
        <Button href="https://google.com" buttonType="scalable">
          Button Component
        </Button>
        <Button buttonType="scalable">Button Component</Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match button style', () => {
    const { container } = render(
      <>
        <Button theme="textOnly">Button Component</Button>
        <Button theme="border">Button Component</Button>
        <Button theme="containedColor">Button Component</Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match button contained color style', () => {
    const { container } = render(
      <>
        <Button theme="containedColor" color="purple">
          Button Component
        </Button>
        <Button theme="containedColor" color="black">
          Button Component
        </Button>
        <Button theme="containedColor" color="white">
          Button Component
        </Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match button disable style', () => {
    const { container } = render(
      <>
        <Button theme="textOnly" disabled>
          Button Component
        </Button>
        <Button theme="border" disabled>
          Button Component
        </Button>
        <Button theme="containedColor" color="purple" disabled>
          Button Component
        </Button>
        <Button theme="containedColor" color="black" disabled>
          Button Component
        </Button>
        <Button theme="containedColor" color="white" disabled>
          Button Component
        </Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match button busy style', () => {
    const { container } = render(
      <>
        <Button href="/about" theme="textOnly" isBusy>
          Button Component
        </Button>
        <Button theme="border" isBusy>
          Button Component
        </Button>
        <Button theme="containedColor" color="purple" isBusy>
          Button Component
        </Button>
        <Button theme="containedColor" color="black" isBusy>
          Button Component
        </Button>
        <Button theme="containedColor" color="white" isBusy>
          Button Component
        </Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
