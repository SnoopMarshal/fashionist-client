import App from "./App";
import Provider from "./Provider";
import { AppContextProvider } from './Context'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <AppContextProvider>
    <Provider>
      <App />
    </Provider>
  </AppContextProvider>
);
