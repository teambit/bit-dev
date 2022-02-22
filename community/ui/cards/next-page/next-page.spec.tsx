import React from 'react';
import { render } from '@testing-library/react';
import {
  NextPageWithText,
  NextPageWithTitle,
  NextPageWithTitleAndText,
  NextPageWithTitleAndCustomButtonText,
} from './next-page.composition';

describe('Next page with title and text', () => {
  it('both title and text should render with the correct text', () => {
    const { getByText } = render(<NextPageWithTitleAndText />);
    const rendered = getByText('Installing Bit');
    const rendered2 = getByText('Install Bit package in your project');
    expect(rendered).toBeTruthy();
    expect(rendered2).toBeTruthy();
  });

  it('button should render with the default text when not supplied', () => {
    const { getByText } = render(<NextPageWithTitleAndText />);
    const rendered = getByText('Continue');
    expect(rendered).toBeTruthy();
  });
});

describe('Next page with title', () => {
  it('title should render with the correct text', () => {
    const { getByText } = render(<NextPageWithTitle />);
    const rendered = getByText('Installing Bit');
    expect(rendered).toBeTruthy();
  });

  it('button should render with the default text when not supplied', () => {
    const { getByText } = render(<NextPageWithText />);
    const rendered = getByText('Continue');
    expect(rendered).toBeTruthy();
  });
});

describe('Next page with text', () => {
  it('text should render with the correct text', () => {
    const { getByText } = render(<NextPageWithText />);
    const rendered = getByText('Install Bit package in your project');
    expect(rendered).toBeTruthy();
  });

  it('button should render with the default text when not supplied', () => {
    const { getByText } = render(<NextPageWithText />);
    const rendered = getByText('Continue');
    expect(rendered).toBeTruthy();
  });
});

describe('Next page with custom button text', () => {
  it('title should render with the correct text', () => {
    const { getByText } = render(<NextPageWithTitleAndCustomButtonText />);
    const rendered = getByText('Installing Bit');
    expect(rendered).toBeTruthy();
  });

  it('button should render with the correct text when passed', () => {
    const { getByText } = render(<NextPageWithTitleAndCustomButtonText />);
    const rendered = getByText('create new');
    expect(rendered).toBeTruthy();
  });
});
