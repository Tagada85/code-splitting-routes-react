import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>On this page, you can contact me!</div>
      <form>
        <input type="email" placeholder="Your email..." />
        <textarea placeholder="Your message..."></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
