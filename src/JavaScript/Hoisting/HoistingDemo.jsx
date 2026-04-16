const HoistingDemo = () => {
  // 1. `var` is hoisted (declaration only, not the assignment)
  console.log(message); // undefined — NOT a ReferenceError
  var message = "hello";

  // 2. `let` / `const` are hoisted too, but in the "Temporal Dead Zone"
  // console.log(count); // ❌ ReferenceError: Cannot access 'count' before initialization
  let count = 5;

  // 3. Function declarations are fully hoisted (you can call before declaring)
  const greeting = sayHi(); // ✅ works — returns "hi"

  function sayHi() {
    return "hi";
  }

  // 4. Function expressions / arrow functions are NOT fully hoisted
  // Only the `var`/`const` binding is hoisted, not the function body

//   sayByeConst(); // ❌ ReferenceError (if const, due to TDZ)
  const sayByeConst = () => "bye";


  sayByeVar(); // ❌ TypeError: sayByeConst is not a function (if var)
  var sayByeVar = () => "bye";

  return (
    <div>
      <p>{message}</p>     {/* "hello" — by render time, assignment has run */}
      <p>{greeting}</p>    {/* "hi" */}
      <p>{count}</p>       {/* 5 */}
    </div>
  );
};

export default HoistingDemo;