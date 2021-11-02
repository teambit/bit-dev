import React, { useReducer } from 'react';
import { Sidebar } from './sidebar';

export const SmallResSidebar = () => {
  const [isOpen, setIsOpen] = useReducer((x) => !x, true);
  return (
    <>
      <button onClick={setIsOpen} type="button">
        click to toggle sidebar
      </button>
      <Sidebar isOpen={isOpen} toggle={setIsOpen}>
        <div>element 1</div>
        <div>element 2</div>
        <div>element 3</div>
        <div>element 4</div>
        <div>element 5</div>
      </Sidebar>
    </>
  );
};
