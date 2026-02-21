import React, { useState } from 'react';
import { ArrowRight, Camera, ShieldCheck, CreditCard, MessageSquare, Star, CheckCircle2, MapPin, Calendar, Facebook, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [userType, setUserType] = useState<'client' | 'photographer'>('client');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  const openAuth = (view: 'login' | 'signup') => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen relative font-sans text-[#2A241D] selection:bg-[#2A241D]/10 selection:text-[#2A241D]">
      {/* Cinematic Moody Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#DCD6CD]">
        <img 
          src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[60px] scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#DCD6CD]/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-noise opacity-60 mix-blend-multiply"></div>
        
        {/* Subtle warm light leaks for atmospheric effect */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#C2A88E]/30 blur-[100px]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#A89F91]/30 blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-[#2A241D]" />
            <span className="text-xl font-serif font-semibold tracking-tight text-[#2A241D]">PhotoGigs</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5045]">
            <a href="#how-it-works" className="hover:text-[#2A241D] transition-colors">How it Works</a>
            <a href="#trust" className="hover:text-[#2A241D] transition-colors">Trust & Safety</a>
            <a href="#photographers" className="hover:text-[#2A241D] transition-colors">For Photographers</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => openAuth('login')} className="text-sm font-medium text-[#5A5045] hover:text-[#2A241D] transition-colors hidden sm:block">Log in</button>
            <button onClick={() => openAuth('signup')} className="bg-[#2A241D] text-[#F4F0EA] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3E362E] transition-colors shadow-md">
              Post a Job
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-12 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Hero Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-2xl border border-white/40 text-xs font-medium text-[#3E362E] mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]">
              <ShieldCheck size={16} className="text-[#5A5045]" />
              100% Verified Photographers
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-[#2A241D]">
              Book the perfect <br/>
              <span className="italic text-[#7A6F64]">photographer.</span>
            </h1>
            <p className="text-lg text-[#5A5045] mb-10 max-w-md leading-relaxed font-light">
              The centralized marketplace where clients post jobs and professional photographers get hired. Secure payments, built-in chat, and verified reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => openAuth('signup')} className="bg-[#2A241D] hover:bg-[#3E362E] text-[#F4F0EA] px-8 py-4 rounded-full text-base font-medium transition-colors flex items-center justify-center gap-2 shadow-xl">
                Post a Job <ArrowRight size={18} />
              </button>
              <button onClick={() => openAuth('signup')} className="bg-white/20 hover:bg-white/30 backdrop-blur-2xl border border-white/40 text-[#2A241D] px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]">
                Join as Photographer
              </button>
            </div>
          </div>

          {/* Hero Cards */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            {/* Right Side: Photography Booking Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-[360px] bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] relative flex flex-col z-10 p-2"
            >
              {/* Photo Area */}
              <div className="w-full h-[260px] rounded-[2rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" 
                  alt="Wedding Shoot" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/30 shadow-sm">
                  $1,200 Secured
                </div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-serif text-white leading-tight">Wedding<br/>Shoot</h2>
                </div>
              </div>

              {/* Details Area */}
              <div className="p-6 flex flex-col gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#4A4238]">
                    <Calendar size={18} className="text-[#7A6F64]" />
                    <span className="text-sm font-medium">Oct 24th, 10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4A4238]">
                    <MapPin size={18} className="text-[#7A6F64]" />
                    <span className="text-sm">Central Park, NY</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4A4238]">
                    <CheckCircle2 size={18} className="text-[#2A241D]" />
                    <span className="text-sm">Photographer Booked</span>
                  </div>
                </div>

                <div className="mt-2 flex justify-between items-center pt-4 border-t border-[#2A241D]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#DCD6CD] overflow-hidden border-2 border-white shadow-sm">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Photographer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2A241D]">Alex Rivera</span>
                      <span className="text-[10px] text-[#7A6F64] flex items-center gap-1"><Star size={10} className="fill-[#C2A88E] text-[#C2A88E]"/> 4.9 (120 jobs)</span>
                    </div>
                  </div>
                  <button className="bg-white hover:bg-white/80 text-[#2A241D] w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm border border-white/60">
                    <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Dark Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 -left-4 lg:-left-16 bg-[#2A241D]/95 backdrop-blur-xl text-[#F4F0EA] rounded-[2rem] p-6 shadow-2xl z-20 w-64 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif">Verified</h3>
                  <p className="text-xs text-white/50">Gov ID Checked</p>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Every photographer is manually approved by our team. No fake profiles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section id="trust" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A241D] mb-4">Trust & Safety First</h2>
            <p className="text-[#5A5045] max-w-2xl mx-auto font-light text-lg">We handle the risks so you can focus on creating beautiful memories. Our platform is built on security and transparency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Verified Creators", desc: "Government ID verification and manual admin approval for all photographers." },
              { icon: CreditCard, title: "Secure Payments", desc: "Funds are held safely and only released to the photographer's wallet after the shoot." },
              { icon: MessageSquare, title: "Built-in Chat", desc: "Coordinate directly inside your booking. No need to share personal numbers." },
              { icon: Star, title: "Real Reviews", desc: "Ratings and feedback can only be left by clients after a completed job." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] hover:bg-white/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="text-[#3E362E]" size={24} />
                </div>
                <h3 className="text-xl font-serif text-[#2A241D] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#5A5045] leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2A241D] mb-4">How PhotoGigs Works</h2>
              <p className="text-[#5A5045] mb-8 font-light text-lg">A seamless end-to-end flow for both clients and professional photographers.</p>
              
              <div className="flex bg-white/20 backdrop-blur-2xl border border-white/40 rounded-full p-1 w-fit shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]">
                <button 
                  onClick={() => setUserType('client')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${userType === 'client' ? 'bg-white text-[#2A241D] shadow-sm' : 'text-[#5A5045] hover:text-[#2A241D]'}`}
                >
                  For Clients
                </button>
                <button 
                  onClick={() => setUserType('photographer')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${userType === 'photographer' ? 'bg-white text-[#2A241D] shadow-sm' : 'text-[#5A5045] hover:text-[#2A241D]'}`}
                >
                  For Photographers
                </button>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={userType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {userType === 'client' ? (
                    <>
                      <StepCard num="01" title="Post a Job" desc="Describe your event, set a budget, location, and date." />
                      <StepCard num="02" title="Receive Applications" desc="Review proposals from verified photographers." />
                      <StepCard num="03" title="Select & Pay" desc="Choose your favorite and pay securely. Funds are held safely." />
                      <StepCard num="04" title="Chat & Coordinate" desc="Discuss details via our built-in private chat." />
                      <StepCard num="05" title="Shoot Completed" desc="Enjoy your event while the photographer captures it." />
                      <StepCard num="06" title="Leave a Review" desc="Rate your experience and release funds to the creator." />
                    </>
                  ) : (
                    <>
                      <StepCard num="01" title="Signup & Verify" desc="Register, verify email, and upload your Government ID." />
                      <StepCard num="02" title="Admin Approval" desc="Our team manually reviews and approves your profile." />
                      <StepCard num="03" title="Apply to Jobs" desc="Browse the marketplace and send proposals to clients." />
                      <StepCard num="04" title="Get Booked" desc="Client selects you and pays securely upfront." />
                      <StepCard num="05" title="Complete Shoot" desc="Deliver the photos and mark the job as completed." />
                      <StepCard num="06" title="Withdraw Earnings" desc="Funds hit your wallet. Withdraw to your bank anytime." />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]">
            <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-gradient-to-bl from-white/60 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-[#2A241D] mb-6 relative z-10">Ready to capture your next moment?</h2>
            <p className="text-[#5A5045] text-lg mb-10 max-w-2xl mx-auto relative z-10 font-light">Join thousands of clients and verified photographers on the most secure photography marketplace.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button onClick={() => openAuth('signup')} className="bg-[#2A241D] text-[#F4F0EA] px-10 py-4 rounded-full text-base font-medium hover:bg-[#3E362E] transition-colors shadow-xl">
                Get Started Now
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-8 border-t border-[#2A241D]/10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-[#2A241D]" />
            <span className="text-lg font-serif font-semibold tracking-tight text-[#2A241D]">PhotoGigs</span>
          </div>
          <div className="text-sm text-[#7A6F64] font-light">
            © 2026 PhotoGigs Marketplace. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-[#5A5045]">
            <a href="#" className="hover:text-[#2A241D] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#2A241D] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2A241D] transition-colors">Support</a>
          </div>
        </footer>
      </div>

      {/* Auth Modal */}
      <AnimatePresence>
        {isAuthOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A241D]/40 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setIsAuthOpen(false)}></div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[420px] bg-white/30 backdrop-blur-[40px] border border-white/50 rounded-[2.5rem] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden"
            >
              {/* Decorative blur inside modal */}
              <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/80 rounded-full blur-[40px] pointer-events-none"></div>
              
              <button 
                onClick={() => setIsAuthOpen(false)}
                className="absolute top-6 right-6 text-[#7A6F64] hover:text-[#2A241D] transition-colors z-20 bg-white/50 rounded-full p-1 backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-medium text-[#3E362E] font-serif flex items-center gap-2">
                    <Camera size={16} /> PhotoGigs
                  </span>
                  <button 
                    onClick={() => setAuthView(authView === 'login' ? 'signup' : 'login')} 
                    className="text-sm font-medium text-[#5A5045] hover:text-[#2A241D] transition-colors mr-8"
                  >
                    {authView === 'login' ? 'Sign up' : 'Log in'}
                  </button>
                </div>
                
                <div className="flex justify-between items-end mb-8">
                  <h2 className="text-4xl font-serif text-[#2A241D]">{authView === 'login' ? 'Log in' : 'Sign up'}</h2>
                  <button className="flex items-center gap-2 bg-white/50 hover:bg-white/80 border border-white/60 transition-colors px-3 py-1.5 rounded-full text-xs font-medium text-[#3E362E] shadow-sm">
                    <Facebook size={14} />
                    Facebook
                  </button>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <AnimatePresence mode="wait">
                    {authView === 'signup' && (
                      <motion.input 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginBottom: 0 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        type="text" 
                        placeholder="Full name" 
                        className="w-full bg-white/30 border border-white/40 focus:bg-white/50 focus:border-white/80 rounded-full px-6 py-4 text-sm text-[#2A241D] placeholder:text-[#5A5045] outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" 
                      />
                    )}
                  </AnimatePresence>
                  <input type="email" placeholder="Email address" className="w-full bg-white/30 border border-white/40 focus:bg-white/50 focus:border-white/80 rounded-full px-6 py-4 text-sm text-[#2A241D] placeholder:text-[#5A5045] outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
                  <input type="password" placeholder="Password" className="w-full bg-white/30 border border-white/40 focus:bg-white/50 focus:border-white/80 rounded-full px-6 py-4 text-sm text-[#2A241D] placeholder:text-[#5A5045] outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]" />
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xs text-[#5A5045] font-light">
                    {authView === 'login' ? 'Welcome back to PhotoGigs.' : 'Join our verified community.'}
                  </p>
                  <button className="w-12 h-12 bg-[#2A241D] text-[#F4F0EA] hover:bg-[#3E362E] transition-colors rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="bg-white/20 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] hover:bg-white/30 transition-all duration-300 relative overflow-hidden">
      <div className="flex justify-between items-start mb-3 relative z-10">
        <h3 className="text-xl font-serif text-[#2A241D]">{title}</h3>
      </div>
      <p className="text-sm text-[#5A5045] leading-relaxed font-light relative z-10">{desc}</p>
      <span className="text-6xl font-serif italic text-[#2A241D]/5 absolute top-0 right-2 select-none pointer-events-none">{num}</span>
    </div>
  );
}
