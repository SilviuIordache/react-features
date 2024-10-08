import React, { useCallback, useState } from 'react';
import { CountDisplayer } from './CountDisplayer';
import { MethodCaller } from './MethodCaller';
import { AnimalDisplayer } from './AnimalDisplayer';

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [animal, setAnimal] = useState('dog');

  const expensiveFunction = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log('expensiveFunction called');
  }, []);

  return (
    <div className="border-2 border-blue-500 p-4">
      <h1 className="text-2xl font-bold">UseCallback Parent Component</h1>

      <div className="mt-2 flex justify-center ">
        <div className="text-left w-96">
          <div className='text-yellow-500'>const [count, setCount] = useState(0)</div>
          <div className='text-blue-500'>const [animal, setAnimal] = useState('dog')</div>
          <div className='text-green-500'>{`const expensiveFunction = () => {...}`}</div>
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-6">
        <button
          className="bg-yellow-500 text-white p-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increase count
        </button>

        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => setAnimal(animal === 'dog' ? 'cat' : 'dog')}
        >
          Change animal
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <CountDisplayer count={count} />

        <AnimalDisplayer animal={animal} />

        <MethodCaller expensiveHandler={expensiveFunction} />
      </div>
    </div>
  );
};
