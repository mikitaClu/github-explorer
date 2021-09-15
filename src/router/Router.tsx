import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import LoadingContainer from '../layouts/LoadingContainer';

type IRoute = {
  [key: string]: {
    id: string;
    component: React.LazyExoticComponent<() => React.ReactElement>;
    routeParams?: Omit<RouteProps, 'path'>;
  };
};

const ROUTE_CONFIG: IRoute = {
  '/': {
    id: 'dashboard',
    component: React.lazy(() => import('../containers/Dashboard')),
    routeParams: { exact: true },
  },
  // TODO:// Add further routes, which are not listed in task, profile and etc.
};

export default function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        {Object.keys(ROUTE_CONFIG).map(key => {
          const config = ROUTE_CONFIG[key];
          const { component: Component, routeParams } = config;
          const exact = { ...(routeParams?.exact ? { exact: routeParams?.exact } : {}) };
          return (
            <Route key={config.id} {...exact} path={key}>
              <Suspense fallback={LoadingContainer}>
                <Component />
              </Suspense>
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
