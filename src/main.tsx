import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import AppRouter from "@routes/AppRouter";

const root = createRoot(document.getElementById("root")!);

root.render(<AppRouter />);
