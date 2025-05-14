import React, { useReducer } from 'react';


// 1. 리듀서 함수 정의
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};
// 2. 초기 상태
const initialState = { count: 0 };
const Counter = () => {
  // 3. useReducer를 사용하여 상태와 디스패치 함수를 정의
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      {/* 4. 변경된 데이터를 그때그때 보여줄 state변수 기술*/}
      <p>Count: {state.count}</p>
      {/* 5. 디스패치 함수를 사용하여 액션을 보냄 */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};


export default Counter;
