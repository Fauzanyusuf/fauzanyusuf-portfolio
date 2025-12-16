import { navIcons, navLinks } from "@data";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import useWindowStore from "@store/window.js";
import { Tooltip } from "react-tooltip";

function Navbar() {
	const {openWindow} = useWindowStore();
	
	const [currentTime, setCurrentTime] = useState(
		dayjs().format("ddd MMM D h:mm:ss A"),
	);
	
	const navlink = () => {
		return navLinks.map(({id, name, type}) =>
			(
				<li key={id}
				    className="cursor-pointer"
				    onClick={() => openWindow(type)}>{name}</li>
			),
		);
	};
	
	const navIcon = () => {
		return navIcons.map(({id, img}) => (
			<li key={id}>
				<img loading="lazy"
				     src={img}
				     className="icon-hover"
				     alt={`icon-${img}`} />
			</li>
		));
	};
	
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(dayjs().format("ddd MMM D h:mm:ss A"));
		}, 1000);
		
		return () => clearInterval(timer);
	}, []);
	
	return (
		<nav>
			<div>
				<img loading="lazy" src="/images/logo.svg" alt="logo" />
				<p className="font-bold">Fauzan Yusuf's Portfolio</p>
				<ul>{navlink()}</ul>
			</div>
			<div>
				<ul>{navIcon()}</ul>
				<time>{currentTime}</time>
			</div>
			<Tooltip id="navbar-tooltip" place="bottom" className="tooltip" />
		</nav>
	);
}

export default Navbar;
