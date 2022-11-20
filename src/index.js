import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SavedContextProvider } from './store/saved-context';

function calculateVh(e) {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  const prevValHeight =
    Number(
      document.documentElement.style.getPropertyValue('--vh').replace('px', '')
    ) || viewportHeight;

  // check if height changed by visual keyboard and ignore it, Chrome fires resize event when keyboard appears
  if (Math.abs(prevValHeight - viewportHeight) < 200) {
    document.documentElement.style.setProperty('--vh', viewportHeight + 'px');
  }

  document.documentElement.style.setProperty('--vw', viewportWidth + 'px');
}

calculateVh();

window.addEventListener('resize', calculateVh);

window.addEventListener('orientationchange', calculateVh);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SavedContextProvider>
      <App />
    </SavedContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
