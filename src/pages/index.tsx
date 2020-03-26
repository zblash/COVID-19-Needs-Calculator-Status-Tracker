import * as React from 'react';
import { Route, Switch } from 'react-router';
import { CoronaStatusPage } from './corona-status';

interface Routes {
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
  disabled?: boolean;
}

const ToiletPaperCalculator = React.lazy(() =>
  import('./toilet-paper-calculator/index').then(module => ({
    default: module.ToiletPaperCalculatorPage,
  })),
);
const SoapCalculator = React.lazy(() =>
  import('./soap-calculator/index').then(module => ({
    default: module.SoapCalculatorPage,
  })),
);

const CoronaTest = React.lazy(() =>
  import('./corona-test/index').then(module => ({
    default: module.CoronaTestPage,
  })),
);

const routes: Routes[] = [
  { path: '/', component: ToiletPaperCalculator },
  { path: '/toilet-paper', component: ToiletPaperCalculator },
  { path: '/soap', component: SoapCalculator },
  { path: '/test', component: CoronaTest },
  { path: '/status/:country?', component: CoronaStatusPage },
];
// eslint-disable-next-line react/display-name
const Routes = React.memo(() => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} exact />
      ))}
    </Switch>
  </React.Suspense>
));

export default Routes;
