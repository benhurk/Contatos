import React from 'react';
import GlobalStyles from './styles';
import Sidebar from './containers/Sidebar';
import List from './containers/List';

function App() {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <main>
        <List />
      </main>
    </>
  );
}

export default App;
