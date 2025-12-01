import React, { Component } from 'react';

class About extends Component {
   
  render() {
function getCareerDuration() {
         const startDate = new Date("2014-01-01"); // Career start date
         const currentDate = new Date();
         const totalDays = (currentDate - startDate) / (1000 * 60 * 60 * 24);
         const years = Math.floor(totalDays / 365.25);
         const remainingDays = totalDays - (years * 365.25);
         const months = Math.floor(remainingDays / 30.44);
         return months >= 7 ? years+1+" years" : years + " years";
      }
   
    if(this.props.data){
      

      
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio.replace(/{{CAREER_DURATION}}/g, getCareerDuration());
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var resumeDownloadName = 'Prabhjot_FullStack_' + getCareerDuration() + '_EXP_CV.pdf';
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   {/* <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br /> */}
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} download={resumeDownloadName} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
