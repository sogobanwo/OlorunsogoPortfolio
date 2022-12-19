import React from "react";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/ContactPageContent.css"

export const ContactPageContent = () => {
  return (
    <section className="work-with-me" id="contact">
      <div className="work-with-me-header">
        <h2>WORK WITH ME</h2>
      </div>
      <div className="input-section">
        <label htmlFor="Name">NAME</label>
        <input type="text" placeholder="Enter your name" />
        <label htmlFor="message">MESSAGE</label>
        <textarea
          name="textarea"
          placeholder="Drop me a message"
          id="textarea"
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <div className="submit">
          <button>Send</button>
        </div>
      </div>
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
