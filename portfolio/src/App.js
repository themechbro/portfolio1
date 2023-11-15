import Loadingscreen from "./loadingscreen";
import Progressbar from "./progressbar";
import Trailingpointer from "./trailingpointer";
import Main1 from "./main1";
import Work from "./work";
import Aboutme from "./aboutme";
import Contactme from "./contactme";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <script
        src="https://kit.fontawesome.com/91a1f38d53.js"
        crossorigin="anonymous"
      ></script>
      <Loadingscreen />
      <Progressbar />
      <Trailingpointer />
      <Main1 />
      <Work />
      <Aboutme />
      <Contactme />
    </div>
  );
}
