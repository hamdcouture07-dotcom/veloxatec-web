import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <Reveal>
            <span className="inline-flex px-4 py-1.5 mb-6 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md items-center justify-center w-fit mx-auto">
              <span className="material-symbols-outlined mr-2 text-[18px]">support_agent</span>
              Direct Connection
            </span>
            
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6 max-w-3xl mx-auto leading-tight">
              Contact Veloxatec LLP
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              We're here to answer your questions and help you find the right technology and talent solutions for your business. Get in touch with our team today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact-form" className="inline-flex items-center bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 group">
                Send Message
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_downward</span>
              </a>
              <Link to="/" className="inline-flex items-center bg-surface-container-low text-primary px-8 py-4 rounded-xl font-label-md text-label-md border border-outline-variant/30 hover:bg-surface-container-high transition-all active:scale-95">
                <span className="material-symbols-outlined mr-2">home</span>
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop -mt-20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-20">
          {/* Address Card */}
          <Reveal delay={0}>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover-lift flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">location_on</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Address</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                F Wing, Flat No. 804, Majestique Manhattan Phase 2, Wagholi, Pune – 412207, Maharashtra, India
              </p>
            </div>
          </Reveal>

          {/* Phone Card */}
          <Reveal delay={0.1}>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover-lift flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">call</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Phone</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                +91 7620111352
              </p>
              <a className="mt-4 text-primary font-bold hover:underline" href="tel:+917620111352">Call Us Now</a>
            </div>
          </Reveal>

          {/* Email Card */}
          <Reveal delay={0.2}>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover-lift flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">mail</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Email</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                shakirsayyed@veloxatec.com
              </p>
              <a className="mt-4 text-primary font-bold hover:underline" href="mailto:shakirsayyed@veloxatec.com">Write to us</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-background" id="contact-form">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Get in touch</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Our experts are standing by to discuss your project requirements. Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-[20px]">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mt-1">Free consultation for new technology initiatives.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-[20px]">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mt-1">Tailored recruitment strategies for top talent.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-[20px]">check</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mt-1">Cloud-native development and DevOps architecture.</p>
                </li>
              </ul>
              
              <div className="mt-12 p-8 rounded-3xl bg-secondary-container/20 border border-secondary-container/30">
                <p className="italic text-on-secondary-container font-body-md">
                  "Veloxatec transformed our digital infrastructure with precision and speed. Their responsive team makes every interaction seamless."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high mr-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">CTO, Global Logistics Firm</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="John Doe" 
                        required 
                        type="text" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Company Name (Optional)</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="Enter Company" 
                        type="text" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="john@example.com" 
                        required 
                        type="email" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                      <input 
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="+91 XXX-XXX-XXXX" 
                        required 
                        type="tel" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                    <select 
                      className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none" 
                      required
                      defaultValue=""
                    >
                      <option disabled value="">Select an inquiry type</option>
                      <option>IT Solutions & Cloud</option>
                      <option>Recruitment Services</option>
                      <option>AI & DevOps Consulting</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                    <textarea 
                      className="w-full bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                      placeholder="How can we help you?" 
                      required 
                      rows={5}
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={formStatus === 'submitting'}
                    className={`w-full text-on-primary py-5 rounded-2xl font-bold transition-all active:scale-[0.98] flex items-center justify-center space-x-2 ${
                      formStatus === 'success' ? 'bg-green-600' : 'bg-primary hover:bg-primary-container hover:shadow-xl'
                    }`} 
                    type="submit"
                  >
                    {formStatus === 'idle' && (
                      <>
                        <span>Send Inquiry</span>
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        <span>Sending...</span>
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>Message Sent!</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Location Map Section */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <Reveal className="mb-10 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Location</h2>
            <p className="text-on-surface-variant font-body-md">Visit our headquarters in Pune's growing tech hub.</p>
          </Reveal>
          
          <Reveal className="bg-surface-container-highest rounded-3xl overflow-hidden shadow-inner h-[500px] relative border border-outline-variant">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-60 mix-blend-multiply" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhXsgkYLbWOUfIb1fhYOnhLWYJunY_om3lfKAHCxqukvVvPkc6bj-LUZg0yfKujca6qPUvLlTghInYXsSy25juw7OlUUKJDDhKnETIqA8iXnZ-v-xEoYyEGJ__Mkj3aUWksWeJnNiXZih7o_2YPEaIbxOZ1-cEUfmZQWQqTkUy7swo4TWqpaz1jQXpoq0vMtzYPUImQY7Xo1GBrUT6w-5cgYg6zuvEzWpmP5VUr-1VtzzkAl6U4I36AIBvoD-9PSSU6LT9pFgWuLLs")'}}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="p-6 bg-white rounded-2xl shadow-2xl flex items-center space-x-4 border border-primary/20 pointer-events-auto">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-primary">Veloxatec LLP</p>
                  <p className="text-sm text-on-surface-variant">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-[#e5e7eb]"></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
