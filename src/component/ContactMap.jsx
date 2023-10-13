import React from "react";

export default function ContactMap() {
  return (
    <div className="contact bg-white" id="contact">
      
      <section>
      <h3 className="heading" style={{color:"black"}}>Contact Us</h3>
        <div className="contact-container">

          <div className="map">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.05932172676!2d77.38988774442846!3d10.558437333236423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9c5774c081595%3A0x943fba52a8ed92f4!2sSRI%20MURUGAN%20BUILDERS!5e0!3m2!1sen!2sin!4v1696342565434!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="form-container">
            <h3 className="h3">GET IN TOUCH</h3>
            <form action="" className="contact-form">
              <input type="text" placeholder="Enter Your Name" required />
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message Here"
                required
              ></textarea>
              <input type="submit" value="send" className="btn" />
            </form>
          </div>

        </div>
        
      </section>
    </div>
  );
}