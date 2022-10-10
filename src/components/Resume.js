import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="ice">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>FENTO</h2>
               <p>
                FENTO เป็นสื่อในการเรียนรู้เชิงตรรกะและเชิงคำนวณโดยใช้หุ่นยนต์
                เพื่อฝึกฝนเด็กในการเขียนโปรแกรมเชิงรูปธรรม (Tangible Programming) โดยใช้หลักหุ่นยนต์เห็นได้ด้วยกล้อง (Machine Vision) 
                ในการอ่านสัญลักษณ์เพื่อควบคุมการทำงานของหุ่นยนต์การเลือกและการกำหนดรูปแบบการจัดเรียงสัญลักษณ์ต่าง ๆ เกิดเป็นโปรแกรมเขิงรูปธรรม
                ที่ใช้ควบคุมพฤติกรรมของหุ่นยนต์
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h4>View more ...</h4>
                  <p className="address">
       						<span>รับชมคลิปแนะนำ FENTO</span>
                     <br></br>
       						   <span>
                     Link
                    </span>
                    <span>   :      https://youtu.be/KzWP1AH-WKw
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