import { useState } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)} className='button-1'>
        Toggle Dark Mode
      </button>
    </div>
  );
}