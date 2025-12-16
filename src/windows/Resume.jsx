import WindowWrapper from "@hoc/WindowWrapper.jsx";
import WindowControls from "@components/WindowControls.jsx";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Download } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc =
	`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
	return (
		<>
			<div id="window-header">
				<WindowControls target="resume" />
				<h2>Resume.pdf</h2>
				<a
					href="files/resume.pdf"
					download
					className="cursor-pointer"
					title="Download Resume"
				>
					<Download className="icon" />
				</a>
			</div>
			
			<Document file="files/resume.pdf">
				<Page
					pageNumber={1}
					renderTextLayer
					renderAnnotationLayer
				/>
			</Document>
		</>
	);
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;