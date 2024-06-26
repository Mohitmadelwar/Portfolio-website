// src/components/Contact.js

import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact({index}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");


  function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    fetch('https://script.google.com/macros/s/AKfycbwbYjC4VuWfv3MsUKeH9C5fVGZzzw2lu5OVhvtrpP4BMewgjPoD0jn0OfYcAfkgkQVZXQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData), 
    })
      .then(response => response.text()) 
      .then(data => {
        console.log('Success:', data);
        toast.success("Your message has been sent successfully!");
        event.target.reset();
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error("There was an error sending your message. Please try again.");
        
      });
  }
  return (
    <section id="contact" className="relative bg-black">
            <ToastContainer />

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center ">  
           
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 ">
              <motion.div 
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
          >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-[#969DA8] mt-3">
            "Let's build something remarkable together"
          </p>
          </motion.div>
          <div>
          <motion.div
             
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // Slide from right if even index, from left if odd
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
          <div className="relative mb-4">
            
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg--600 rounded text-lg">
            Submit
          </button>
          </motion.div>

          </div>
        </form>
        
      </div>
      <hr />
    </section>
  );
}