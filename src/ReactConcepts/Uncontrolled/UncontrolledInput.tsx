import React, { useRef } from 'react';

function UncontrolledInput() {
  console.log('UncontrolledInput rerendered');

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    alert(inputRef.current!.value);
  }

  return (
    <div className="flex flex-col gap-2 mb-10 items-start">
      <label htmlFor="name">Uncontrolled Input</label>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
