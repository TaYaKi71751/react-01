import './App.css';
import utils from './utils';
import { helper1, helper2 } from './utils';
import Button from './Button';
import Counter from './Counter';

function Greeting() {
	return (
		<h1>Hello, World!</h1>
	);
}

function App() {
//	alert(utils());
//	alert(helper1());
//	alert(helper2());
	 const name = 'John';
	 const element = <h2>Hello, {name}!</h2>;
  return (
			<div className="App">
			 Hello, React!<br/>
			 <Button/><br/>
			 <Counter/><br/>
			 {element}{element}<br/>
			 <Greeting/><Greeting/>
			</div>
  );
}

export default App;
