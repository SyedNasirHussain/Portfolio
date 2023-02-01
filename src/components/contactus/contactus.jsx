import React, { useRef } from "react";
import "../contactus/contactus.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";
const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_341",
        "template_6ja9ea5",
        form.current,
        "OK2uL2XNB-Cndd72y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contactus">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>hami.khan341@gmail.com</h5>
            <a href="mailto:hami.khan341@@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <AiOutlineLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Syed Nasir Hussain</h5>
            <a
              href="https://www.linkedin.com/in/syed-nasir-hussain-b7a957b0/"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923000919945</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923000919945"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* ========================END OPTION PART================ */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
