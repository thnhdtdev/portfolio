import { Routes, Route } from "react-router-dom";

import Header from "@/components/layout/header.jsx";
import Footer from "@/components/layout/footer.jsx";
import HomePage from "@/view/homepage.jsx";

function App() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex-1">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
