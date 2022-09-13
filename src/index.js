import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';






// let dynamicBackgroundColor = (props) => css`backgroundColor: ${props=>props.theme.colors.darkTheme.mainBackground}}`

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // {/* <Global styles={css`.body {backgroundColor: ${props=>props.theme.colors.darkTheme.mainBackground}}`}/> */}
     <React.StrictMode> 
      <App/>
     </React.StrictMode> 
  
);
