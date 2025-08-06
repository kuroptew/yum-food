import { StrictMode } from "react";

import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { router } from "./router";

createRoot(document.getElementById("app")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
