import { createRoot } from "react-dom/client";
import App from "App";

import QueryProvider from "components/common/QueryProvider";

// Tailwind
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
