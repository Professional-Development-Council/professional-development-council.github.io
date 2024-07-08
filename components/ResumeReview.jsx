import React, { useState } from 'react';

const ResumeReview = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzwFBs7T-QfhKGBikj7K59nAgh6nkLssAutQ6CqdfAxD0XbX3fmpM9Yh41japCp_MTNMA/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        formData.append('SheetName', 'Resume');
        try {
            await fetch(scriptURL, { method: 'POST', body: formData });
            setMessage('Your Response has been recorded successfully!');
            setTimeout(() => {
                setMessage('');
            }, 4000);
            e.target.reset();
        } catch (error) {
            console.error('Error!', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form name="submit-to-google-sheet" className="contact-us-form" data-form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" className="form-control" name="Name" required />
                <input type="text" placeholder="Your Email" className="form-control" name="Email" required />
                <input type="text" placeholder="Your Batch" className="form-control" name="Batch" required />
                <input type="text" placeholder="Your Department" className="form-control" name="Dept" required />
                <input type="url" placeholder="Paste your PDF link here..." className="form-control" name="PDFLink" required />
                <p style={({fontSize: "12px", color: "red"})}>*Please don&apos;t forget to give us pdf comment access</p>   
                <button className="submit-button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Upload'}
                </button>
                <span id="message" className="success-message">{message}</span>

            </form>
           
        </div>
    )
}

export default ResumeReview