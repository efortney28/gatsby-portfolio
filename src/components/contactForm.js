const ContactForm = () => {

    return (
        <div className="contact-form-container light-text">
            <form id="contact-form" name="Contact Form" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />

                <input type="email" name="email" placeholder="Email" className="form-input" /> 
                <input type="tel" name="phone" placeholder="Phone number" className="form-input" />
                <textarea name="message" placeholder="What can we work together on?" className="form-input" />
                <button type="submit" className="btn btn-submit">Submit</button>
            </form>  
        </div>
    )
}

export default ContactForm