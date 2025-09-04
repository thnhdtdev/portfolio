import { useEffect } from "react";
import Lottie from "lottie-react";

import helloAnimation from "@/assets/splashScreen/Hello.json";

const SplashScreen = ({ onDone }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (onDone) onDone();
		}, 3100);
		return () => clearTimeout(timer);
	}, [onDone]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-[#020817] z-50">
			<div className="w-80 h-80 mx-auto mb-8">
				<Lottie animationData={helloAnimation} loop autoplay />
			</div>
		</div>
	);
};
export default SplashScreen;
