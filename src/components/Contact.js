import { useContext } from "react";
import UserContact from "../utils/UserContact.js";

const Contact = () => {
    const { user, setUser } = useContext(UserContact);

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>
                We would love to hear from you! Please reach out to us with any questions, feedback, or inquiries.
            </p>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={user.name}
                required
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
        </div>
    );
};

export default Contact;