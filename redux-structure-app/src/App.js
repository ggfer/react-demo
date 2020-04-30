import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

const App = () => {

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <TopBreadcrumbs breadcrumbsLinks={[7]} /> */}
      <div>
        <div>
          Counter:{counter}
          <button onClick={() => dispatch(increment(5))}></button>
        </div>
      </div>
    </div>
  );
};

export default App;
