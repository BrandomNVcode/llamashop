import { AppRouter } from "./routers/AppRouter";
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const persistor = persistStore(store);


function App() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    );
}

export default App;
