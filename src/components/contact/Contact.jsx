import React, { useRef } from "react";
import img from "../images/contact.jpg";
import Back from "../common/Back";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_3ns2hcq",
        "template_nm8r6ve",
        form.current,
        "yAV6w9sELtdWah709"
      )
      .then(
        (result) => {
          // show the user a success message
          alert("message sent successully. We will get back to you!");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again later!");
        }
      );
  };
  return (
    <>
      <section className="contact mb">
        <Back name="" title="Get Helps & Friendly Support" cover={img} />
        <div className="container">
          <form ref={form} className="shadow" onSubmit={sendEmail}>
            <h3>Send us your enquiry here</h3> <br />
            <div style={{ fontSize: "1.5rem" }}>
              <input type="text" placeholder="Name" name="from_name" />
              <input type="text" placeholder="Email" name="from_email" />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              style={{ fontSize: "1.5rem" }}
            />
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Your query"
              style={{ fontSize: "1.5rem" }}
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
