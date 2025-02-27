import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-2 mb-10 items-start">
      <label htmlFor="name">Controlled Input</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default ControlledInput;
