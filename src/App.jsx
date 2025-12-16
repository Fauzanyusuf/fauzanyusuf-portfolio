import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Dock from "@components/Dock";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import Terminal from "@windows/Terminal.jsx";
import Safari from "@windows/Safari.jsx";
import Resume from "@windows/Resume.jsx";
import Finder from "@windows/Finder.jsx";
import Text from "@windows/Text.jsx";
import Image from "@windows/Image.jsx";
import Contact from "@windows/Contact.jsx";
import Home from "@components/Home.jsx";
import Photos from "@windows/Photos.jsx";

gsap.registerPlugin(Draggable);

function App() {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />
			
			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />
			<Photos />
			
			<Home />
		</main>
	);
}

export default App;
