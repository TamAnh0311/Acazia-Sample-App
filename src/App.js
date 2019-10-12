import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Form from './Form';
import './App.css';


const clients = [
  {
    name: "John Doe",
    position: "Project Manager",
    company: "Corporate Inc"
  },
  {
    name: "Keith Kenning",
    position: "CEO",
    company: "Finances for you Ltd"
  },
  {
    name: "Filip Burton",
    position: "Accountant",
    company: "Block Inc"
  },
];
const columns = 12 / clients.length
const listClients = clients.map((client) =>
  <div className={`col col-xs-${columns} col-sm-${columns} col-md-${columns} col-lg-${columns} col-xl-${columns}`}>
    <div className="client-block h-100">
      <div>
        <i
          className="fa fa-quote-left fa-2x"
          aria-hidden="true"
          style={{ color: "#3f3d56" }}
        ></i>
      </div>
      <div>
        <p className="client-block-text">Lorem ipsum dolor sit amet, consec- tetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a, gravida orci.<br />Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum loremLi</p>
        <h3 className="client-name">{client.name}</h3>
        <small>{client.position}</small>
        <br />
        <small>{client.company}</small>
      </div>
    </div>
  </div>
);

const logos = [
  {
    url: "./asset/materials/logo1-1.png",
  },
  {
    url: "./asset/materials/logo2.png",
  },
  {
    url: "./asset/materials/logo3.png",
  },
  {
    url: "./asset/materials/logo4.png",
  },
  {
    url: "./asset/materials/logo5.png",
  },
];

