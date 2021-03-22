import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export interface SiteRoutesProps {
    /** Children element */
    children?: React.ReactNode;
}

const About =
    lazy(() =>
        import(`../../scenes/About/About`)
        .then(({ About }) => ({ default: About })),
    );

const Languages =
    lazy(() =>
        import(`../../scenes/Languages/Languages`)
            .then(({ Languages }) => ({ default: Languages })),
    );

const Home =
    lazy(() =>
        import(`../../scenes/Home/Home`)
            .then(({ Home }) => ({ default: Home })),
    );

const Favorites =
    lazy(() =>
        import(`../../scenes/Favorites/Favorites`)
            .then(({ Favorites }) => ({ default: Favorites })),
    );

const Version =
    lazy(() =>
        import(`../../scenes/Version/Version`)
            .then(({ Version }) => ({ default: Version })),
    );

export const SiteRoutes = ({children}: SiteRoutesProps): JSX.Element => (
    <BrowserRouter>
        {children}
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/About" component={About} exact/>
            <Route path="/Languages" component={Languages} exact/>
            <Route path="/Favorites" component={Favorites} exact/>
            <Route path="/Version" component={Version} exact/>
        </Switch>
        </Suspense>
    </BrowserRouter>
);
