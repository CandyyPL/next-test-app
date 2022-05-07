import { ThemeProvider } from 'styled-components';
import { Theme } from 'assets/styles/Theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
