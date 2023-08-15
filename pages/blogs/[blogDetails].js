import React, { useEffect, useState } from 'react';
import { BlogsData } from '../../data/BlogsData'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogsDetails = () => {
    const Router = useRouter()
    const BlogTitle = Router.query.blogDetails;

    const [Blog, setBlog] = useState(null);
    useEffect(() => {
        let Blog = BlogsData.find((Blog) => Blog.BlogTitle === (BlogTitle));
        if (Blog) {
            setBlog(Blog);
        }
    }, [BlogTitle]);

  return (
    <div className='main-container'>
    {Blog && (
        <div>
            <Head>
                <title>Blogs | {Blog.BlogTitle}</title>
            </Head>

            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="blog-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <h1>{Blog.BlogTitle}</h1>
                            </div>

                            <div className="para-contaent">
                                <p>Published Date: {Blog.date}</p>
                                <p>Author: {Blog.author}</p>
                                <p>{Blog.content}</p>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <Image className='Image-general' src={Blog.image} alt="event" width={100} height={100} />


                        </div>
                    </div>

                </div>








            </div>
        </div>
    )}
</div>
  )
}

export default BlogsDetails