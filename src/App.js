import './App.css';
function ChildComponent() {
  const handleButtonClick = () => {
    alert("Button clicked!"); // 고정된 기능 추가
   };

  return (
    <div>
	ChildComponent<br/>
      <button onClick={handleButtonClick}>클릭하세요</button>
    </div>
  );
}

function App(){
	return <ChildComponent />
}

export default App;
