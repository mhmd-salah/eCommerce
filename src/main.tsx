import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import AppRouter from "@routes/AppRouter";
import { store, persistor } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
