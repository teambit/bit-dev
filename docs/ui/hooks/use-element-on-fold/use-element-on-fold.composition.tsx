import React, { useRef, useEffect, useState } from 'react';
import { useElementOnFold } from './use-element-on-fold';

export const TrackSpecificHeadingsExample = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [elementsList, setElements] = useState<any[]>([]);
  const { elements } = useElementOnFold(ref, '.tracked-element');
  useEffect(() => {
    setElements(elements);
  }, [ref.current]);

  return (
    <div>
      <div data-testid="example" ref={ref}>
        <h1 className="tracked-element">tracked heading1</h1>
        <h2 className="tracked-element">tracked heading2</h2>
        <h3 className="tracked-element">tracked heading3</h3>
        <div style={{ color: 'green' }}>↑↑↑These headings will be collected↑↑↑</div>
        <div style={{ color: 'red' }}>↓↓↓These headings will not be collected↓↓↓</div>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
      </div>
      <div data-testid="collected-elements-box">
        collected elements text:
        {elementsList.map((el, index) => {
          const text = el.textContent;
          return (
            <div className="collected-element" key={index}>
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
