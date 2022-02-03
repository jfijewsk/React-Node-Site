import React, {Component} from 'react';
import World from '../Assests/images/WorldNewHello.png';
import NowHiring from '../Assests/images/NowHiringNew.png';
import NowGraduating from '../Assests/images/NowGraduating.png';
import CompanyName from './CompanyName';

import '../CSS/App.css';
import '../CSS/Home.css';

import '../Assests/fonts/Montserrat-Regular.ttf';
import '../Assests/fonts/Rajdhani-SemiBold.ttf';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = { apiResponse: ''};
      }
    
        componentDidMount(){
          document.title = 'James Fijewski';
        }
    
        render() {
                return (
                  
                  <div className="font-face">

                    
                    <div className='banner-container'>
                      <div className="console">
                      <img src={World} className="world anim-background" alt="Hello World!"/>
                      <div className='console-text anim-typewriter'>
                      </div>
              
                        </div>
                    </div>
                    <div className='title'>
                      <div className='name'>James Fijewski <br/>
                      </div>
                      <div className='divider'></div>
                      <div className='main-text'> 
                        Motivated and self-driven individual  with experience working in an technical environment.
                        Recent Software Engineering graduate excited to enter a software development  career.<br /><br />
              
                        Contact me at: <br />
                        817-992-5652<br />
                        <a href = "mailto: James.Fijewski@gmail.com">James.Fijewski@gmail.com</a>
                      </div>
                      <div className='divider'></div>
                      <div className='name'> 
                      My background:
                      </div>
                    </div>
              
              
                    {/* Service Technician Position */}
                    <div className='role'>
                    
                    <img src={NowHiring} className="now-hiring" alt=""/>
                    <br/>Service Technician<br/>
                      at Cummins Allison!
                    </div>
              
                    <div className='job-description'> 
                      <div className='job-text'>
                        In February 2011, I was hired at Cummins Allison as a service technician reporting out of their Dallas Texas branch. When I accepted the job, I did 
                        not fully understand what I was going to be working on until my first day on the job! Turns out it was repairing cash and coin counting equipment. Most people
                        go their entire life without thinking about cash logistics  so it was a neat environment to be a part of. This task required understanding the mechanical, electrical 
                        and software aspects of the products at a deep level and I was responsible for managing my time and working autonomously. I found great joy in
                        restoring a broken machine into one that runs flawlessly. <br/><br/>If I have made you curious about what a cash counter looks like, below is an example of one 
                        of the machines I was responsible for:<br/><br/>
                        
                        <div className='video-container'>
                        <iframe src="https://www.youtube.com/embed/4HqwtOMfq_4" allowFullScreen title="Cash Counter"></iframe><br/><br/>
                        </div><br/>
                         However, I wanted more out of a career and was asked if I would be interested in moving to 
                         Chicago, Illinois  and becoming a technical trainer...
                      </div>
                    </div>
              
                    {/* Technical Trainer Position */}
                    <div className='role'>
                    
                    <img src={NowHiring} className="now-hiring" alt=""/>
                    <br/>Technical Trainer<br/>
                      at Cummins Allison!
                    </div>
              
                      <div className='job-description'> 
                        <div className='job-text'>
                          April 2014, I accepted a position as a technical trainer for the corporate office at Cummins Allison. Leaving my family and friends in Texas, I moved to 
                          the suburbs of Chicago to begin this a new phase of my life. My duties were to create technical training classes and training material to be used in these courses.
                          Along with content creation, majority of my time was spent teaching classrooms of new service technicians. The average class took about 10 business days and I
                          was expected to memorize every step. We had around 6-7 main classes with roughly 2 week durations in our curriculum. 
                          <br/><br/>
                          I was able to meet with people from all over the world 
                          and interact with people I would have never been able to connect with if I did not take this role. In addition, seeing the light bulb go off when you convey an 
                          idea to someone is a very satisfying reward. However, while having aspects of personal satisfaction sprinkled in did not offset the lack of creativity I am looking 
                          for. Once I had mastered instructing all of our classes, besides the people, each day was the same so I started too look for a new field to learn.
              
                        </div>
              
                      </div>
              
                    {/* ASU Degree */}
                    <div className='role'>
                    
                    <img src={NowGraduating} className="now-hiring" alt=""/>
                    <br/>B.S. Software Engineering<br/>
                      at Arizona State University!
                    </div>
              
                      <div className='job-description'> 
                        <div className='job-text'>
                        Being a life long computer nerd, I decided to see how the world of software engineering worked. In fall of 2015, I enrolled in the software engineering program
                        at Arizona State Univeristy. I choose ASU for a few reasons:<br/><br/>
                        <ul>
                          <li className='ASU-list'>
                            There were no schools near me that allowed me to be able to quickly get from work to school in the afternoons. Time was limited due to maintaining my full time job 
                            as a technical trainer while taking 9 to 12 credit hour semesters and I needed to squeeze as much time as possible out of my schedule. Communiting more than an hour 
                            in rush hour traffic would only allow me to take a limited number of classes a semester and greatly increase the amount of time needed to complete my degree.
                          </li><br/>
                          <li className='ASU-list'>
                            ASU offered an online degree that closely mirrored other engineering fields. Some online degrees I looked into did not cover mathematics or other core engineering 
                            courses. In addition, the degree is ABET accredited. 
                          </li><br/>
                          <li className='ASU-list'>
                            There are a lot of online schools that are relatively new and I was not sure if I would get a good education from them. ASU was established in 1885 and
                            has a long track history.
                          </li><br/>
                          </ul>
              
                            I graduated in Spring 2021 with a GPA of 3.8/4.0. Which brings us here...
                        </div>
              
                      </div>
              
                      
                    {/* Future Position */}
                    <div className='role'>
                    
                    <img src={NowHiring} className="now-hiring" alt=""/>
                    <br/>Software Developer
                      at<br/> <CompanyName></CompanyName>
                    </div>
              
                      <div className='job-description'> 
                        <div className='job-text'>
                        So here we are. You are looking for a software developer and I am looking to join a software development team. I would love a chance to grow as an 
                        individual within your team if you give me a chance. <br/><br/>
                        
                        I want to thank for your time to learn about me and for humoring my personal website. 
                        </div>
              
                      </div>
              
                  </div>
               
            );
        }
    
    }

export default Home;