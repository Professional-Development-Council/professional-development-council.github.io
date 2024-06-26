import React, { useState } from 'react';

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBRnny_qNITq1-RDvcTLFiEclq0Wqy2qxTbDHREpApT2rIXfoNsPIWeI5HzLAlpTLMvg/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        formData.append('SheetName', 'feedback');
        try {
            await fetch(scriptURL, { method: 'POST', body: formData });
            setMessage('Your Response has been sent successfully!');
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
                <input type="text" placeholder="Subject" className="form-control" name="Subject" required />

                <textarea placeholder="Type your message here..." className="form-control" rows="9" name="Message"
                    required></textarea>
                <button className="submit-button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send message'}
                </button>
                <span id="message" className="success-message">{message}</span>

            </form>
           
        </div>
    )
}

export default ContactForm