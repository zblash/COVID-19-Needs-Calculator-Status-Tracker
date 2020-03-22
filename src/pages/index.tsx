import * as React from "react";
import { Route, Switch } from "react-router";

interface IRoutes {
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
  disabled?: boolean;
}

const ToiletPaperCalculator = React.lazy(() =>
  import("./toilet-paper-calculator/index").then(module => ({
    default: module.ToiletPaperCalculatorPage
  }))
);
const SoapCalculator = React.lazy(() =>
  import("./soap-calculator/index").then(module => ({
    default: module.SoapCalculatorPage
  }))
);
const ShampooCalculator = React.lazy(() =>
  import("./shampoo-calculator/index").then(module => ({
    default: module.ShampooCalculatorPage
  }))
);

const CoronaTest = React.lazy(() =>
  import("./corona-test/index").then(module => ({
    default: module.CoronaTestPage
  }))
);

const routes: IRoutes[] = [
  { path: "/", component: ToiletPaperCalculator },
  { path: "/toilet-paper", component: ToiletPaperCalculator },
  { path: "/soap", component: SoapCalculator },
  { path: "/shampoo", component: ShampooCalculator },
  { path: "/test", component: CoronaTest }
];
const Routes = React.memo(() => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </React.Suspense>
  );
});

export default Routes;
