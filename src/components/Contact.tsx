import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    project: 'poster'
  });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const whatsappPrefill = encodeURIComponent("Hi Justudio, I'm interested in a design project (poster / menu / logo / signboard / website). Could you assist me?");
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'justudio2025@gmail.com',
      link: 'mailto:justudio2025@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '011-23325311',
      link: 'tel:+601123325311'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kuala Lumpur, Malaysia',
      link: '#'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      const res = await fetch('https://formspree.io/f/xandajav', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
  <section id="contact" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#0a3670' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#dcb417' }}></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Ready to bring your vision to life? Get in touch and let's discuss your next design project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const isPhone = info.title === 'Phone';
                if (isPhone) {
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:bg-white/10 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{ backgroundColor: '#dcb417' }}>
                          <info.icon size={24} color="#0a3670" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{info.title}</p>
                          <p className="text-gray-300 flex items-center space-x-2">
                            <span>{info.value}</span>
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText('+601123325311');
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              }}
                              className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-xs text-white flex items-center space-x-1 transition-colors"
                            >
                              {copied ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </p>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/601123325311?text=${whatsappPrefill}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-3 rounded-full bg-[#25D366]/90 hover:bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-colors"
                        aria-label="Chat on WhatsApp"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </motion.div>
                  );
                }
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 hover:bg-white/10 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{ backgroundColor: '#dcb417' }}>
                      <info.icon size={24} color="#0a3670" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{info.title}</p>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl" style={{ backgroundColor: '#fff1cc' }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle size={24} color="#0a3670" />
                <h4 className="font-bold" style={{ color: '#0a3670' }}>Quick Response</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#0a3670' }}>
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call or text me directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.25 }}
            className="bg-white rounded-2xl p-8 shadow-2xl will-change-transform"
            style={{ maxWidth: '100%' }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#0a3670' }}>
              Start Your Project
            </h3>

            {!success && (
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Optional hidden subject */}
              <input type="hidden" name="_subject" value="New Project Inquiry from Justudio Website" />
              <input type="text" name="_gotcha" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="name" className="block font-medium mb-2" style={{ color: '#0a3670' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ focusRingColor: '#dcb417' }}
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="email" className="block font-medium mb-2" style={{ color: '#0a3670' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ focusRingColor: '#dcb417' }}
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="project" className="block font-medium mb-2" style={{ color: '#0a3670' }}>
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ focusRingColor: '#dcb417' }}
                >
                  <option value="poster">Poster Design</option>
                  <option value="menu">Menu Design</option>
                  <option value="signboard">Signboard Design</option>
                  <option value="logo">Logo Design</option>
                  <option value="website">Website Design</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="message" className="block font-medium mb-2" style={{ color: '#0a3670' }}>
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-vertical"
                  style={{ focusRingColor: '#dcb417' }}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -2 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                disabled={submitting}
                type="submit"
                className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#dcb417', color: '#0a3670' }}
              >
                {submitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-green-500/10 border border-green-500/30">
                  <Check size={40} className="text-green-500" />
                </div>
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#0a3670' }}>Message Sent!</h4>
                <p className="text-gray-600 max-w-md mb-8">Thank you for reaching out. I will get back to you shortly. Feel free to also message me on WhatsApp if it's urgent.</p>
                <button
                  onClick={() => { setSuccess(false); setFormData({ name: '', email: '', message: '', project: 'poster' }); }}
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: '#0a3670', color: 'white' }}
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}