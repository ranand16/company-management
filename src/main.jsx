import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MantineProvider>
            <Suspense fallback={<div>App is loading...</div>}>
                <App />
            </Suspense>
        </MantineProvider>
    </StrictMode>
);
