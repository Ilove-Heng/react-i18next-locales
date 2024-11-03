import { useCallback, useEffect, useState } from 'react';

function initializeCount() {
  const savedCount = localStorage.getItem('count');
  return savedCount ? Number(savedCount) : 0;
}

export function useCount() {
    // We want to call initializeCount() only once on mount, so we call it immediately
    // and store the result in the state. If we were to call initializeCount()
    // directly in the useState initializer, it would be called on every render.
    
    // the difference between initializeCount and initializeCount() is that
    // initializeCount() is a function and initializeCount is a variable
    // if you do this way  initializeCount() the function called every single render 
    // if you do this way initializeCount the function called only once initially on mount
  const [count, setCount] = useState(initializeCount);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // OR use the functional update pattern (preferred)
  const increment2 = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Can keep empty dependencies

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const decrement2 = useCallback(() => {
    setCount(prev => prev - 1); // Using functional update pattern
  }, []);

  return {
    count,
    increment,
    increment2,
    decrement,
    decrement2
  };
}