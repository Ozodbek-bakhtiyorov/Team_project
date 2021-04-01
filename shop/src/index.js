import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/layout-components/Header';
import './css/index.css';

    ReactDom.render(
       <div className="main-body">
           <Header/>
       </div>,
         document.getElementById('root')
    );