import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    outline: none;
}

#root {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

body {
    background-color: var(--grey-4);
    font-family: "Open Sans", sans-serif;
	line-height: 1;
    height: 100vh;
    width: 100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1, h2, h3, h4, h5, h6, p, li, a, button, label {
    font-family: "Open Sans";
    color: var(--grey-0);
}

::selection, option {
    color: var(--grey-0);
}

:root {
    --primary: #CE712D;
    --primary-focus: #233245;
    --primary-negative: #99993a;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --sucess: #3FE864;
    --negative: #E83F5B;
}

h2 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: 700;
}

label {
    color: var(--grey-0);
}

p {
    color: var(--grey-1);
    font-size: 10px;
}

button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: transparent;
}`;

export default GlobalStyles;
