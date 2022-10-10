import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="jumlang">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic2.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>JUMLANG</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h4>View more ...</h4>
                  <p className="address">
       						<span>ปฐมบทแห่งภาษาจำแลง</span>
                     <br></br>
       						   <span>
                     Link
                    </span>
                    <span>   :      {resumeData.website}
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}