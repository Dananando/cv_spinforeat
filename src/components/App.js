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

  const [theme, setTheme] = useState('light');

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
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
