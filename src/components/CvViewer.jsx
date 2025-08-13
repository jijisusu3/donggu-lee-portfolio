import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function CvViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[750px] w-full border border-gray-300">
          <Viewer
            fileUrl="https://jijisusu3.github.io/donggu-lee-portfolio/CV_Donggu_Lee.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default CvViewer;
