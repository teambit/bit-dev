import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '@teambit/advocacy.ui.header';
import { Homepage } from '@teambit/advocacy.ui.pages.homepage';

export function BitDevApp() {
  return (
    <BrowserRouter>

       {/* header component */}
       <Header />

        <Switch>
          <Route path="/">
             <Homepage />
          </Route>

          <Route path="/about">
             {/* about page component */}
          </Route>

        </Switch>

        {/* footer component */}

    </BrowserRouter>
  );
}
