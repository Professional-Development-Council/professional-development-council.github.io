import React, { useState } from 'react';

const ResumeReview = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx7vMFrqFNP2fzKbh-CQPEFxI-e38Q_i2UUIYw-C3g4cn6an9WvZcgDbchX53_m_cN1kg/exec';

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
                <input type="text" placeholder="Your Email" className="form-control" name="Mail" required />
                <input type="text" placeholder="Your Batch" className="form-control" name="Batch" required />
                <input type="text" placeholder="Your Department" className="form-control" name="Department" required />
                <input type="url" placeholder="Paste your PDF link here..." className="form-control" name="Resume_Link" required />
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