import React from 'react';
import { IconText, IconTextProps } from '@teambit/design.ui.input.icon-text';

export type SearchInputProps = IconTextProps;

export function SearchInput({ icon = 'discovery', placeholder = 'Search', onIconClick, ...rest }: SearchInputProps) {
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onIconClick && onIconClick();
    }
  };

  return (
    <IconText placeholder={placeholder} filled icon={icon} onIconClick={onIconClick} onKeyUp={onKeyUp} {...rest} />
  );
}
