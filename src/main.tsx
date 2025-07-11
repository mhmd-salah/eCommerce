import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
