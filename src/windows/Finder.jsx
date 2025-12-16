import WindowControls from "@components/WindowControls.jsx";
import { Search } from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { locations } from "@data/index.js";
import useLocationStore from "@store/location.js";
import clsx from "clsx";
import useWindowStore from "@store/window.js";

function Finder() {
	const {
		activeLocation,
		setActiveLocation,
	} = useLocationStore();
	
	const {
		openWindow,
	} = useWindowStore();
	const openItem = (item) => {
		if (item.fileType === "pdf") return openWindow("resume");
		if (item.kind === "folder") return setActiveLocation(item);
		if (["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");
		
		openWindow(`${item.fileType}${item.kind}`, item);
	};
	
	const renderList = (name, items) => (
		<div>
			<h3>{name}</h3>
			<ul>
				{items.map((item) => (
					<li
						key={item.id}
						className={clsx(item.id === activeLocation.id && "active")}
						onClick={() => setActiveLocation(item)}>
						<img
							src={item.icon}
							className="w-4"
							alt={item.name}/>
						<p className="text-sm font-medium truncate">
							{item.name}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
	
	const location = () => renderList("Favorites", Object.values(locations));
	
	const locationChildren = () => renderList("Work", locations.work.children);
	
	const content = () => (
		activeLocation?.children.map((item) => (
			<li
				key={item.id}
				className={item.position}
				onClick={() => openItem(item)}>
				<img
					src={item.icon}
					alt={item.name}/>
				<p>
					{item.name}
				</p>
			</li>
		))
	);
	return (
		<>
			<div id="window-header">
				<WindowControls target="finder"/>
				<Search className="icon"/>
			</div>
			<div className="bg-white flex h-full">
				<div className="sidebar">
					{location()}
					{locationChildren()}
				</div>
				<ul className="content">
					{content()}
				</ul>
			</div>
		</>
	);
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;