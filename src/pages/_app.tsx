import { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { QueryClientProvider} from "@tanstack/react-query";
import { queryClient } from "services/queryClient";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/styled-components/global';
import theme from 'styles/styled-components/theme';
import 'styles/tailwind/globals.css';

import { StateProvider } from "context/state-provider";
import reducer, { initialState } from "redux/reducer-temp";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (   
    <SessionProvider session={session}> 
    <QueryClientProvider client = {queryClient}>
    <ThemeProvider theme={theme}>      
      <StateProvider initialState={initialState} reducer={reducer}> 
      {/* {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
      )} */}
      <Component {...pageProps} />
      </StateProvider>
      <GlobalStyles />
    </ThemeProvider>
    </QueryClientProvider>
    </SessionProvider>
  );
}
function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  // if (adminOnly && !session.user.isAdmin) {
  //   router.push('/login?message=admin login required');
  // }

  return children;
}

export default App;
