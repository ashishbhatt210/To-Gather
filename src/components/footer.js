import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify"> TO-GATHER is an initiative to bring the people who wants to come together with the help of various events and campaigns that can be initiated in the To-Gather App for the well being of the climate. TO-GATHER focuses on providing the most efficient way to connect with a community that wants to be preserve the enovironment and help in the initiatives raised for the same.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="/">Community</a></li>
              <li><a href="/">Campaigns</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Climate Status</a></li>
              <li><a href="/">Awareness</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#"> TO-GATHER</a>.
            </p>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a className="instagram" href="/"><i className="fa fa-instagram"></i></a></li>
              <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}

export default Footer;