import React, { useState, useEffect } from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> TO-GATHER is an initiative to bring the people who wants to come together with the help of various events and campaigns that can be initiated in the To-Gather App for the well being of the climate. TO-GATHER focuses on providing the most efficient way to connect with a community that wants to be preserve the enovironment and help in the initiatives raised for the same.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="/">Community</a></li>
              <li><a href="/">Campaigns</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Climate Status</a></li>
              <li><a href="/">Awareness</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
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
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#"> TO-GATHER</a>.
            </p>
          </div>

          <div class="col-md-5 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}

export default Footer;