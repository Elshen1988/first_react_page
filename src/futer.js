import React from 'react';

function Futer() {
    return <>
<div>
<button className="w3-button w3-black w3-section" type="submit">
            <i className="fa fa-paper-plane" /> SEND MESSAGE
          </button>
        {/* Image of location/map */}
        <div className="w3-container">
          <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image" style={{width: '100%'}} />
        </div>
        {/* End page content */}
        {/* Footer */}
        <div>
            <footer className="w3-center w3-black w3-padding-16">
                <div className="a3">

                 <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
                 </div>
         
        </footer>
        </div>
        
      </div>
    </>
  }
  export default Futer;