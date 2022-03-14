import React from 'react';
import { useLocalStorage } from './use-local-storage';

export const BasicUseOfLocalStorage = () => {
  const [value, setValue] = useLocalStorage('my-key', 'my-default-value');
  return (
    <div>
      <label htmlFor="set-value">Set 'my-key' with the following value: </label>
      <input
        id="set-value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => location.reload()}>
        Refresh the page to validate this value is persisted
      </button>
    </div>
  );
};
