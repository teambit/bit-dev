import { renderHook } from '@testing-library/react-hooks';
import { useElementOnFold } from './use-element-on-fold';

function getExampleDOM() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <h7>h7</h7>
    <h8>h8</h8>
  `;

  return div;
}

describe('component', () => {
  beforeAll(() => {
    document.createElement('div.main');

    document.body.appendChild(getExampleDOM());
  });

  it('should return all heading elements in the document', () => {
    const { result } = renderHook(() => useElementOnFold());

    const { elements } = result.current;
    expect(elements).toHaveLength(8);
  });

  it('should return specified heading elements which match selector', () => {
    const { result } = renderHook(() => useElementOnFold(undefined, 'h1, h2, h3'));

    const { elements } = result.current;

    expect(elements).toHaveLength(3);
  });
});
