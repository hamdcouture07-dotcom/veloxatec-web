import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
            Excellence in Enterprise Innovation
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6 max-w-3xl mx-auto">
            Comprehensive Technology <span className="text-primary">Ecosystem</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            From specialized ServiceNow implementations to high-scale BPO staffing, we provide the architectural backbone for the world's most ambitious digital transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services-grid" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
              Explore Solutions <span className="material-symbols-outlined">expand_more</span>
            </a>
          </div>
        </div>
      </header>

      <main className="py-24 space-y-32" id="services-grid">
        {/* Service 1: ServiceNow */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">ServiceNow Solutions</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Drive operational excellence with our certified ServiceNow architects. We transform fragmented IT, HR, and Customer Service workflows into a high-performance unified platform, reducing technical debt and accelerating enterprise-wide productivity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="space-y-3">
                  <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider">Features</h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> ITSM/ITOM Architecture</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Custom App Development</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Automated Workflows</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold">ServiceNow Paris+</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold">JavaScript</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold">REST APIs</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all inline-block">
                Inquire Now
              </Link>
            </Reveal>
            
            <Reveal className="order-1 lg:order-2">
              <div className="aspect-video rounded-3xl overflow-hidden service-card-shadow relative group">
                <img 
                  alt="ServiceNow dashboard interface." 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XLiRsVhAIHWvszLvSBC6AQE3kKE5yDAV0WwBC4nA3JApmOGffKsGqkvP9n-mSLMfYOafnECt9S7RM0gTtR4292fBiEDebRaq27KgO7LGWc9gKclPHzV2V4OSNELHy6ojx0aQNCnHwc6V-mFJ7gZ1OpUV5sbce-BSQUQUbERARNETT9BcVRjXHzfwNzKhKRQeILeSzBxDuRrGDTjhZMf-e1EQuL8irxr-1Cf_aBDrnekXjTuDBzJVuho0reUaQf6fDdoz4sphDXUI" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Service 2: AI & Data Analytics */}
        <section className="bg-white py-24">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="relative group">
                  <div className="aspect-square rounded-3xl overflow-hidden service-card-shadow">
                    <img 
                      alt="Data visualization abstract concept." 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFKTlvcui_9zFG1dxGtF59O95cSNPuz3l-_OG6vlKgabkHBeleEU9MJGiMT8KP26Ho7KR7EThHMXuPwx2ESSqZFJnp1D9CfPSHkm8-KbSfdKC7mW3dLKf-BEdHCCVil5V78oAoCnGsU8e_fEjNJZ-QMrQHa2AElphpG1ryKerI4fljr_L0DbW7oqZ2a5txayX9NS9Zv9WnAcmGyvZyoUNz_EU7qFXbvEhEX4sS0PbtI16byyqZ9EO0OEPBg_ecmMqKL6opLB8BLyia" 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden md:block max-w-[240px]">
                    <p className="font-headline-md text-headline-md text-primary">99.9%</p>
                    <p className="text-xs font-body-md text-on-surface-variant">Convert complex data into a competitive advantage. Our AI solutions deploy advanced machine learning and predictive modeling.</p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">AI & Data Analytics</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Convert complex data into a competitive advantage. Our AI solutions deploy advanced machine learning and predictive modeling to unlock hidden efficiencies, mitigate risk, and empower your leadership with autonomous, data-driven decision intelligence.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">insights</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Predictive Business Intel</h4>
                      <p className="text-sm text-on-surface-variant">Forecast trends before they happen with custom ML models.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">terminal</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Generative AI Integration</h4>
                      <p className="text-sm text-on-surface-variant">Custom LLM deployments for secure internal knowledge bases.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all inline-block">
                  Inquire Now
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Technology Pillars */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">Core Technology Pillars</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scalable infrastructure and strategic consulting designed for global competition.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0}>
              <div className="bg-white p-10 rounded-[2rem] service-card-shadow border border-outline-variant/30 flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">cloud_done</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Cloud Computing</h3>
                  <p className="text-on-surface-variant font-body-md mb-6">Multi-cloud and hybrid cloud strategies that balance security with extreme scalability. We manage migrations from legacy to Azure, AWS, and GCP.</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Cloud Native Architecture</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Serverless Frameworks</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Cost Optimization & FinOps</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-label-md flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  Explore Services <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white p-10 rounded-[2rem] service-card-shadow border border-outline-variant/30 flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">strategy</span>
                  <h3 className="font-headline-md text-headline-md mb-4">IT Consulting</h3>
                  <p className="text-on-surface-variant font-body-md mb-6">Strategic roadmap development that aligns your technology spend with long-term business goals. We provide CTO-level guidance for growth companies.</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Digital Transformation Audits</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Cybersecurity Strategy</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Vendor Management</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-label-md flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  Explore Services <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-10 rounded-[2rem] service-card-shadow border border-outline-variant/30 flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">sync_alt</span>
                  <h3 className="font-headline-md text-headline-md mb-4">DevOps</h3>
                  <p className="text-on-surface-variant font-body-md mb-6">Bridging the gap between development and operations to accelerate your release cycles while maintaining ironclad reliability.</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> CI/CD Pipeline Automation</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Infrastructure as Code (Terraform)</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Kubernetes Orchestration</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-label-md flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  Explore Services <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white p-10 rounded-[2rem] service-card-shadow border border-outline-variant/30 flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">groups_3</span>
                  <h3 className="font-headline-md text-headline-md mb-4">CRM Solutions</h3>
                  <p className="text-on-surface-variant font-body-md mb-6">Implementation and customization of world-class CRM platforms like Salesforce and HubSpot to drive sales performance and customer loyalty.</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Lead Management Systems</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Customer Data Platform (CDP)</li>
                    <li className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-primary text-base">arrow_forward</span> Automated Marketing Funnels</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-label-md flex items-center gap-2 hover:gap-3 transition-all w-fit">
                  Explore Services <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Elite IT Staffing */}
        <section className="bg-surface-container-high py-24">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <Reveal className="lg:col-span-5 space-y-8">
                <div className="bg-primary p-12 rounded-[2.5rem] text-on-primary h-full">
                  <span className="material-symbols-outlined text-5xl mb-6">person_search</span>
                  <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Elite IT Staffing & BPO Recruitment</h2>
                  <p className="font-body-md text-body-md opacity-90 mb-8">Scale your organization with surgical precision. We identify, vet, and deploy Tier-1 global talent for specialized technical roles and mission-critical business operations.</p>
                  <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-opacity-90 transition-all inline-block">
                    Inquire Now
                  </Link>
                </div>
              </Reveal>
              
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Reveal delay={0.1} className="bg-white p-8 rounded-3xl service-card-shadow flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-2 text-on-surface">IT Staffing</h4>
                    <p className="text-sm text-on-surface-variant mb-6">Niche expertise in AI, Cloud, and Cybersecurity. We find the 1% of talent that fits your culture.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Developers</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Architects</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">PMs</span>
                  </div>
                </Reveal>
                
                <Reveal delay={0.2} className="bg-white p-8 rounded-3xl service-card-shadow flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-2 text-on-surface">BPO Recruitment</h4>
                    <p className="text-sm text-on-surface-variant mb-6">Mass-scale operational staffing for customer support, technical helpdesks, and back-office ops.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Support</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Operations</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Data Entry</span>
                  </div>
                </Reveal>
                
                <Reveal delay={0.3} className="md:col-span-2 bg-white/50 border border-white p-8 rounded-3xl flex items-center gap-8">
                  <div className="hidden sm:block w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img 
                      alt="A diverse team of professionals in a modern collaborative workspace." 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmDvy_38azbuZBdIy0RMk1XSciFmKf2zDzkJecy6bVjorU4Ei-tS5nKoqgjM4u1eVjh8DXVf6_dIVIKN6WgHcZlPYZ-MJth15AFh2-rCWhk16v9pPbfeHc_zfm_lUWDkVrCx4gLRfFC4gLMp27CuZbfTWVdV-DgM6UMnGLb-8aeHomWd65innx5-0R4PSKlADEKwruqp3vfA6kWiUeV5e5mGEuPvZawMGl3DDjKIBw-dq9m4BQbOCXJhrUpHWOt3G0treoxZiZviK" 
                    />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary uppercase mb-2">Industries Served</h4>
                    <p className="text-on-surface-variant font-body-md italic">Delivering specialized solutions for FinTech, Healthcare, Logistics, E-commerce, and Energy sectors on a global scale.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
          <Reveal className="relative rounded-[3rem] overflow-hidden bg-inverse-surface text-inverse-on-surface p-12 md:p-24 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Ready to Accelerate Your Digital Roadmap?</h2>
              <p className="font-body-md text-body-md opacity-80 mb-10">Our senior consultants are ready to architect your next digital breakthrough. Schedule an executive capability session to align your technology with your vision.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all text-center">
                  Inquire Now
                </Link>
                <button className="bg-transparent border border-white/20 px-10 py-4 rounded-xl font-label-md text-label-md hover:bg-white/10 transition-all text-center">
                  View Case Studies
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
