import React from 'react';

const About = () => {
    return (
        <div className="about-section">
        <img src={process.env.PUBLIC_URL + '/linkedin_pic_21.png'}  className="profile-image"/>
        <div className="icon-div">
            <h1>Active Learner, <br/>Full Stack Engineer</h1>
            <p>Hello, and welcome to my site. I am a full stack engineer who currently specializes in React JS.
            Recent code junkie and lifelong coffee junkie, I have recently graduated </p>
             <br/>
             <br/>
            
     

             <p>hi</p>
             <h3>Check Out My Stack!</h3>
             <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-ruby-plain colored"></i><br />
          <i class="devicon-rails-plain-wordmark colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i><br />
          <i class="devicon-git-plain-wordmark colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-heroku-original-wordmark colored"></i>
          </div>
        </div>
    );
}

export default About;
