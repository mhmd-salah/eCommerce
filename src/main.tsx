import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainLayout } from "@layout";

const root = createRoot(document.getElementById("root")!);

root.render(<MainLayout />);
