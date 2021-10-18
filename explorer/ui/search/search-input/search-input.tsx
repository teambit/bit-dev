import React from 'react';
import { IconText, IconTextProps } from '@teambit/design.ui.input.icon-text';

export type SearchInputProps = IconTextProps;

export function SearchInput({ placeholder = 'Search', ...rest }: SearchInputProps) {
  return <IconText placeholder={placeholder} filled icon="discovery" {...rest} />;
}