const listLogo = logos.map((item) =>
  <div className="logo-item">
    <a href="#" target="_blank">
      <img className="logo-img" src={require(`${item.url}`)} alt="" />
    </a>
  </div>
  //   <div
  //   className="logo-item carousel slide"
  //   data-ride="carousel">
  //   <div className="carousel-inner">
  //     <div className="carousel-item">
  //       <a href="#">
  //         <img className="logo-img " src={require(`${item.url}`)} alt="" />
  //       </a>
  //     </div>
  //   </div>
  // </div>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.NavbarWhite = this.NavbarWhite.bind(this);
    this.NavbarInitial = this.NavbarInitial.bind(this);
    this.NavbarRes = this.NavbarRes.bind(this);

    this.state = {
      onTop: false,
    }
  };

  componentDidMount() {
    window.onscroll = () => {
      const offset = window.pageYOffset;
      if (1200 <= offset) {
        const rowLeft = document.getElementsByClassName("row-left")
        const rowRight = document.getElementsByClassName("row-right")
        const leftSide = (offset - 1800) / 6
        if (leftSide < 0) {
          rowLeft[0].style.transform = `translateX(${leftSide}%)`;
        }
        const rightSide = (offset - 1800) / -3
        if (rightSide > 0) {
          rowRight[0].style.transform = `translateX(${rightSide}%)`;
        }
      }

      if (offset > 3300) {
        const contactLeft = document.getElementsByClassName("contact-us__left")
        const contactRight = document.getElementsByClassName("contact-us__right")

        contactLeft[0].style.animation = "0.5s ease-out 0s 1 slideInFromLeft"
        contactRight[0].style.animation = "0.5s ease-out 0s 1 slideInFromRight"
      }
      this.setState({
        onTop: window.pageYOffset < 100,
      })

    };
  };

  NavbarWhite() {
    return <nav className="navbar navbar1 navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        <img src={require("./asset/materials/logo-copy-4.png")} alt="" />
      </a>
      <div className="ml-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-collapse="collapse"
          data-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sevices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  };

  NavbarInitial() {
    return <nav className="navbar navbar2 navbar-expand-lg bg-transparent">
      <a className="navbar-brand" href="#">
        <img src={require("./asset/materials/finances-logo.png")} alt="" />
      </a>
      <div className="ml-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-collapse="collapse"
          data-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sevices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  };

  NavbarRes() {
    if (this.state.onTop == false) {
      return this.NavbarWhite()
    }
    else return this.NavbarInitial()
  };

  render() {
    return (
      <div className="App" style={{ overflowY: "-webkit-paged-y" }}>
        <div className="container-fluid">
          {this.NavbarRes(this.state.onTop)}

          <div className="first-block">
            <h2 className="first-block__text">
              <span style={{ textAlign: 'center' }}>Giving financial
            <em><span><strong className="S-text"> solutions </strong></span></em>
              </span>
              <br />
              <span style={{ textAlign: 'center' }}>and security worldwide</span>
            </h2>
          </div>
          <div className="second-block">
            <div className="row">
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 second-block__item">
                <h2 className="column-header">Growing your business and helping with organizing</h2>
                <p className="column-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a gravi</p>
                <button className="badge badge-pill badge-danger">Contact Us</button>
              </div>
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <a href="#">
                  <img src={require("./asset/materials/benifits-1.png")} alt="" />
                </a>
                <h2 className="column-header">Increasing value</h2>
                <p className="column-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem arcu, dapibus fringilla dolor aliquet ut.</p>
              </div>
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <a href="#">
                  <img src={require("./asset/materials/benifits-2.png")} alt="" />
                </a>
                <h2 className="column-header">Optimal vision</h2>
                <p className="column-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem arcu, dapibus fringilla dolor aliquet ut.</p></div>
            </div>
          </div>
          <div className="fourth-block">
            <div className="fourth-block__banner">
              <h1>What we can offer</h1>
              <span>To increase financial sercurity for your business</span>
            </div>
            <div className="row offer-row">
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="offer-block h-100">
                  <div>
                    <i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h1>Finances</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a gravi</p>
                  </div>
                  <img
                    src={require("./asset/materials/undraw_folder_39kl.jpg")}
                    alt=""
                    style={{ float: 'right' }}
                  />
                </div>
              </div>
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="offer-block h-100">
                  <div>
                    <i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h1>Consulting</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a gravi</p>
                  </div>
                  <div>
                    <img
                      src={require("./asset/materials/we-offer-2-1.png")}
                      alt=""
                      style={{ float: 'right' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="offer-block h-100">
                  <div>
                    <i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h1>Insurance</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a gravi</p>
                  </div>
                  <div>
                    <img
                      src={require("./asset/materials/insurance.jpg")}
                      alt=""
                      style={{ float: 'right' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fifth-block">
            <div className="row">
              <div
                className="col col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 row-left"
              >
                <div className="fifth-block__header">
                  <h2 className="fifth-block__header-small">Driven to deliver</h2>
                  <h2 className="fifth-block__header-big">Complete collaboration</h2>
                </div>
                <div className="-tags-column">
                  <div className="tags-column-inner">
                    <div className="iconbox iconbox-1">
                      <i className="fa fa-search iconbox-icon iconbox-search-icon fa-3x" aria-hidden="true"></i>
                      <div className="iconbox-aside">
                        <div className="iconbox-title">
                          <h3>Transparency</h3>
                        </div>
                        <div className="iconbox-seperator"></div>
                        <div className="iconbox-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.			</div>
                      </div>
                    </div>
                    <div className="divider">
                      <div className="divider-line"></div>
                    </div>
                    <div className="iconbox iconbox-2">
                      <i className="fa fa-shield iconbox-icon fa-3x" aria-hidden="true"></i>
                      <div className="iconbox-aside">
                        <div className="iconbox-title">
                          <h3>Protection</h3>
                        </div>
                        <div className="iconbox-seperator"></div>
                        <div className="iconbox-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.			</div>
                      </div>
                    </div>
                    <div className="divider">
                      <div className="divider-line"></div>
                    </div>
                    <div className="iconbox iconbox-3">
                      <i className="fa fa-pencil-square iconbox-icon iconbox-search-icon fa-3x" aria-hidden="true"></i>
                      <div className="iconbox-aside">
                        <div className="iconbox-title">
                          <h3>Compliance</h3>
                        </div>
                        <div className="iconbox-seperator"></div>
                        <div className="iconbox-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.			</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 row-right">
                <img src={require("./asset/materials/driven-to-deliver.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="sith-block">
            <h1 className="sub-header">Subscribe to our
            <em><span><strong className="S-text"> newsletter </strong></span></em>
            </h1>
            <br />
            <span>You will receive newest information about our projects, investments
              <br />partners and other important information.</span>
              <Form />
          </div>
          <div className="seventh-block">
            <div className="seventh-block__header">
              <h1>Our Clients</h1>
              <span>or more than 45 years of collaboration</span>
            </div>
            <div className="row client-list">{listClients}</div>,
          <div className="row client-logo">{listLogo}</div>,
          <div className="divider">
              <div className="divider-line"></div>
            </div>
            <div className="row seventh-block__contact-us">
              <div className="col col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 contact-us__text contact-us__left">
                <h1>
                  <em><span><strong className="S-text"> Contact us </strong></span></em>
                  to receive
          </h1>
                <h1>any further information</h1>
              </div>
              <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 justify-content-end contact-us__right">
                <button className="badge badge-pill badge-danger">Contact Us</button>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-container">
              <div>
                <div className="footer-logo-img">
                  <img src={require("./asset/materials/finances-logo.png")} />
                </div>
                <p>We are ambitioned team that knows how to deliver the best results for our clients. We do our work in the highest priority</p>
              </div>
              <div className="">
                <h3>PAGES</h3>
                <ul>
                  <li>
                    <a href="#">Insurance</a>
                  </li>
                  <li>
                    <a href="#">Planning</a>
                  </li>
                  <li>
                    <a href="#">Consulting</a>
                  </li>
                  <li>
                    <a href="#">Best Experiences</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3>USESFUL LINKS</h3>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Expert</a>
                  </li>
                </ul>
              </div>
              <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <h3>ABOUT US</h3>
                <ul>
                  <li>
                    <span><i className="fa fa-map" aria-hidden="true"></i></span><a href="#">Streed address 15, City</a>
                  </li>
                  <li>
                    <span><i className="fa fa-phone" aria-hidden="true"></i></span><a href="#">+321 97654387</a>
                  </li>
                  <li>
                    <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span><a href="#">emailaddress@company.com</a>
                  </li>
                  <li>
                    <span><i className="fa fa-clock-o" aria-hidden="true"></i></span><a href="#">9:00-18:00</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="copy-right">Copyright 2019 Shufflehound. All rights reserved.</p>
          </div>
        </div>
      </div >
    );
  }
}

App.defaultProps = {
  isTop: Boolean
}

export default App;
