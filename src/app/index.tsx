/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lightTheme, darkTheme } from './utils/theme';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { MapPage } from './pages/MapPage/Loadable';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import ModalRouter from './components/Modals';

export function App() {
  const { t, i18n } = useTranslation();
  // const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => createTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode],
  );
  // console.log('MOUNTING APP');

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <ModalRouter />
          <Helmet
            titleTemplate={`%s - ${t('app.header.acronymMeaning')}`}
            defaultTitle={t('app.header.acronymMeaning')}
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content={t('app.header.acronymMeaning')} />
          </Helmet>
          <MapPage />
          {/*<Routes>*/}
          {/*  <Route path="*" element={<MapPage />} />*/}
          {/*</Routes>*/}
          {/*<GlobalStyle />*/}
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
