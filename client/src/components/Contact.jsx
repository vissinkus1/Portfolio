import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [note, setNote] = useState({ text: '', type: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setNote({ text: '', type: '' });

    try {
      const { data } = await axios.post('/api/contact', form);
      if (data.success) {
        setNote({
          text: 'Thanks! Your message has been sent. I will reply soon.',
          type: 'success',
        });
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err) {
      const msg =
        err.response?.data?.error || 'Something went wrong. Please try again.';
      setNote({ text: msg, type: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>
          Open to full-time opportunities and technical discussions in ML Engineering, MLOps, Software Development, Full-Stack Development, and Agentic AI.
        </p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your role or project"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="btn primary" type="submit" disabled={sending}>
            {sending ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
          {note.text && (
            <p className={`form-note ${note.type}`} aria-live="polite">
              {note.text}
            </p>
          )}
        </form>

        <div className="contact-card">
          <h3>Contact Details</h3>
          <p><strong>Location:</strong> Greater Noida, Uttar Pradesh, India</p>
          <p><strong>Email:</strong> <a href="mailto:singhkushwahavishal344@gmail.com" style={{ color: 'var(--accent)' }}>singhkushwahavishal344@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+917755090060" style={{ color: 'var(--accent)' }}>+91-7755090060</a></p>
          <p><strong>Target Roles:</strong> ML Engineer, MLOps, Software Developer, Full-Stack Developer, Agentic AI</p>
          
          <div className="socials" style={{ marginTop: '20px' }}>
            <a
              href="https://github.com/vissinkus1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishal-singh-kushwaha27"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://portfolio-vishal-dph9.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>

          {/* Resume PDF link placeholder:
              TODO: Upload resume PDF to client/public/resume.pdf and link below:
              <div style={{ marginTop: '16px' }}>
                <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '13px' }}>Download Resume (PDF)</a>
              </div>
          */}
        </div>
      </div>
    </section>
  );
}
