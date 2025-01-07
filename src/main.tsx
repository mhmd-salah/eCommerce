import AppRouter from "@routes/AppRouter";
import { createRoot } from "react-dom/client";
import "@styles/global.css";
import {store} from "@store/index"
import { Provider } from "react-redux";
const rootHtml = document.getElementById("root");

const rootComponent = createRoot(rootHtml!);

rootComponent.render(
  <Provider store={store}>
    <AppRouter />
  </Provider> 
);
