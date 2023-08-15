import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";



const Clubs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main-container'>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Annuity Club</h2>
        </div>
      </header>


      <div className="page-container">
        <div className="blog-content">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading">
                {/* <h1>{Club.ClubName}</h1> */}
              </div>

              <div className="para-contaent">
                <p>Annuity Club is a student-run finance club that aims to develop and cultivate an interest in finance among students by providing a platform for learning and exploration. Finance has a significant impact on every other sector, and with the advent of technology, its applications have become more varied. We believe students must understand how technology changes the finance industry and how they can leverage it to make better investment decisions. To this end, we organize workshops and training sessions on algorithmic trading to help students understand how it works and how to apply it in real-world scenarios.</p>
              </div>
              <div className="para-contaent">
                <p>We aim to provide a peer-assisted learning environment where students can discuss and analyze different aspects of finance, including budgeting, stocks, trading, and more. To achieve this, we organize various events and workshops that provide students with opportunities to learn about finance and its applications. We also invite experts from the finance industry to speak to our members and share their experiences and insights. Our club members participate in various competitions and projects related to finance to gain practical experience and apply their knowledge in real-world situations.
</p>
              </div>
              <div className="para-contaent">
                <p>Our club also envisions creating student-run funds to provide hands-on experience in managing investments and creating portfolios. This will help students develop practical skills in finance and enhance their understanding of the industry.
</p>
              </div>


            </div>
            <div className="col-md-6">
              <img src="https://corp.smartbrief.com/wp-content/uploads/2020/07/AdobeStock_331489342-scaled.jpeg" alt="Club Logo" />
            </div>
          </div>

        </div>












      </div>
    </div>
  )
}

export default Clubs