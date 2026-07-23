import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md uppercase tracking-wider">
              Our Legacy
            </span>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-8 max-w-4xl mx-auto">
              Building Technology. <span className="text-gradient">Empowering Businesses.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto mb-10">
              At Veloxatec LLP, we bridge the gap between complex engineering and human-centric solutions, accelerating digital evolution for enterprises worldwide.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-soft hover:shadow-lg transition-all active:scale-95 inline-block">
                Start a Conversation
              </Link>
              <a href="#mission" className="bg-white text-primary border border-outline-variant px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all inline-block">
                Learn Our Mission
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white" id="mission">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A professional, modern office setting with high-end glass architecture and lush greenery." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoYois0XJDq4MKpMngFYZFiN_NQ_1RRuYVLjTy9Lk_lLuUGlWGeBO50N65ir1V_26g36fq1bkpI4Nu_Ko9-ae6pJgtRqZ1GyYrlfpgLTFXmy9h_uJD2AUDGZEg50afR_EDaB42ocESOfrIVu58tKMe5abYBLpnNeR53nISOXUyossJ9duwnfSovzA579i5i0q9T87FJ-YxmwDG9iMF89gWMtVxsagxDiXyyZX-OiuF8FlF7Hg97puEK7MVgN-Z90QkeuveU-yxy6yc" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 glass-panel rounded-2xl shadow-soft hidden md:block max-w-xs">
                <p className="font-headline-md text-headline-md text-primary mb-2">10+</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Years of delivering excellence in high-end IT consulting and digital transformation.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="font-headline-lg text-headline-lg mb-6">Our Journey Towards Digital Excellence</h2>
              <p className="text-body-md text-text-muted mb-6">
                Veloxatec LLP was founded with a singular vision: to democratize Tier-1 technology solutions for businesses of all scales. We believe that technology should be an enabler, not a barrier.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">rocket_launch</span>
                  <h3 className="font-label-md text-label-md mb-2">Mission</h3>
                  <p className="text-body-md text-on-surface-variant">To engineer sustainable digital ecosystems that propel business growth through precision and innovation.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">visibility</span>
                  <h3 className="font-label-md text-label-md mb-2">Vision</h3>
                  <p className="text-body-md text-on-surface-variant">Becoming the global anchor for enterprise agility, setting the standard for the next generation of IT consulting.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
