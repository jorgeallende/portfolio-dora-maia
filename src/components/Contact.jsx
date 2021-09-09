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
        <img src="https://www.aarquiteta.com.br/blog/wp-content/uploads/2017/12/render-externo.png" alt="" />
      </div>
      <div className="right">
        <h2>Entre em contato</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
          {message && <span>Obrigado, responderei o mais breve possível</span>}
        </form>
      </div>
    </div>
  );
}
