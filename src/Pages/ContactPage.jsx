import React from "react";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/ContactPageContent.css";
import "../StyleSheets/mobile.css";
import { useForm, ValidationError } from "@formspree/react";

const Swal = require('sweetalert2')


export const ContactPageContent = () => {
  const [state, handleSubmit] = useForm("mbjerzrl");
  if (state.succeeded) {
    Swal.fire(
      'Message Sent',
      'I will reply shortly, Thanks!',
      'success'
    )
  }
  return (
    <section className="work-with-me" id="contact">
      <div className="work-with-me-header">
        <h2>WORK WITH ME</h2>
      </div>
      <form className="input-section" onSubmit={handleSubmit}>
        <label htmlFor="Name">Email Address</label>
        <input
          className="box"
          type="email"
          placeholder="Enter your Email Address"
          id="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">MESSAGE</label>
        <textarea
          name="message"
          className="box"
          placeholder="Drop me a message"
          id="message"
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <div className="submit" >
          <button type="submit" disabled={state.submitting}>Send</button>
        </div>
      </form>
    </section>
  );
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
};

export default ContactPage;
