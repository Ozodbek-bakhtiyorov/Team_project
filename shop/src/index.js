import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/layout-components/Header';
import Footer from './components/layout-components/Footer';
import './css/index.css';

    ReactDom.render(
       <div className="main-body">
           <Header/>
            <Footer/>
       </div>,
         document.getElementById('root')
    );