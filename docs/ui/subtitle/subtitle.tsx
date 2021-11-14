import React from 'react';
import classNames from 'classnames';
import { Subtitle as DesignSubtitle, SubtitleProps as DesignSubtitleProps } from '@teambit/design.ui.content.subtitle';
import styles from './subtitle.module.scss';

export type SubtitleProps = DesignSubtitleProps;

export function Subtitle(props: SubtitleProps) {
  return <DesignSubtitle className={classNames(props.className, styles.docsSubtitle)} {...props} />;
}
