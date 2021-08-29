import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '@teambit/advocacy.ui.header';

export function BitDevApp() {
  return (
    <BrowserRouter>

       {/* header component */}
       <Header />

        <Switch>
          <Route path="/">
             {/* home page component */}
          </Route>

          <Route path="/about">
             {/* about page component */}
          </Route>

        </Switch>

        {/* footer component */}

    </BrowserRouter>
  );
}
