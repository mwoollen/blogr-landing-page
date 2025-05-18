import { createRoot } from 'react-dom/client';

import App from "./App";
import "./styles/main.css";
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container!); // The exclamation mark tells TypeScript that the container is non-null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

