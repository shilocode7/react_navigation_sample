import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Baga from './Baga';
import Maga from './Maga';
import Waga from './Waga';
import Yaga from './Yaga';
import Chitta from './Chitta';
import Zoo from './Zoo';
import Preditor from './Preditor';
import CuteAnimals from './CuteAnimals';
import Monkey from './Monkey';
import Tiger from './Tiger';
import Squirrels from './Squirrels';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/baga" element={<Baga />} />
          <Route path="/maga" element={<Maga />} />
          <Route path="/waga" element={<Waga />} />
          <Route path="/yaga" element={<Yaga />} />
          <Route path="zoo" element={<Zoo />} >
            <Route>
              <Route path="preditor" element={<Preditor />} >
                <Route path="chitta" element={<Chitta />} />
                <Route path="tiger" element={<Tiger />} />
              </Route>
              <Route path="cuteanimals" element={<CuteAnimals />} >
                <Route path="monkey" element={<Monkey />} />
                <Route path="squirrel" element={<Squirrels />} />

                
              </Route>
            </Route>

            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

