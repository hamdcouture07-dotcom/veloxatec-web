import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center w-full z-10">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-sm">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Next-Gen Digital Solutions
            </div>
            <h1 className="font-headline-xl text-headline-xl leading-tight text-on-surface">
              Transforming Businesses Through <span className="text-primary">Technology & Talent</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Veloxatec LLP is a dynamic technology and talent solutions company committed to helping businesses scale, innovate, and stay ahead in a rapidly evolving digital world. We combine deep technical expertise with strong recruitment capabilities to deliver solutions that are practical, scalable, and results-driven.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all duration-300">
                Explore Services
              </Link>
              <Link to="/contact" className="bg-surface-container-lowest text-primary border border-primary/10 px-8 py-4 rounded-xl font-label-md hover:bg-primary/5 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* Tech Visualization */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed-dim/30 blur-[100px] rounded-full"></div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdeiiI1lucQD7XQYmCViabUIU2BocspT3ULjgINNTSYl0HydfrJPMm0qfz0xWW0_OqI-lHI0sgstwBGEl9XUxpTxZ5H00Zr3l5rPTNvM1_rV3He-ggY_8Pg8iOcGbc8wPQvNCAhgGUx2fjYQ50qTZPocNjkmnZOqEgzmOCWNkfhkgQ2qxm2gs1sliEcoI8P0EBrPZyWOGmuLO7Mzn-YEa-PBwZEKiKN9WnlLvr7YmIHkDywU8GuWLQfJbOOxXmvZMKLsDxcUoaIcYR")'}}
              ></div>
              
              {/* Floating Glass Cards */}
              <div className="absolute top-12 -left-5 glass-panel p-6 rounded-2xl w-56 animate-bounce shadow-xl" style={{ animation: "float 6s ease-in-out infinite" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                  <span className="font-headline-md text-sm font-bold">Cloud Native</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%]"></div>
                </div>
                <span className="text-[10px] text-on-surface-variant font-label-md mt-1 block">Migration Accuracy: 99.9%</span>
              </div>
              
              <div className="absolute bottom-12 -right-2 glass-panel p-6 rounded-2xl w-56 shadow-xl" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "-3s" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-2 rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <span className="font-headline-md text-sm font-bold">AI Driven</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">Predictive analytics integration for real-time decision making.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Inline keyframes for the floating animation */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Built for Enterprise Excellence</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">We combine deep domain expertise with architectural rigor to deliver solutions that scale with your ambitions.</p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0}>
            <div className="group p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:translate-y-[-8px]">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <h3 className="font-headline-md text-headline-md mb-4">Elite Technical Expertise</h3>
              <p className="text-on-surface-variant text-body-md">Architects and developers with decades of collective experience in top-tier global IT infrastructure.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:translate-y-[-8px]">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              <h3 className="font-headline-md text-headline-md mb-4">Future-Ready Innovation</h3>
              <p className="text-on-surface-variant text-body-md">Proprietary frameworks that accelerate digital transformation and reduce technical debt.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="group p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:translate-y-[-8px]">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <h3 className="font-headline-md text-headline-md mb-4">Enterprise-Grade Security</h3>
              <p className="text-on-surface-variant text-body-md">Security-by-design approach ensuring every line of code meets global compliance standards.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Expertise Across the Digital Horizon</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Comprehensive service offerings designed to modernize infrastructure and empower data-driven innovation.</p>
            </Reveal>
            <Reveal>
              <Link to="/services" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md inline-block">
                View Catalog
              </Link>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col h-full group">
                <span className="material-symbols-outlined text-primary text-3xl mb-6">settings_suggest</span>
                <h4 className="font-headline-md text-headline-md mb-4">ServiceNow Solutions</h4>
                <p className="text-on-surface-variant text-sm mb-8 flex-grow">Full-stack implementation and platform optimization for enterprise workflows.</p>
                <Link to="/services" className="flex items-center gap-2 text-primary font-label-md text-label-md group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col h-full group">
                <span className="material-symbols-outlined text-primary text-3xl mb-6">smart_toy</span>
                <h4 className="font-headline-md text-headline-md mb-4">AI & Data Intelligence</h4>
                <p className="text-on-surface-variant text-sm mb-8 flex-grow">Harnessing LLMs and predictive models to automate complex business processes.</p>
                <Link to="/services" className="flex items-center gap-2 text-primary font-label-md text-label-md group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col h-full group">
                <span className="material-symbols-outlined text-primary text-3xl mb-6">cloud_upload</span>
                <h4 className="font-headline-md text-headline-md mb-4">Cloud & Infrastructure</h4>
                <p className="text-on-surface-variant text-sm mb-8 flex-grow">Modernizing applications with multi-cloud strategies and robust infrastructure.</p>
                <Link to="/services" className="flex items-center gap-2 text-primary font-label-md text-label-md group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col h-full group">
                <span className="material-symbols-outlined text-primary text-3xl mb-6">architecture</span>
                <h4 className="font-headline-md text-headline-md mb-4">Consulting & Staffing</h4>
                <p className="text-on-surface-variant text-sm mb-8 flex-grow">Strategic advisory and talent solutions to bridge your technical gaps.</p>
                <Link to="/contact" className="flex items-center gap-2 text-primary font-label-md text-label-md group-hover:gap-4 transition-all">
                  Get Started <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Vertical Domain Expertise</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Delivering tailored solutions for global industries.</p>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant rounded-3xl overflow-hidden border border-outline-variant shadow-lg">
          <Reveal delay={0} className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-500">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl mb-6 block transition-colors">terminal</span>
            <h5 className="font-headline-md text-lg group-hover:text-on-primary transition-colors">IT & Software</h5>
          </Reveal>
          <Reveal delay={0.1} className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-500">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl mb-6 block transition-colors">account_balance</span>
            <h5 className="font-headline-md text-lg group-hover:text-on-primary transition-colors">BFSI</h5>
          </Reveal>
          <Reveal delay={0.2} className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-500">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl mb-6 block transition-colors">local_hospital</span>
            <h5 className="font-headline-md text-lg group-hover:text-on-primary transition-colors">Healthcare</h5>
          </Reveal>
          <Reveal delay={0.3} className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-500 flex flex-col justify-center items-center">
            <Link to="/services" className="text-primary group-hover:text-on-primary font-bold transition-colors">Explore Industries →</Link>
          </Reveal>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-surface-container-highest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <p className="font-label-md text-label-md text-on-surface-variant text-center mb-12 uppercase tracking-widest">
            Strategic Alliances with Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img 
              alt="Partner Logos: ServiceNow, AWS, Microsoft Azure, and Google Cloud" 
              className="max-w-full h-auto mx-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJWzPwSaVr-8B-hJLT-9ji7OQj8fjjOHgP9kLxI01JlLewteUkmWFCPOP6RX_IKGa3Xv2fdc7bpxFL7yvzyIRsTfKTSt7iFG2PP7XHlrXbs234ULv7oGd5kmHSt1wHSiKHG0hVOgQs4bEOE0md_p2D26oNSFZyaPe1v7f2L2Wu-TogavPsKVYnQDsQz-x00FztDR2ohnd2XSA-tg4-c4bSRK457MdvYcuvi7SZJZNduskANdZAFN4MY_UnRKnpxgaUUF5owyaegFV" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
