// import logo from '../assets/logo.svg';
import { useState } from 'react';
import '../css/App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes';

import Aside from './Aside';
import Main from './Main';

const StyledApp = styled.div`
`;

function App() {

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Aside />
          <Main />
        </div>
        <div className="buttonDiv">
          <button className="btn btn1" onClick={() => themeToggler()}>Change theme</button>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
