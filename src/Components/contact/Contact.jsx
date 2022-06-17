import { useState } from "react";

import "./contact.css"

export default function Contact() {
    const [message, setMessage] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact">
            <div className="contact-left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
            </div>
            <div className="contact-right">
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}
