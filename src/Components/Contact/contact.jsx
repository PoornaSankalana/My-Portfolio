import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02unyx7",
        "template_ye54s58",
        form.current,
        "PbVbe0k-AVCZYgkhl"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Error occurred in sending. Try again !");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>poornasankalana@yahoo.com</h5>
            <a href="mailto:poornasankalana@yahoo.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+94 70 243 1416</h5>
            <a
              href="http://api.whatsapp.com/send?phone=94702431416"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Email</h4>
            <h5>Poorna Sankalana</h5>
            <a href="http://m.me/id=100091867815707" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn button_slide slide_right">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
