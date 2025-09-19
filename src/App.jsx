import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/view/homepage.jsx";
import Header from "@/components/layout/header.jsx";
import Footer from "@/components/layout/footer.jsx";
import SplashScreen from "@/components/layout/SplashScreen.jsx";

function App() {
	const [splashDone, setSplashDone] = useState(false);

	return splashDone ? (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex-1">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	) : (
		<SplashScreen onDone={() => setSplashDone(true)} />
	);
}

export default App;
