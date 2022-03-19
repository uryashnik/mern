import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LinksPage from "./pages/LinksPage";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";
import DetailPages from "./pages/DetailPages";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage/>
                </Route>
                <Route path="/links" exact>
                    <CreatePage/>
                </Route>
                <Route path="/details/:id">
                    <DetailPages/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}