import React from 'react';
import { NavTap } from './Components/Navigation';
import {Routes, Route} from 'react-router-dom';
import { PageTask } from './Page/PageTask';
import { AboutTask } from './Page/AboutTask';

const App: React.FC = ()=>{

  return (
    <React.Fragment>
      <NavTap />
      <div className='container'>
        <Routes>
          <Route path='/' element={<PageTask />}/>
          <Route path='/About' element={<AboutTask />}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
