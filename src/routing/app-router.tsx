import React, { Suspense } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";

import { PageLoader } from "src/components/page-loader/page-loader";
import { AppHistory } from "./app-history";
import { AppRoutesPaths } from "./app-routes-paths";

const MainDesignRoute = React.lazy(() => import("./routes/main-design-route"));
const TemplateRoute = React.lazy(() => import("./routes/template-route"));

export const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Router history={AppHistory}>
                <Suspense fallback={<PageLoader />}>
                    <Switch>
                        <Redirect exact path={AppRoutesPaths.index} to={AppRoutesPaths.mainApp.index} />

                        <Route path={AppRoutesPaths.mainApp.index} component={MainDesignRoute} />
                        <Route path={AppRoutesPaths.mainApp.templateRoute} component={TemplateRoute} />
                    </Switch>
                </Suspense>
            </Router>
        </Suspense>
    );
};
