import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic3.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>CAESARBot</h2>
               <p>
                  ซีซาร์บอท (CAESARBot) เป็นสื่อการเรียนการสอนในรูปแบบของหุ่นยนต์ ที่ช่วยในการเรียนรู้ทักษะการโปรแกรมสำหรับเด็ก
                  ใช้หลักการโปรแกรมด้วยภาพ (Visual Programming) โดยใช้สัญลักษณ์ภาพแทนคำสั่ง มาเรียงต่อกันในลักษณะเดียวกับตัวต่อหรือจิ๊กซอว์
                  และใช้สามารถโปรแกรมโดยใช้ภาษา Blockly ที่พัฒนาขึ้นโดยบริษัท Google

               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h4>View more ...</h4>
                  <p className="address">
       						<span>รับชมคลิปแนะนำ CAESARBot</span>
                     <br></br>
       						   <span>
                     Link
                    </span>
                    <span>   :      https://youtu.be/lpg5pyMa3Kg
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