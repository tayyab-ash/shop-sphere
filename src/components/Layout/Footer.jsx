import React, { useEffect, useReducer , useRef, useMemo, useState} from 'react'



const computeFactorial = (n) => {
  if (n <= 1) return 1;
  return n * computeFactorial(n - 1);
  
};

 
const ExpensiveComputation = ({ num, count }) => {
  console.log('Component rendered');

  // Factorial will be computed only 1 time
  // const factorial = useMemo(() => {
  //   console.log('Computing factorial...');
  //   return computeFactorial(num)
  // }, [num]);

  // Factorial will be computed every time the component renders
  const factorial = () => {
    console.log('Computing factorial...');
    return computeFactorial(num);
  }

  // use f"actorial()" instead of "factorial" in the line below when you want to compute factorial every time the component renders, i.e without useMemo.
  return <div>Factorial of {num} is {factorial()}</div>;
};


function Footer() {
  const [count, setCount] = useState(1);  
  

  return (
    <div>
      <ExpensiveComputation num={5} count={count} />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <span>{count}</span>
    </div>
  )
}

export default Footer