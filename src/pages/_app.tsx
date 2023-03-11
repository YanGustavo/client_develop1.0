import { AppProps } from 'next/app';
//import { SessionProvider, useSession } from 'next-auth/react';
//import { useRouter } from 'next/router';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

import { QueryClientProvider} from "@tanstack/react-query";
import { queryClient } from "services/queryClient";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/styled-components/global';
import theme from 'styles/styled-components/theme';
import 'styles/tailwind/globals.css';

import { StateProvider } from "context/state-provider";
import reducer, { initialState } from "redux/reducer-temp";

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return ( 
    <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallBack error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >   
    <QueryClientProvider client = {queryClient}>
    <ThemeProvider theme={theme}>      
      <StateProvider initialState={initialState} reducer={reducer}> 
      <Component {...pageProps} />
      </StateProvider>
      <GlobalStyles />
    </ThemeProvider>
    </QueryClientProvider>
    </ErrorBoundary> 
  );
}


export default App;
