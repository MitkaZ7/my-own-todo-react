import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App';
import './css/index.css';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
   <AuthProvider>
    <Routes>
      <Route path="/*" element={<App />}/>
    </Routes>
   </AuthProvider>
  </BrowserRouter>

);
