import { useCount } from '@/hooks/useCount';

export default function Counter() {
  const { count, increment, increment2, decrement, decrement2 } = useCount();

  return (
    <div className='mt-4'>
      <button onClick={increment2} className='button-purple-to-blue'>Increment</button>
      <button onClick={decrement} className='button-purple-to-blue'>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}