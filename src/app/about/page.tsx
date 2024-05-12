import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Your Steven Asamoah Ayensu and i am a <span>Software Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Your Steven Asamoah Ayensu. 
                    i am a highly motivated and dedicated IT student with a strong passion for technology and a drive to contribute to organizational success. 
                    Currently pursuing my studies at Belgium Campus ITversity, 
                    I am equipped with technical knowledge and a problem-solving mindset to excel in the IT field
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>sayensusteven68@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelors of Computing</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>0621167891</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Johannesburg</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>C#</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "30%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MySQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Belgium campus Itversity (IT)
                          </h4>
                          <p className="timeline-text">
                            Since 2021 I started to learn Programming.
                            •	Relevant Subjects (2021-2023):
                            Computer Architecture, Database Development, Entrepreneurship, Innovation and Leadership, Linear Programming, Mathematics, Network Development, Academic Writing, Information Systems, Internet of Things, Project Management, Programming, Statistics, Web Programming, Software Analysis & Design

                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Basa Tutoria Institue
                          </h4>
                          <p className="timeline-text">
                          •	BASA Tutorial Institute, January 2013 - December 2020
                            Completed High School with a bachelor pass.
                            Subjects: Pure Mathematics, Physical Science, Life Science, English, Afrikaans, Geography, Agriculture, Life Orientation

                          </p>
                        </div>
                        
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                       
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">Web Design</h4>
                          <p className="timeline-text">
                            Since 2021 I started to learn Coding. I have learn
                            Html, Css, Sass, JavaScript,java, c#, MySQL . 
                          </p>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
