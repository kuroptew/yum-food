
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});


function App() {
	return (
		<div className="App">
      Main Page
			<Link to="/about">About</Link>
		</div>
	);
}
