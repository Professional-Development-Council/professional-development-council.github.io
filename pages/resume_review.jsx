import React from 'react'
import ResumeReview from '../components/ResumeReview'
import Head from 'next/head'

const Contact = () => {
  return (
    <div className='main-container'>
      <Head>
        <title>Resume Review</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Resume Review</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="section-heading">
          <h1>Get your <b>Resume</b> reviewed!</h1>
        </div>

        <div className="row">
          <div className="col-md-6 single-item">
            <div className="contact-content">
              <p>
              <b>Ready to land your dream job/internship?</b><br></br>
            Our team of resume specialists understands the importance of standing out in today&apos;s 
            competitive job market. We offer personalized feedback and expert guidance to help you craft a 
            compelling resume that showcases your unique skills and accomplishments.  
            By leveraging our insights, you can build a resume that effectively communicates your value proposition 
            and grabs the attention of hiring managers.
              </p>

            </div>
          </div>
          <div className="col-md-6 single-item">

          <ResumeReview />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact