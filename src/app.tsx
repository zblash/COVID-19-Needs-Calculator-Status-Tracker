import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CoronaTestContextProvider } from './context';
import Routes from './pages';
import { HeaderComponent } from './components/header';

export default function App() {
  return (
    <CoronaTestContextProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
      </BrowserRouter>
    </CoronaTestContextProvider>
  );
}
