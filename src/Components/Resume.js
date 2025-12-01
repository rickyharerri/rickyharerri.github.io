import React, { Component } from 'react';
import { Markup } from 'interweave';

class Resume extends Component {
  
  render() {
function calculateDuration(yearsString) {
    const parts = yearsString.split(' - ');
    if (parts.length !== 2) return '';
    
    const startDate = new Date(parts[0]);
    const endDate = parts[1].toLowerCase() === 'present' ? new Date() : new Date(parts[1]);
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `(${remainingMonths} ${remainingMonths === 1 ? 'Month' : 'Months'})`;
    } else if (remainingMonths === 0) {
      return `(${years} ${years === 1 ? 'Year' : 'Years'})`;
    } else {
      return `(${years} ${years === 1 ? 'Year' : 'Years'} ${remainingMonths} ${remainingMonths === 1 ? 'Month' : 'Months'})`;
    }
  }

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em> {calculateDuration(work.years)}</p>
            <p><Markup content={work.description} /></p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
