import React, { useEffect } from "react";
import { BlogsData } from '../../data/BlogsData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='main-container'>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="" />

            </Head>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="card-container">
                    <div className="row">
                        {BlogsData.map((item,index) => {
                            return (
                                <div className='col-md-4' key={index}>
                                    <div className="card-item" data-aos="fade-up">
                                        <div className="card-item-img">
                                            <Image  className='Image-general' src={item.image} alt='item' width={100} height={100}/>
                                        </div>
                                        {item.Tags.map((tags,index) => {
                                            return (
                                                <button className="card-tags" key={index}>
                                                    {tags}
                                                </button>
                                            )
                                        })}
                                        <div className="card-item-content">
                                            <Link href={`/blogs/${item.BlogTitle}`} onClick={() => window.scrollTo(0, 0)}><p>{item.BlogTitle}</p></Link>

                                            <div className="card__footer">
                                                <div className="user">
                                                    <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="user__image" className="user__image Image-general" width={100} height={100} />
                                                    <div className="user__info">
                                                        <p>{item.author}</p>
                                                        <small>{item.date}</small>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs