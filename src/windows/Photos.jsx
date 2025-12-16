import useWindowStore from "@store/window.js";
import WindowControls from "@components/WindowControls.jsx";
import { Mail, Search } from "lucide-react";
import { gallery, photosLinks } from "@data/index.js";
import WindowWrapper from "@hoc/WindowWrapper.jsx";

function Photos() {
	const {openWindow} = useWindowStore();
	
	const photoLink = () => (
		photosLinks.map(({id, icon, title}) => (
			<li key={id}>
				<img loading="lazy" src={icon} alt={title} />
				<p>{title}</p>
			</li>
		))
	);
	
	const gal = () => (
		gallery.map(({id, img}) => (
			<li key={id}
			    onClick={() =>
				    openWindow("imgfile", {
					    id,
					    name: "Gallery Image",
					    icon: "/images/image.png",
					    kind: "file",
					    fileType: "img",
					    imageUrl: img,
				    })
			    }>
				<img loading="lazy" src={img} alt={`Gallery image ${id}`} />
			</li>
		))
	);
	
	return (
		<>
			<div id="window-header">
				<WindowControls target="photos" />
				<div className="w-full flex justify-end items-center gap-3 text-gray-500">
					<Mail className="icon" />
					<Search className="icon" />
				</div>
			</div>
			<div className="flex w-full">
				<div className="sidebar">
					<h2>Photos</h2>
					
					<ul>
						{photoLink()}
					</ul>
				</div>
				<div className="gallery">
					<ul>
						{gal()}
					</ul>
				</div>
			</div>
		</>
	);
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;