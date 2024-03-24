import { useReducer } from "react";

function DateCounter() {
  function reducer(state, action) {

    const { step, count } = state;

    switch (action.type) {
      case "dec":
        return { ...state, count: count - step }
      case "inc":
        return { ...state, count: count + step }
      case "defCount":
        return { ...state, count: action.payload }
      case "defStep":
        return { ...state, step: action.payload }
      case "reset":
        return action.payload

      default:
        throw new Error("Unknow Error!")
    }
  }
  const initialState = { count: 0, step: 1 }

  const [state, distpatch] = useReducer(reducer, initialState)
  const { count, step } = state

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    distpatch({ type: "dec"});
  };

  const inc = function () {
    distpatch({ type: "inc"});
  };

  const defineCount = function (e) {
    distpatch({ type: "defCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    distpatch({ type: "defStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    distpatch({ type: "reset", payload:initialState});
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
