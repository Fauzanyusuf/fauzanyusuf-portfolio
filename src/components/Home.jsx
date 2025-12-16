import { locations } from "@data/index.js";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "@store/window.js";
import useLocationStore from "@store/location.js";

const projects = locations.work?.children ?? [];

function Home() {
	const {openWindow} = useWindowStore();
	const {setActiveLocation} = useLocationStore();
	
	const handleOpenProjectFinder = (project) => {
		setActiveLocation(project);
		openWindow("finder");
	};
	
	const project = () => (
		projects.map((project) => (
			<li key={project.id}
			    className={clsx("group folder", project.windowPosition)}
			    onClick={() => handleOpenProjectFinder(project)}>
				<img loading="lazy" src="/images/folder.png" alt={project.name} />
				<p>{project.name}</p>
			</li>
		))
	);
	
	useGSAP(() => {
		Draggable.create(".folder");
	}, []);
	
	return (
		<section id="home">
			<ul>
				{project()}
			</ul>
		</section>
	);
}

export default Home;