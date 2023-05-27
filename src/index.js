import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes/default-theme';
import * as S from 'components/app/app.style';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <App />
    </ThemeProvider >
  </React.StrictMode>
);

