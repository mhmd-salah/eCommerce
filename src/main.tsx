import AppRouter from "@routes/AppRouter";
import { createRoot } from "react-dom/client";
import "@styles/global.css";


const rootHtml = document.getElementById("root");

const rootComponent = createRoot(rootHtml!);

rootComponent.render(<AppRouter />);
