import './App.css';
import utils from './utils';
import { helper1, helper2 } from './utils';

function App() {
	alert(utils());
	alert(helper1());
	alert(helper2());
  return (
			<div className="App">
			 Hello, React!
			</div>
  );
}

export default App;
