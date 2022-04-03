import React from 'react';
import { Button } from '@teambit/design.ui.buttons.button';
import { H2 } from '@teambit/design.ui.heading';
// import { InfoCard } from '@teambit/design.ui.content.info-card';
// import { Grid } from '@teambit/base-react.layout.grid';
import { Card } from '@teambit/design.ui.cards.card';
import { ThemeToggler, ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import styles from './sample-app.module.scss';

export function SampleApp() {
  return (
    <div className={styles.sampleApp}>
      <ThemeSwitcher>
        <div className={styles.toggler}>
          <ThemeToggler />
        </div>
        {/* <Grid minColumnWidth="350px"> */}
        <div className={styles.container}>
          <Card className={styles.card}>
            <H2 className={styles.heading}>Design heading</H2>
            This is a simple design card that uses design tokens and agnostic to the specific theme used! Switch themes
            with the toggler on the top right check it out.
            <Button className={styles.button}>Sample button!</Button>
          </Card>
        </div>
        {/* </Grid> */}
      </ThemeSwitcher>
    </div>
  );
}
