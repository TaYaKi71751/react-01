import './App.css';
import utils from './utils';
import { helper1, helper2 } from './utils';
import Button from './Button';
import Counter from './Counter';

function App() {
//	alert(utils());
//	alert(helper1());
//	alert(helper2());
  return (
			<div className="App">
			 Hello, React!<br/>
			 <Button/><br/>
			 <Counter/>
			</div>
  );
}

export default App;
