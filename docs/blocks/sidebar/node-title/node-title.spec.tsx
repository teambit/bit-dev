import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicNodeTitle,
  NodeTitleWithIcon,
  NodeTitleWithConfigurationIcon,
  NodeTitleWithOverviewActive,
} from './node-title.examples';

describe('should render basic folder', () => {
  it('should have folder id', () => {
    const { getByText } = render(<BasicNodeTitle />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<BasicNodeTitle />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render folder with left icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<NodeTitleWithIcon />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<NodeTitleWithIcon />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<NodeTitleWithIcon />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render folder with left icon and configuration icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<NodeTitleWithConfigurationIcon />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<NodeTitleWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<NodeTitleWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have configuration icon', () => {
    const { container } = render(<NodeTitleWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-settings')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render an active folder with left icon and configuration icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<NodeTitleWithOverviewActive />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<NodeTitleWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<NodeTitleWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have configuration icon', () => {
    const { container } = render(<NodeTitleWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-settings')[0];
    expect(iconElement).toBeTruthy();
  });
  it('folder should be inside a tag', () => {
    const { container } = render(<NodeTitleWithOverviewActive />);
    const firstLinkElement = container.getElementsByTagName('a')[0];
    expect(firstLinkElement.classList.contains('folderLink')).toBeTruthy();
  });
  it('folder link should be active', () => {
    const { container } = render(<NodeTitleWithOverviewActive />);
    const folderElement = container.getElementsByClassName('folder')[0];
    expect(folderElement).toHaveClass('active');
  });
});
