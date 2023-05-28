import styled, { createGlobalStyle } from "styled-components";
import SFProDisplayMed from 'assets/fonts/sf-pro-display-medium.woff';
import SFProDisplayReg from 'assets/fonts/sf-pro-display-regular.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SF-Pro-Display';
  font-style: normal;
  font-weight: 400;
  src:  local('SF-Pro-Display'),
        url(${SFProDisplayReg}) format('woff');
}

@font-face {
  font-family: 'SF-Pro-Display';
  font-style: normal;
  font-weight: 500;
  src:  local('SF-Pro-Display'),
        url(${SFProDisplayMed}) format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

:root {
  font-family: 'SF-Pro-Display', monospace;
  font-style: normal;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.4;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  width: 1920px;

  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.mainBackground};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input {
  border-radius: 0;
}

input::placeholder {
  opacity: 1;
}

input:invalid {
  box-shadow: none;
}

textarea {
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

/* chrome search X removal */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  appearance: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}

/* ios button \ inputs reset */
select,
textarea,
input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
  appearance: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  clip: rect(0 0 0 0);
}
`;

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "navigation header-line"
    "navigation content";
  grid-template-columns: 15rem 1fr;

  @media(min-width: 120rem) {
    grid-template-columns: 15rem 105rem;
  }
`;

export {
  GlobalStyle,
  AppWrapper,
};
