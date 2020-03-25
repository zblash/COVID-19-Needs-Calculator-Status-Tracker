import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CoronaTestContextProvider } from './context';
import Routes from './pages';

export default function App() {
  return (
    <CoronaTestContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CoronaTestContextProvider>
  );
}
