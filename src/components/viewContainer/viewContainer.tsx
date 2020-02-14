import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../spinner';

const MasterView = React.lazy(() => import(/* webpackChunkName: "masterView" */ './masterView'));
const DetailView = React.lazy(() => import(/* webpackChunkName: "detailView" */ './detailView/detailView'));

/** React function component */
export default function ViewContainer() {
    let localData = localStorage.getItem("lastSearch") as string;
    const detailViews = ['forest', 'sky', 'desert'];

    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path="/" render={() =>
                    <MasterView detailViews={localData} />
                } />


            </Switch>
        </Suspense>
    );
}


/*
                <Route path="/forest" component={DetailView} />
                <Route path="/sky" component={DetailView} />
                <Route path="/desert" component={DetailView} />
*/