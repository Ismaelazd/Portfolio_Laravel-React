import React from 'react';
import {useState, Fragment,useEffect} from 'react';

import ReactDOM from 'react-dom';
import Header from './Header'
import About from './About'
import Services from './Services'
import SavoirEtre from './SavoirEtre'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'


const App = ()=>{

    useEffect(()=> {

    console.log(window.scrollY);

})



    return(
        <Fragment>
            <Header />
            <About />
            <Services />
            <SavoirEtre />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Fragment>
    )

};
export default App;


 