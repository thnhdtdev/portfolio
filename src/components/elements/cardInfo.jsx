const CardInfo = ({ icon, title, contents }) => {
	return (
		<div className="flex-1 h-full min-h-[220px] flex flex-col border-2 border-primary rounded-md p-4">
			<div className="text-lg font-semibold mb-3 flex gap-2 items-center">
				{icon}
				<span className="text-white">{title}</span>
			</div>
			<div className="flex flex-col gap-4 text-sm text-muted-foreground flex-1">
				{contents.map((item, idx) => (
					<div key={idx} className={item.className || ""}>
						{item.text}
					</div>
				))}
			</div>
		</div>
	);
};
export default CardInfo;
