import React from 'react';

const Navigate = (props) => {

  return (
    <header id="navbar-spy" className="header header-1 header-transparent header-fixed">
      <nav id="primary-menu" className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="logo" href="#topAnchor">
                <img className="logo-light" src="https://hrr41-fec-img.s3-us-west-1.amazonaws.com/user_pics/sp.png" width="50px" height="50px"alt="Steakin Logo" draggable="false"/>
                <img className="logo-dark" src="https://hrr41-fec-img.s3-us-west-1.amazonaws.com/user_pics/sp.png" width="50px" height="50px" alt="Steakin Logo" draggable="false"/>
              </a>
          </div>

            <div className="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                <ul className="nav navbar-nav nav-pos-right navbar-left">
                {/* === */}
                <li className="has-dropdown mega-dropdown active">
                  <a href="#topAnchor" data-toggle="dropdown" className="dropdown-toggle menu-item">home</a>
                  <ul className="dropdown-menu mega-dropdown-menu">
                      <li>
                          <div className="container">
                              <div className="row">
                                  <div className="col-md-3">
                                      <ul>
                                          <li>
                                              <a href="#topAnchor">Home Main</a>
                                          </li>
                                          <li>
                                              <a href="#collectionTag">Collection</a>
                                          </li>
                                          <li>
                                              <a href="#modifyAnchor">Modify</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
                </li>
                {/* === */}
                <li className="has-dropdown">
                    <a href="#collectionTag" data-toggle="dropdown" className="dropdown-toggle menu-item">COLLECTION</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#collectionTag">User Collection</a>
                        </li>
                        <li>
                            <a href="page-chefs.html">our coffee</a>
                        </li>
                        <li>
                            <a href="page-contacts.html">contact us</a>
                        </li>
                        <li>
                            <a href="page-faqs.html">FAQs</a>
                        </li>
                    </ul>
                </li>
                {/* === */}
                <li className="has-dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle  menu-item" data-hover="pages">Menu</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="menu-board.html">menu board</a>
                        </li>
                        <li>
                            <a href="menu-classic.html">menu classic</a>
                        </li>
                    </ul>
                </li>

                <li className="has-dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle menu-item">Blog</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="blog-carousel.html">blog carousel</a>
                        </li>
                        <li>
                            <a href="blog-grid.html">blog grid</a>
                        </li>
                        <li>
                            <a href="blog-standard.html">blog standard</a>
                        </li>
                        <li>
                            <a href="blog-single.html">blog single</a>
                        </li>
                    </ul>
                </li>

                <li className="has-dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle menu-item" data-hover="shop">shop</a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="shop-products.html">shop products</a>
                        </li>
                        <li>
                            <a href="shop-single.html">shop single</a>
                        </li>
                        <li>
                            <a href="shop-cart.html">shop cart</a>
                        </li>
                    </ul>
                </li>
              </ul>
              </div>
          </div>
        </nav>
    </header>
  )
}

export default Navigate;