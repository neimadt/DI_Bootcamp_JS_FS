import React from 'react';

const App = () => {

  let count = 10 + 3;

  const myelement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <div>
        Count {count}
      </div>
      {myelement}
    </React.Fragment>
  );
}

export default App;
