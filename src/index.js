import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {composeWithDevTools} from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import { LandingPageLayout } from './components/landingPage/layout';
import { IntroTextLayout } from './components/introTextComponent/layout';
import { WordComponentLayout } from './components/wordComponent/layout';
import { FinalPageLayout } from './components/finalPage/layout';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function Index() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact component={LandingPageLayout}></Route>
                    <Route path={'/introduction'} exact component={IntroTextLayout}></Route>
                    <Route path={'/words'} exact component={WordComponentLayout}></Route>
                    <Route path={'/final'} exact component={FinalPageLayout}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

document.getElementById('root').setAttribute('style', 'box-sizing: context-box');
ReactDOM.render(Index(), document.getElementById('root'));