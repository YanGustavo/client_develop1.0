import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/styled-components/global';
import theme from 'styles/styled-components/theme';
import 'styles/tailwind/globals.css';

import { StateProvider } from "context/state-provider";
import reducer, { initialState } from "redux/reducer-temp";

function App({ Component, pageProps }: AppProps) {
  return (    
    <ThemeProvider theme={theme}>      
      <StateProvider initialState={initialState} reducer={reducer}> 
      <Component {...pageProps} />
      </StateProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
