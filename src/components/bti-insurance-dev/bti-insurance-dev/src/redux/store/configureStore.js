import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/rootReducer";

// export const store = createStore(rootReducer, applyMiddleware(thunk));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
// export default function initializeStore(initialState = {}) {
//   return createStore(initialState, applyMiddleware(thunk));
// }
