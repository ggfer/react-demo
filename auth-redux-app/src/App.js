import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const a = 1;

  return (
    <div>
      {/* <TopBreadcrumbs breadcrumbsLinks={[7]} /> */}
      <div>
        <div>
          Counter:{counter}
          {/* a:{a} */}
        </div>
      </div>
    </div>
  );
};

export default App;
