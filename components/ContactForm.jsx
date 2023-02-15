import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post("https://formspree.io/f/mdovevaz", {
        name,
        email,
        message,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
        setShowConfirmation(true); // Set the confirmation message to show
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="bg-[#ecf0f3] flex justify-center items-center h-screen">
      <div className="bg-white rounded-md p-6 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        {showConfirmation && ( // Conditional statement to show the confirmation message
          <div className="bg-green-100 text-green-800 rounded-md p-4 mb-6">
            Thank you for contacting me!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-6">
  <label
    htmlFor="message"
    className="block text-gray-700 font-bold mb-2"
  >
    Message
  </label>
  <textarea
    id="message"
    name="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="bg-gray-100 rounded-md px-3 py-2 w-full focus:outline-none"
    maxLength={200} // Set the maximum word limit to 200
    style={{ maxHeight: "150px" }} // Set the maximum height of the textarea
  />
</div>
<div className="flex justify-center">
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
  >
    {isSubmitting ? "Submitting..." : "Submit"}
  </motion.button>
</div>
</form>
      </div>
    </div>
  );
};

export default ContactForm;