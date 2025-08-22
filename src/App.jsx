import "@/App.css";
import {Route, Routes} from "react-router";

import Header from "@/component/layout/header.jsx";
import Footer from "@/component/layout/footer.jsx";
import HomePage from "@/view/homepage.jsx";

function App() {
	return (
        <Routes>
            <Route
                path="*"
                element={
                    <div className="h-screen flex flex-col">
                        <Header />
                        <main className="flex-1">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                }
            />
        </Routes>



	);
}

export default App;
