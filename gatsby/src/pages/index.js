import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import resume from '../assets/files/resume.pdf';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address}
            {' '}
            ·
            {' '}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          { config.about.map((item, id) => (
            <p
              key={`${id}_${new Date().getTime()}`}
              className="lead mb-5"
            >
              {item}
            </p>
          ))}
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          { config.experience.map((item, id) => {
            return (
              <>
                <div
                  key={`${id}_${new Date().getTime()}`}
                  className={`resume-item d-flex flex-column-reverse flex-md-row justify-content-between ${id === config.experience.length - 1 ? 'mb-0': 'mb-3'} mb-md-5`}
                >
                  <div className="resume-content">
                    <h3 className="mb-0">{item.position}</h3>
                    <div className="mb-3 mb-md-5">
                      {item.organisation}
                      {`${item.org_desc ? ` - ${item.org_desc}` : ''}`}
                    </div>

                    <h4 className="mb-3">Projects undertaken</h4>
                    { item.projects.map((project, id) => {
                        return (
                          <div
                            key={`${project.title}_${new Date().getTime()}`}
                            className="project-item mb-3"
                          >
                            <div className="project-content">
                              <h5 className="mb-0">
                                <span className="mr-1">{`${id+1}.`}</span>
                                { project.url ?
                                    <a
                                      href={project.url}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                    >
                                      <span className='mr-2'>{project.title}</span>
                                      <i className="fas fa-external-link-square-alt"></i>
                                    </a>
                                  :
                                    project.title
                                }
                              </h5>
                              <p className="mb-1 ml-3">{project.description}</p>
                              <p className="font-italic font-weight-bold ml-3">{ project.stack}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className={`resume-date text-md-right ${id === 0 ? 'mt-0' : 'mt-3'} m-md-0`}>
                    <span className="text-primary">{`${item.from} - ${item.to}`}</span>
                  </div>
                </div>
                { id !== config.experience.length - 1 && <hr className="m-0 d-md-none" />}
              </>
            )})
          }
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          { config.education.map(item => {
            return <div key={`${item.school}_${new Date().getTime()}`} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{item.school}</h3>
                <div className="subheading mb-3">{item.course}</div>
                <div>{item.major}</div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{`${item.from} - ${item.to}`}</span>
              </div>
            </div>
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="font-weight-bold">CMS:</span>
              <span className="ml-2">
                { config.skills.cms.join(', ')}
              </span>
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Programming:</span>
              <span className="ml-2">
                { config.skills.programming.join(', ')}
              </span>
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Frontend:</span>
              <span className="ml-2">
                { config.skills.frontend.join(', ')}
              </span>
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Framework:</span>
              <span className="ml-2">
                { config.skills.frameworks.join(', ')}
              </span>
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Database:</span>
              <span className="ml-2">
                { config.skills.database.join(', ')}
              </span>
            </li>
            <li className="mb-2">
              <span className="font-weight-bold">Other Skills:</span>
              <span className="ml-2">
                { config.skills.other.join(', ')}
              </span>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          { config.interests.map((item, idx) => (
            <p key={`${idx}_${new Date().getTime()}`}>{item}</p>
          ))}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="download-section p-3 p-lg-5 d-flex align-items-center"
        id="download"
      >
        <div className="w-100">
          <h2 className="mb-5">Download Resume</h2>
          <p>
            To download PDF version of resume click <a href={resume} download="Resume_Haneet_Singh">here</a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
