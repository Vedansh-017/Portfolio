import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("http://localhost:4000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setStatus("Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      setStatus("Error sending message. Please try again.");
    }
    
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">

      {/* BACKGROUND */}
      <div className="grid-bg"></div>

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="glass px-4 py-1 rounded-full text-sm">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Let’s Work Together
        </h2>
        <p className="text-gray-400 mt-4">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </motion.div>

      {/* TOP GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT - CONTACT INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl space-y-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >

          <h3 className="text-lg font-semibold">Contact Information</h3>

          {[
            { icon: <FaEnvelope />, title: "Email", value: "vedanshmamodiya9000@email.com" },
            { icon: <FaPhone />, title: "Mobile", value: "+91 9024292745" },
            { icon: <FaMapMarkerAlt />, title: "Location", value: "Jaipur Rajasthan, India" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{item.title}</p>
                <p>{item.value}</p>
              </div>
            </div>
          ))}

          {/* RESPONSE TIME */}
          <div className="bg-blue-500/10 p-4 rounded-xl mt-6">
            <p className="text-sm text-gray-300">
              ⏱ Response Time: Within 24 hours
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE WRAPPER */}
        <div className="flex flex-col gap-8">
          
          {/* SEC 1: SOCIALS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-6">Connect With Me</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Vedansh-017" },
                { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vedansh-mamodiya-74880229a?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/Vedansh782086" },
                { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/vedansh._017?utm_source=qr&igsh=cnVxb2t6NjEyb3Vk" },
              ].map((social, idx) => (
                <motion.a 
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 border border-white/10 rounded-xl hover:bg-white/10 transition cursor-pointer"
                >
                  <span className="text-xl">{social.icon}</span> 
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* SEC 2: QUICK RESPONSE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <FaEnvelope className="mx-auto mb-3 text-3xl text-blue-600" />
            <h4 className="font-semibold mb-2">Quick Response</h4>
            <p className="text-sm">
              I typically respond within 24 hours. For urgent queries, email me directly.
            </p>
          </motion.div>

        </div>
      </div>

      {/* CONTACT FORM */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-16 glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
      >

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white"
            />
          </div>

          {/* ROW */}
          <div className="grid gap-4">
            {/* <div>
              <label className="text-sm text-gray-400">Contact Number</label>
              <input
                type="text"
                placeholder="+91 9024292745"
                className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white"
              />
            </div> */}

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="feedback"
              rows="5"
              placeholder="Write your message..."
              value={formData.feedback}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button 
            type="submit"
            disabled={status === "Submitting..."}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "Submitting..." ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className={`text-center text-sm ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}

        </form>
      </motion.div>

    </section>
  );
}