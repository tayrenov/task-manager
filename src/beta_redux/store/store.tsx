// src/beta_redux/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { AnyAction } from 'redux';
import taskReducer from '../reducers/taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;