import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="section">
      <form
        method="POST"
        action="https://getform.io/f/4f184c0e-e7ea-4042-a59b-7332314085fe"
        className="my-container !max-w-[600px]"
      >
        <div>
          <p className="h-primary">Contact</p>
          <p className="my-4">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="E-mail Address" name="email" />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white border-2 rounded-md px-4 py-3 my-4 mx-auto flex items-centers hover:bg-pink-600 hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
