// src/main.tsx

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// This is the only line you need. It renders your entire application,
// and the router inside App.tsx will handle showing the correct page.
createRoot(document.getElementById("root")!).render(<App />);
