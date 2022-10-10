import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="ice">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic4.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>OTHERS</h2>
               <p>
                พวกเรายังไม่หยุดการพัฒนาเพียงเท่านี้ ยังมีหุ่นยนต์เพื่อการศึกษาที่ใช้สำหรับการโปรแกรมด้วยภาษาแบบจับต้องได้อีกมากมาย ไม่ว่าจะเป็นหุ่นยนต์แขนกล, หุ่นยนต์รอบทิศทาง
               </p>
               <p>
               โปรดติดตาม ...
               </p>

               <div className="row">

                  <div className="columns contact-details">


                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}