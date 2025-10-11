import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const handleOk = () => {
    window.location.href = "https://professional-development-council.vercel.app/";
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>We’ve Moved 🚀</h2>
            <p style={{ marginBottom: "20px" }}>
              We have shifted to a new website.
              <br />
              Please click OK to continue.
            </p>
            <button
              onClick={handleOk}
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                padding: "10px 25px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// ---------------------------------------above code just to redirect new website

// import Head from 'next/head'
// import CarrerIMG from "../public/assets/images/carrer.jpg"
// import AOS from 'aos';
// import { useEffect } from 'react';
// import ImageCarousel from '../components/ImageCarousel';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Home() {
//   useEffect(() => {
//     AOS.init();
//   }, [])


//   return (
//     <div className='main-container'>
//       <Head>
//         <title>PDC | IIT Gandhinagar</title>
//         <meta name="description" content="Professional Development Council" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>

//       </main>
//       <header id='head' >
//         <div className="banner-content">
//           <h1>Professional Development Council</h1>
//         </div>
//       </header>



//       <div className="page-container">
//         <div className="page-section" data-aos="fade-up">
//           <div className="about-content">
//             <div className="section-heading">
//               <h1>Professional Development Council</h1>
//             </div>
//             <div className="row">
//               <div className="col-md-8">
//                 <p>


//                       Professional Development Council (PDC) is a dedicated division within the student council that strives to provide the student body with a structured framework for overall professional development. PDC dedicates its work to helping college students develop the skills and knowledge they need to succeed in their professional careers. The council is responsible for spreading awareness about developing professional skills and providing opportunities to enhance and test their skills. Apart from developing professional skills, PDC also acts as a medium of direct communication between <a href="https://cds.iitgn.ac.in/" target="_blank" rel="noreferrer"> <strong> Career Development Services (CDS)</strong></a>, the institute&apos;s placement cell, and the student body by facilitating feedback from companies to students and various concerns and grievances of the student body. PDC also aims to raise awareness among the student body and assist them in achieving career independence. Through informational sessions featuring alums and other professionals, workshops on resume building and interview preparation, and mock tests, PDC provides the support and resources necessary for students to achieve their dream jobs.
//                       Join us in our mission to promote professional development and achieve success in your chosen career path.

//                 </p>



//               </div>

//               <div className="col-md-4">
//                 <Image className='Image-general' src={CarrerIMG} alt="carrer" />

//               </div>
//             </div>




//           </div>
//         </div>


//         <div className="announcements" data-aos="fade-up">
//           <div className="section-heading">
//             <h1>Announcements <i className="fa fa-bullhorn" aria-hidden="true"></i></h1>
//           </div>

//           <ImageCarousel />
          
//         </div>
//       </div>




//     </div>
//   )
// }
