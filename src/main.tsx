import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const container = document.getElementById("root");
const root = createRoot(container!);

enableMocking().then(() => {
  root.render(<App />);
});
