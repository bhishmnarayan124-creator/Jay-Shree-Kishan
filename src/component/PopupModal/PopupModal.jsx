import React, { useState } from "react";
import "./PopupModal.css";

const PopupModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [dontShow, setDontShow] = useState(false);
    const [email, setEmail] = useState("");

    const handleClose = () => {
        if (dontShow) {
            localStorage.setItem("hideNewsletterPopup", "true");
        }
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setIsOpen(false);
    };

    React.useEffect(() => {
        const hidePopup = localStorage.getItem("hideNewsletterPopup");
        if (hidePopup === "true") {
            setIsOpen(false);
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <button className="close-btn" onClick={handleClose}>×</button>
                <h2>SIGN UP OUR NEWSLETTER</h2>
                <p>   Subscribe our newsletters now and stay up-to-date with new collections </p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit" className="subscribe-btn">Subscribe</button>
                </form>
                <div className="checkbox-area">
                    <input type="checkbox" required checked={dontShow} onChange={() => setDontShow(!dontShow)}  />
                    <span>Close & Don’t show this again!!!</span>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
