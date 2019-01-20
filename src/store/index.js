import { createStore,applyMiddleware,compose} from "redux";
import reducer from './reducer';
import rootSaga from './reduxSaga';
import createSagaMiddleware from 'redux-saga';
const mainSaga = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    // thunk中间件
    // applyMiddleware(thunk),
    // other store enhancers if any
    applyMiddleware(mainSaga),
);

const store = createStore(reducer, enhancer);
mainSaga.run(rootSaga);

export default  store;