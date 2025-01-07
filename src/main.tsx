import AppRouter from "@routes/AppRouter";
import { createRoot } from "react-dom/client";
import "@styles/global.css";
import { store, persistor } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const rootHtml = document.getElementById("root");

const rootComponent = createRoot(rootHtml!);

rootComponent.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <AppRouter />
  </Provider>
);
