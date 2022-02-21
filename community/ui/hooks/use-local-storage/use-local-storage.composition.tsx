import React from 'react';
import { useLocalStorage } from './use-local-storage';

// export const UseLocalStorageWithNoDefaultValue = () => {
//   const [value, setValue] = useLocalStorage('no-default-value', '');
//   return (
//     <div>
//       <div>The hook will save the value in the local storage when value change.</div>
//       <input value={value} onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// };

// export const UseLocalStorageWithDefaultValue = () => {
//   const [value, setValue] = useLocalStorage('with-default-value', 'my-data');
//   return (
//     <div>
//       <div>The hook will save the default value in the local storage and update it when value change.</div>
//       <input value={value} onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// };

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
