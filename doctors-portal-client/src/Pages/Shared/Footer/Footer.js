import React from 'react';
import bg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
       <div style={{background:`url(${bg})`,backgroundSize:"contain"}}>
         <footer className="footer p-10  text-base-content" >
        <div>
          <span className="footer-title">Services</span> 
          <a href="#!"  className="link link-hover">Branding</a> 
          <a href="#!" className="link link-hover">Design</a> 
          <a href="#!" className="link link-hover">Marketing</a> 
          <a href="#!" className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a href="#!" className="link link-hover">About us</a> 
          <a href="#!" className="link link-hover">Contact</a> 
          <a href="#!" className="link link-hover">Jobs</a> 
          <a href="#!" className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a href="#!" className="link link-hover">Terms of use</a> 
          <a href="#!" className="link link-hover">Privacy policy</a> 
          <a href="#!" className="link link-hover">Cookie policy</a>
        </div>
      </footer> 
      <footer className="footer px-10 py-4 border-t border-base-300 flex justify-center">
        
      <div >
    <p>Copyright © 2022 - All right reserved by Doctors Portal Ltd</p>
  </div>
      </footer>
       </div>
    );
};

export default Footer;