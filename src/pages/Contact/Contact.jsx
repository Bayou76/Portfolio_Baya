import Header from "../../components/Header/Header"
import './contact.scss';

function Contact() {
    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contactez-Nous</h1>
                <p>Je serais ravis de vous entendre !</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}
export default Contact