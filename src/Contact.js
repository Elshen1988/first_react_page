import React from 'react';

function Contact() {
    return <>
      {/* Contact Section */}
      <div className="w3-container w3-padding-32" id="contact">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
          <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
          <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
        </form>
      </div>
    </>
  }
  export default Contact;