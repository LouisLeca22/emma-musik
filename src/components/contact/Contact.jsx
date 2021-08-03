import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Envoyez-moi un message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Envoyer</button>
          {message && <span>Merci pour le message, Je vous réponds au plus vite :)</span>}
        </form>
      </div>
    </div>
  );
}
