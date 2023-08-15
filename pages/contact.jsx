import React from 'react'
import ContactForm from '../components/ContactForm'
import Head from 'next/head'

const Contact = () => {
  return (
    <div className='main-container'>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Contact Us</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="section-heading">
          <h1>Get in Touch!</h1>
        </div>

        <div className="row">
          <div className="col-md-6 single-item">
            <div className="contact-content">
              <p>Contact our team for any inquiries, feedback, or partnership opportunities. We are here to answer any questions you may have and provide the necessary support to help you achieve your professional development goals.</p>
              <p><strong>Email: </strong><a href='mailto:pdc.secretary@iitgn.ac.in'> pdc.secretary@iitgn.ac.in</a></p>

            </div>



          </div>
          <div className="col-md-6 single-item">

            <ContactForm />
          </div>


        </div>


      </div>


    </div>
  )
}

export default Contact