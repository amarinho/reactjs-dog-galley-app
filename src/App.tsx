import React from "react";
import {AppContextProvider} from "./modules/main/containers/AppContextProvider/AppContextProvider";
import {Header} from "./modules/main/ui/atoms/Header/Header";
import {SiteRoutes} from "./modules/main/containers/SiteRoutes/SiteRoutes";

export const App = (): JSX.Element => (
    <AppContextProvider>
        <SiteRoutes>
            <Header htmlId='application-header'/>
        </SiteRoutes>
    </AppContextProvider>
);
