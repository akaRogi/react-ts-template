import React, { Suspense } from 'react';
// @ts-ignore
import { Switch, HashRouter } from 'react-router-dom'
import FrontendAuth from './FrontendAuth'
import { routerObj } from '../views'

function router() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* @ts-ignore */}
            <FrontendAuth routerConfig={routerObj} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default router;
