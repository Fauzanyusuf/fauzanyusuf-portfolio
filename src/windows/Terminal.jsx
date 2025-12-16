import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { techStacks } from "@data/index.js";
import { Check, Flag } from "lucide-react";
import WindowControls from "@components/WindowControls.jsx";

function Terminal() {
	const techStack = () => (
		
		techStacks.map(({category, items}) => (
			<li key={category} className="flex items-center">
				<Check className="check" size={20}/>
				<h3>{category}</h3>
				<ul>
					{items.map((item, i) => (
						<li key={i}>
							{item}
							{i < items.length - 1 ? "," : ""}
						</li>
					))}
				</ul>
			</li>
		))
	);
	
	return (
		<>
			<div id="window-header">
				<WindowControls target="terminal"/>
				<h2>Tech Stack</h2>
			</div>
			<div className="techstack">
				<p>
					<span className="font-bold">@fauzan % </span>
					show tech stack
				</p>
				<div className="label">
					<p className="w-32">Category</p>
					<p>Technologies</p>
				</div>
				<ul className="content">
					{techStack()}
				</ul>
				<div className="footnote">
					<p>
						<Check size={20}/>{techStacks.length} of {techStacks.length} stacks
						loaded successfully (100%)
					</p>
					<p className="text-black">
						<Flag size={15} fill="black"/>
						Render time: 6ms
					</p>
				</div>
			</div>
		</>
	);
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;