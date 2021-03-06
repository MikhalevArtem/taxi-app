import React from "react";
import ReactDOM from "react-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { RootRouter } from "./Components";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { theme } from "./theme";
import { Provider as ReduxProvider } from "react-redux";
import createAppStore from "./redux/create";

const store = createAppStore();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <RootRouter />
        </MuiThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
