import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, delay = 0, className }) => {
	const { ref, inView } = useInView();

	return (
		<div className={className}>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut", delay }}
			>
				{children}
			</motion.div>
		</div>
	);
};
export default FadeInSection;
