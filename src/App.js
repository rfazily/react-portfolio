import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <div className="wrapper">
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div className="container"><a className="navbar-brand js-scroll-trigger" href="#page-top">Rayhana Fazily</a>
                <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="assets/img/rayhana.png" alt=""/>
           
                <h1 className="masthead-heading mb-0">Hi, I'm Rayhana</h1>
     
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="pre-wrap masthead-subheading font-weight-light mb-0">Digital Marketing - Web Management - Brand Reputation</p>
            </div>
        </header>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                </div>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/elegant-floors.png" alt="Elegant Floors"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/fat-beats-Project1.png" alt="Fatbeats"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/project2-travelwishlist.png" alt="Travel Wishlist"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="portfolio-modal modal fade" id="portfolioModal0" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal0Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Elegant Floors</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div><img className="img-fluid rounded mb-5" src="assets/img/portfolio/elegant-floors.png" alt="Elegant Floors"/>
                                    <p className="mb-5">Launched in February 2020, Elegant Floors is a local flooring contractor based out of northern Virginia and serves clients in the metropolitan DC region. The client had a tight deadline and wanted to get the site up and running within a week. We are now working with the client to create content-rich pages to incorporate more images and customer stories.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Fatbeats</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div><img className="img-fluid rounded mb-5" src="assets/img/portfolio/fat-beats-Project1.png" alt="Fatbeats"/>
                                    <p className="mb-5">Fatbeats is a team project I worked on as a part of my coding education. The site is intended to offer a suggestions to someone planning a musical experience in the DC area. It begins with selecting a genre of music, locating nearby events associated to that genre, then finding local food options near the event you have selected.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Travel Wishlist</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div><img className="img-fluid rounded mb-5" src="assets/img/portfolio/project2-travelwishlist.png" alt="Travel Wishlist"/>
                                    <p className="mb-5">This is a destination app created as a part of a team project in my coding course. We have created a travel planning app that allows a user to search a desired city they would like to visit, and add it to a ‘travel wish list’ or an ‘already visited list’. As the user updates their wish list, they can also move these items from the wish list, to the ‘already visited’ list.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="page-section-heading d-inline-block text-white">ABOUT</h2>
                </div>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="pre-wrap lead">I'm a digital marketing manager with over six years of experience based out of Arlington, VA.</p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="pre-wrap lead"> I help small businesses create and improve their online reputation and web presence.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                </div>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="fas fa-mobile-alt"></i></div>
                            <div className="text-muted">Phone</div>
                            <div className="lead font-weight-bold">(555) 555-5555</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="far fa-envelope"></i></div>
                            <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:rfazily@gmail.com">rfazily@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="mb-4"></h4>
                        <p className="pre-wrap lead mb-0"> </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="mb-4">AROUND THE WEB</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/rfazily"><i className="fab fa-fw fa-twitter"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/rayhana"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="mb-4"></h4>
                        <p className="pre-wrap lead mb-0"> </p>
                    </div>
                </div>
            </div>
        </footer>
        <section className="copyright py-4 text-center text-white">
            <div className="container"><small className="pre-wrap">Copyright ©  2020  | Rayhana Fazily </small></div>
        </section>
        <div className="scroll-to-top d-lg-none position-fixed"><a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        <script src="js/scripts.js"></script>
    

    </div>
  );
}
}

export default App;

