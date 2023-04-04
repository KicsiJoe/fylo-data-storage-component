import "./css/general.css";
import "./css/mobil.css";
import "./css/desktop.css";
import ProgressBar from "./modules/ProgressBar";
import ImgBox from "./modules/ImgBox";
import { doc, folder, upload, logo } from "./images/icons";
import Keret from "./modules/Keret";

function App() {
  return (
    <div className="flex-container-row main">
      <div className="flex-container-row left">
        <div className="flex-container-column bar">
          <div className="logo">{logo}</div>
          <div className="flex-container-row">
            <ImgBox svg={doc} />
            <ImgBox svg={folder} />
            <ImgBox svg={upload} />
          </div>
        </div>
        <div className="curve"></div>
      </div>
      <Keret className="right">
        <p>You've used <span>815 GB</span> of your storage</p>
        <ProgressBar className="progress-bar" percent={81} />
        <div className="flex-container-row space-between gb-title">
          <div>0 GB</div>
          <div>1000 GB</div>
        </div>
      </Keret>
    </div>
  );
}

export default App;
