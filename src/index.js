import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider} from "@emotion/react"


let theme = {
  colors: {
    darkTheme: {
      mainBackground: 'darkgrey',
      inputBackground: 'grey',
      inputText: 'white',
    },
    lightTheme: {
      mainBackground: 'white',
      inputBackground: 'white',
      inputText: 'black',
    },
    accentColor: '#5e25a8',
  },
  sizes: {
    small: 20,
    medium: 40,
    big: 60,
  },
  imageSizes: {
    width: 600,
    height: 400,
  },
  
};


// let dynamicBackgroundColor = (props) => css`backgroundColor: ${props=>props.theme.colors.darkTheme.mainBackground}}`

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    {/* <Global styles={css`.body {backgroundColor: ${props=>props.theme.colors.darkTheme.mainBackground}}`}/> */}
    {/* <React.StrictMode> */}
      <App/>
    {/* </React.StrictMode> */}
  </ThemeProvider>
);
