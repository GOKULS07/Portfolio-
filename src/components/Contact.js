
import React, { useState } from "react"
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to a server)
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">
              <Mail size={20} />
            </span>
            <span className="contact-text">
              <a href="mailto:gokuls962005@gmail.com">gokuls962005@gmail.com</a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <Phone size={20} />
            </span>
            <span className="contact-text">+91 96005 78440</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <MapPin size={20} />
            </span>
            <span className="contact-text">Sattur, India</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <Linkedin size={20} />
            </span>
            <span className="contact-text">
              <a href="https://www.linkedin.com/in/gokuls07/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <Github size={20} />
            </span>
            <span className="contact-text">
              <a href="https://github.com/GOKULS07" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
