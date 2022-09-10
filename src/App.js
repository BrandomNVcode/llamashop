import { AppRouter } from "./routers/AppRouter";
import { store } from './redux/store/store';
import { Provider } from 'react-redux';


function App() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
}

export default App;
