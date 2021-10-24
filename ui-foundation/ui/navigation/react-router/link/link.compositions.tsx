import React from 'react';
import {
  MemoryRouter,
  BrowserRouter,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Link } from './link';

export const Preview = () => {
  return (
    <BrowserRouter basename="hello">
      <Lunk />
    </BrowserRouter>
  );
};

function Lunk() {
  const location = useLocation();
  // const history = useHistory();
  // const { state, } = history;

  // // history
  // const somehref = history.createHref({
  //   pathname: '/boot',
  //   search: 'bob=isDog',
  // });

  return (
    <div>
      <div>location: {JSON.stringify(location)}</div>
      {/* <div>some href - {somehref}</div> */}
      <div>
        link:{' '}
        <Link href="/path/one?what=is" state={{ some: 'state' }}>
          link1
        </Link>
        <br />
        link: <Link href="/path/two">link2</Link>
      </div>

      <Route path="/path/one">First path</Route>
      <Route path="/path/two">Second path</Route>
    </div>
  );
}
