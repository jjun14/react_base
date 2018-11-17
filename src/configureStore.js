import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './modules/rootReducer';

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history), // root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);
