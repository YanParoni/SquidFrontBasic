import Header from "./components/Header";
import List from "./components/List";
import "./components/styles-overlay.css";
 import Waves from './assets/waves.svg'
function App() {
  return (
    <div className="">
      <div className="spacer ">
        <Header />
        <List />
        <object className='waves' type="image/svg+xml" data={Waves}>svg-animation</object>
      </div>
    </div>
  );
}

export default App;
