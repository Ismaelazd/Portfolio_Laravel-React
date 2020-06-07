import React , {useState, Fragment} from 'react';

const Footer = ()=>{

    return(
        <Fragment>
        <section className="footer">
        <svg className='h-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200 ">
  <path fill="#fff" fill-opacity="1" d="M0,96L80,80C160,64,320,32,480,64C640,96,800,192,960,192C1120,192,1280,96,1360,48L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
            <div className="contact">
                <div className="container">
                  
                        <div className="row  medIc text-white text-center pt-4 mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
</svg>
                            <div className="box col-md-3 my-2">
                                <div className="icon">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <h4>Adresse</h4>
                                    <h3>MolenGeek, 1080</h3>
                                </div>
                            </div>
                            <div className="box col-md-3 my-2">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                    <h4>Mobile</h4>
                                    <h3>+32 488/66.88.07</h3>
                                </div>
                            </div>
                            <div className="box col-md-3 my-2">
                                <div className="icon">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Email</h4>
                                    <h3>ismaelazd@hotmail.com</h3>
                                </div>
                            </div>
                        </div>

                
                    <div className="row text-center r2">
                        <div className="col-md-12">
                            <hr/>
                            <p className="copy pt-3">
                                Ismael © 2018. All Right Reserved, Designed By Ismael.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

        </section> 
        </Fragment>
    )

};
export default Footer;

    