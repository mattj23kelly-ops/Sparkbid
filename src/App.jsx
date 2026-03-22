import { useState, useEffect, useRef } from "react";
export default function SparkBidLanding() {
const [email, setEmail] = useState("");
const [role, setRole] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [animateIn, setAnimateIn] = useState(false);
const [scrollY, setScrollY] = useState(0);
const [activeFeature, setActiveFeature] = useState(0);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
useEffect(() => {
setTimeout(() => setAnimateIn(true), 100);
const handleScroll = () => setScrollY(window.scrollY);
window.addEventListener("scroll", handleScroll, { passive: true });
return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
const interval = setInterval(() => setActiveFeature((p) => (p + 1) % 3), 4000);
return () => clearInterval(interval);
  }, []);
const handleSubmit = async () => {
if (email && role) {
await fetch("https://formspree.io/f/mdawreyl", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, role }),
    });
setSubmitted(true);
    }
  };
const features = [
    { icon: "📋", title: "Post & Browse Projects", desc: "GCs post electrical projects in minutes. Electricians browse and filter by location, type, and budget." },
    { icon: "🤖", title: "AI-Powered Bid Estimates", desc: "Our AI analyzes scope, market rates, and your history to recommend the perfect bid amount — in seconds." },
    { icon: "📊", title: "Smart Bid Comparison", desc: "Side-by-side bid comparison with AI insights. Choose the right contractor based on data, not guesswork." },
];
const stats = [
    { value: "238K+", label: "Electrical contractors in the US" },
    { value: "72%", label: "Say finding projects is their #1 challenge" },
    { value: "3.5hrs", label: "Average time spent per bid estimate" },
    { value: "< 5min", label: "Time to bid with SparkBid AI" },
];
const S = {
page: {
fontFamily: "'DM Sans', sans-serif",
color: "#1B2537",
background: "#FAFBFC",
overflowX: "hidden",
    },
  };
return (
<div style={S.page}>
<style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Fraunces:wght@600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sparkFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.3); }
          50% { box-shadow: 0 0 0 16px rgba(245, 158, 11, 0); }
        }
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .fade-up { animation: fadeUp 0.8s ease both; }
        .fade-up-d1 { animation: fadeUp 0.8s ease 0.15s both; }
        .fade-up-d2 { animation: fadeUp 0.8s ease 0.3s both; }
        .fade-up-d3 { animation: fadeUp 0.8s ease 0.45s both; }
        .fade-up-d4 { animation: fadeUp 0.8s ease 0.6s both; }
        .spark-float { animation: sparkFloat 3s ease-in-out infinite; }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 36px; border-radius: 14px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 700;
          cursor: pointer; transition: all 0.25s ease;
          text-decoration: none;
        }
        .cta-primary {
          background: linear-gradient(135deg, #F59E0B, #D97706);
          color: #1B2537; box-shadow: 0 4px 24px rgba(245, 158, 11, 0.35);
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(245, 158, 11, 0.45);
        }
        .cta-secondary {
          background: #fff; color: #1B2537;
          border: 2px solid #D1D9E0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .cta-secondary:hover {
          border-color: #F59E0B; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .role-card {
          padding: 20px 24px; border-radius: 16px; cursor: pointer;
          border: 2px solid #E2E8F0; background: #fff;
          transition: all 0.2s ease; text-align: center; flex: 1;
        }
        .role-card:hover { border-color: #F59E0B; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .role-card.active { border-color: #F59E0B; background: #FFFBEB; box-shadow: 0 8px 24px rgba(245,158,11,0.12); }
        .feature-card {
          padding: 32px; border-radius: 20px; background: #fff;
          border: 1px solid #E8EDF2; transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.03);
        }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .feature-card.active { border-color: #F59E0B; box-shadow: 0 12px 40px rgba(245,158,11,0.12); }
        .stat-card {
          text-align: center; padding: 28px 20px;
        }
        input:focus { outline: none; border-color: #F59E0B !important; box-shadow: 0 0 0 4px rgba(245,158,11,0.1); }
        .nav-link {
          font-size: 15px; font-weight: 600; color: #64748B;
          text-decoration: none; transition: color 0.2s;
          cursor: pointer; background: none; border: none; font-family: inherit;
        }
        .nav-link:hover { color: #F59E0B; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid { flex-direction: column !important; text-align: center !important; }
          .hero-text h1 { font-size: 36px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .two-col { flex-direction: column !important; }
          .signup-box { margin: 0 16px !important; }
        }
      `}</style>
{/* ═══════ NAV ═══════ */}
<nav style={{
position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
background: scrollY > 50 ? "rgba(250,251,252,0.95)" : "transparent",
backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
borderBottom: scrollY > 50 ? "1px solid #E8EDF2" : "1px solid transparent",
transition: "all 0.3s ease",
padding: "0 24px",
      }}>
<div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<div style={{
width: 38, height: 38, borderRadius: 10,
background: "linear-gradient(135deg, #F59E0B, #D97706)",
display: "flex", alignItems: "center", justifyContent: "center",
boxShadow: "0 2px 12px rgba(245,158,11,0.3)",
            }}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="#1B2537"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
</div>
<span style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 800, color: "#1B2537" }}>SparkBid</span>
</div>
<div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
<button className="nav-link" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Features</button>
<button className="nav-link" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>How It Works</button>
<button className="nav-link" onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}>Early Access</button>
<button className="cta-primary cta-btn" style={{ padding: "12px 24px", fontSize: 15 }} onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}>
              Join the Waitlist
</button>
</div>
<button className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1B2537" strokeWidth="2">
{mobileMenuOpen
? <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
: <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
</svg>
</button>
</div>
{mobileMenuOpen && (
<div style={{ padding: "12px 0 20px", display: "flex", flexDirection: "column", gap: 12, alignItems: "center", background: "#FAFBFC", borderBottom: "1px solid #E8EDF2" }}>
<button className="nav-link" onClick={() => { setMobileMenuOpen(false); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }}>Features</button>
<button className="nav-link" onClick={() => { setMobileMenuOpen(false); document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}>How It Works</button>
<button className="cta-primary cta-btn" style={{ padding: "12px 28px", fontSize: 15 }} onClick={() => { setMobileMenuOpen(false); document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" }); }}>
              Join the Waitlist
</button>
</div>
        )}
</nav>
{/* ═══════ HERO ═══════ */}
<section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
{/* Subtle background pattern */}
<div style={{
position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
backgroundImage: "radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)",
backgroundSize: "40px 40px", opacity: 0.5,
        }} />
{/* Warm gradient glow */}
<div style={{
position: "absolute", top: -100, right: -200, width: 600, height: 600,
background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
borderRadius: "50%",
        }} />
<div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 60, position: "relative" }}>
<div className="hero-text" style={{ flex: 1 }}>
{animateIn && (
<>
<div className="fade-up" style={{
display: "inline-flex", alignItems: "center", gap: 8,
padding: "8px 16px", borderRadius: 50, background: "#FEF3C7",
marginBottom: 24, fontSize: 14, fontWeight: 700, color: "#92400E",
                }}>
<span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B", animation: "dotPulse 2s infinite" }} />
                  Coming Soon — Join the Waitlist
</div>
<h1 className="fade-up-d1" style={{
fontFamily: "'Fraunces', serif", fontSize: 54, fontWeight: 900,
lineHeight: 1.1, letterSpacing: -1.5, color: "#0F172A",
marginBottom: 24,
                }}>
                  Win more electrical<br />
                  work. <span style={{ color: "#D97706" }}>Bid smarter.</span>
</h1>
<p className="fade-up-d2" style={{
fontSize: 19, lineHeight: 1.7, color: "#475569",
fontWeight: 500, marginBottom: 36, maxWidth: 520,
                }}>
                  SparkBid connects general contractors with licensed electricians through an AI-powered bidding marketplace. Post projects, receive competitive bids, and win jobs — all in one place.
</p>
<div className="fade-up-d3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
<button className="cta-btn cta-primary" onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}>
                    Get Early Access
<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
</button>
<button className="cta-btn cta-secondary" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                    See How It Works
</button>
</div>
<div className="fade-up-d4" style={{ display: "flex", gap: 28, marginTop: 40 }}>
{[
                    { icon: "✓", text: "Free to join" },
                    { icon: "✓", text: "AI-powered bids" },
                    { icon: "✓", text: "No credit card needed" },
].map((item, i) => (
<div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
<span style={{ width: 22, height: 22, borderRadius: 6, background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#16A34A", fontWeight: 800 }}>{item.icon}</span>
<span style={{ fontSize: 14, fontWeight: 600, color: "#64748B" }}>{item.text}</span>
</div>
                  ))}
</div>
</>
            )}
</div>
{/* Hero visual — floating app mockup */}
<div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
{animateIn && (
<div className="fade-up-d2 spark-float" style={{
width: 320, background: "#fff", borderRadius: 28, padding: 0,
boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
overflow: "hidden",
              }}>
{/* Mini app header */}
<div style={{ background: "linear-gradient(135deg, #0F2B46, #1B4D6E)", padding: "20px 20px 16px", display: "flex", alignItems: "center", gap: 10 }}>
<div style={{ width: 32, height: 32, borderRadius: 8, background: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="#0F2B46"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
</div>
<span style={{ color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "'Fraunces', serif" }}>SparkBid</span>
</div>
{/* Mini project cards */}
{[
                  { title: "Office Rewiring — 3rd Floor", price: "$45K–$65K", bids: "3 bids", tag: "Commercial", color: "#2563EB" },
                  { title: "Solar + Battery Install", price: "$18K–$25K", bids: "7 bids", tag: "Residential", color: "#7C3AED" },
                  { title: "Restaurant Kitchen Electrical", price: "$12K–$18K", bids: "5 bids", tag: "Urgent", color: "#DC2626" },
].map((p, i) => (
<div key={i} style={{ padding: "14px 20px", borderBottom: "1px solid #F0F4F8" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 4 }}>
<div style={{ fontSize: 14, fontWeight: 800, color: "#1B2537", lineHeight: 1.3 }}>{p.title}</div>
<span style={{ padding: "3px 8px", borderRadius: 6, background: `${p.color}12`, color: p.color, fontSize: 10, fontWeight: 700, whiteSpace: "nowrap" }}>{p.tag}</span>
</div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<span style={{ fontSize: 16, fontWeight: 900, color: "#16A34A" }}>{p.price}</span>
<span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>{p.bids}</span>
</div>
</div>
                ))}
{/* AI bid banner */}
<div style={{ margin: "14px 16px 16px", padding: "14px 16px", background: "linear-gradient(135deg, #FFF7ED, #FFFBEB)", border: "1.5px solid #F59E0B", borderRadius: 12 }}>
<div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
<span style={{ fontSize: 14 }}>🤖</span>
<span style={{ fontSize: 12, fontWeight: 800, color: "#92400E" }}>AI Bid Estimate</span>
</div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ fontSize: 10, color: "#B45309", fontWeight: 700 }}>RECOMMENDED</div>
<div style={{ fontSize: 20, fontWeight: 900, color: "#16A34A" }}>$51,750</div>
</div>
<div style={{ textAlign: "right" }}>
<div style={{ fontSize: 10, color: "#B45309", fontWeight: 700 }}>WIN CHANCE</div>
<div style={{ fontSize: 20, fontWeight: 900, color: "#2563EB" }}>68%</div>
</div>
</div>
</div>
</div>
            )}
</div>
</div>
</section>
{/* ═══════ STATS BAR ═══════ */}
<section style={{ background: "#0F172A", padding: "48px 24px" }}>
<div className="stats-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
{stats.map((s, i) => (
<div key={i} className="stat-card">
<div style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 900, color: "#F59E0B", marginBottom: 6 }}>{s.value}</div>
<div style={{ fontSize: 14, fontWeight: 600, color: "#94A3B8", lineHeight: 1.4 }}>{s.label}</div>
</div>
          ))}
</div>
</section>
{/* ═══════ FEATURES ═══════ */}
<section id="features" style={{ padding: "100px 24px", background: "#fff" }}>
<div style={{ maxWidth: 1200, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 60 }}>
<div style={{ fontSize: 14, fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Features</div>
<h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 900, color: "#0F172A", marginBottom: 16, letterSpacing: -0.5 }}>
              Built for how contractors<br />actually work
</h2>
<p style={{ fontSize: 18, color: "#64748B", fontWeight: 500, maxWidth: 560, margin: "0 auto" }}>
              No complicated software. No steep learning curves. Just a simple, powerful tool that gets you more work.
</p>
</div>
<div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
{features.map((f, i) => (
<div key={i} className={`feature-card ${activeFeature === i ? "active" : ""}`} onMouseEnter={() => setActiveFeature(i)}>
<div style={{ fontSize: 40, marginBottom: 20 }}>{f.icon}</div>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 800, color: "#0F172A", marginBottom: 12 }}>{f.title}</h3>
<p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, fontWeight: 500 }}>{f.desc}</p>
</div>
            ))}
</div>
</div>
</section>
{/* ═══════ HOW IT WORKS ═══════ */}
<section id="how-it-works" style={{ padding: "100px 24px", background: "#FAFBFC" }}>
<div style={{ maxWidth: 1200, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 60 }}>
<div style={{ fontSize: 14, fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>How It Works</div>
<h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 900, color: "#0F172A", letterSpacing: -0.5 }}>
              Simple for everyone
</h2>
</div>
<div className="two-col" style={{ display: "flex", gap: 60 }}>
{/* GC Side */}
<div style={{ flex: 1 }}>
<div style={{
display: "inline-flex", alignItems: "center", gap: 8,
padding: "8px 18px", borderRadius: 50, background: "#EBF5FF",
marginBottom: 28, fontSize: 14, fontWeight: 700, color: "#1D4ED8",
              }}>
                🏗️ For General Contractors
</div>
{[
                { step: "1", title: "Post your project", desc: "Describe the electrical work, set your budget, and add a deadline. Takes 5 minutes." },
                { step: "2", title: "Receive bids", desc: "Licensed electricians submit competitive bids with full proposals and AI-backed pricing." },
                { step: "3", title: "Pick your contractor", desc: "Compare bids, check ratings and reviews, and award the job with one tap." },
].map((s, i) => (
<div key={i} style={{ display: "flex", gap: 18, marginBottom: 28 }}>
<div style={{
width: 44, height: 44, borderRadius: 12, flexShrink: 0,
background: "#1D4ED8", color: "#fff",
display: "flex", alignItems: "center", justifyContent: "center",
fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 900,
                  }}>{s.step}</div>
<div>
<div style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>{s.title}</div>
<div style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, fontWeight: 500 }}>{s.desc}</div>
</div>
</div>
              ))}
</div>
{/* Electrician Side */}
<div style={{ flex: 1 }}>
<div style={{
display: "inline-flex", alignItems: "center", gap: 8,
padding: "8px 18px", borderRadius: 50, background: "#FEF3C7",
marginBottom: 28, fontSize: 14, fontWeight: 700, color: "#92400E",
              }}>
                ⚡ For Electrical Contractors
</div>
{[
                { step: "1", title: "Browse projects near you", desc: "Filter by location, project type, and budget. Get notified when new jobs match your skills." },
                { step: "2", title: "Let AI build your bid", desc: "Our AI analyzes the scope, local market rates, and your win history to recommend the perfect price." },
                { step: "3", title: "Win the job", desc: "Submit your AI-powered proposal in minutes instead of hours. Stand out with professional, data-backed bids." },
].map((s, i) => (
<div key={i} style={{ display: "flex", gap: 18, marginBottom: 28 }}>
<div style={{
width: 44, height: 44, borderRadius: 12, flexShrink: 0,
background: "#D97706", color: "#fff",
display: "flex", alignItems: "center", justifyContent: "center",
fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 900,
                  }}>{s.step}</div>
<div>
<div style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>{s.title}</div>
<div style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, fontWeight: 500 }}>{s.desc}</div>
</div>
</div>
              ))}
</div>
</div>
</div>
</section>
{/* ═══════ SOCIAL PROOF / QUOTE ═══════ */}
<section style={{ padding: "80px 24px", background: "#fff" }}>
<div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
<div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
<blockquote style={{
fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700,
color: "#0F172A", lineHeight: 1.5, marginBottom: 24, fontStyle: "italic",
          }}>
            "I spend more time writing bids than doing actual electrical work. If something could cut that in half, I'd pay for it yesterday."
</blockquote>
<div style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>— Licensed Electrician, 22 years experience</div>
<div style={{ fontSize: 14, fontWeight: 500, color: "#94A3B8", marginTop: 4 }}>From our customer research interviews</div>
</div>
</section>
{/* ═══════ SIGNUP ═══════ */}
<section id="signup" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #FAFBFC, #F0F4F8)" }}>
<div className="signup-box" style={{
maxWidth: 580, margin: "0 auto", background: "#fff",
borderRadius: 24, padding: "48px 40px",
boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
        }}>
{!submitted ? (
<>
<div style={{ textAlign: "center", marginBottom: 32 }}>
<div style={{ fontSize: 14, fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Early Access</div>
<h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 900, color: "#0F172A", marginBottom: 12 }}>
                  Be first in line
</h2>
<p style={{ fontSize: 16, color: "#64748B", fontWeight: 500, lineHeight: 1.6 }}>
                  Join the waitlist and we'll let you know when SparkBid launches in your area. Early members get free access for the first 6 months.
</p>
</div>
{/* Role Selection */}
<div style={{ marginBottom: 20 }}>
<div style={{ fontSize: 14, fontWeight: 700, color: "#1B2537", marginBottom: 10 }}>I am a...</div>
<div style={{ display: "flex", gap: 12 }}>
<div className={`role-card ${role === "gc" ? "active" : ""}`} onClick={() => setRole("gc")}>
<div style={{ fontSize: 28, marginBottom: 6 }}>🏗️</div>
<div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>General Contractor</div>
<div style={{ fontSize: 13, color: "#64748B", fontWeight: 500, marginTop: 4 }}>I need electrical subs</div>
</div>
<div className={`role-card ${role === "ec" ? "active" : ""}`} onClick={() => setRole("ec")}>
<div style={{ fontSize: 28, marginBottom: 6 }}>⚡</div>
<div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>Electrical Contractor</div>
<div style={{ fontSize: 13, color: "#64748B", fontWeight: 500, marginTop: 4 }}>I want to find projects</div>
</div>
</div>
</div>
{/* Email */}
<div style={{ marginBottom: 20 }}>
<div style={{ fontSize: 14, fontWeight: 700, color: "#1B2537", marginBottom: 10 }}>Email address</div>
<input
type="email"
placeholder="you@company.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{
width: "100%", padding: "16px 18px", borderRadius: 12,
border: "2px solid #E2E8F0", fontSize: 16, fontWeight: 600,
fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
boxSizing: "border-box",
                  }}
/>
</div>
<button
className="cta-btn cta-primary"
style={{ width: "100%", justifyContent: "center", opacity: email && role ? 1 : 0.5, pointerEvents: email && role ? "auto" : "none" }}
onClick={handleSubmit}
>
                Join the Waitlist — It's Free
<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
</button>
<div style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>
                No spam. Unsubscribe anytime. We'll only email you about launch updates.
</div>
</>
          ) : (
<div style={{ textAlign: "center", padding: "20px 0" }}>
<div style={{
width: 72, height: 72, borderRadius: "50%",
background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center",
margin: "0 auto 20px", animation: "pulseGlow 2s infinite",
              }}>
<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth="3"><polyline strokeLinecap="round" strokeLinejoin="round" points="20 6 9 17 4 12" /></svg>
</div>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 900, color: "#0F172A", marginBottom: 12 }}>
                You're on the list!
</h3>
<p style={{ fontSize: 16, color: "#64748B", fontWeight: 500, lineHeight: 1.6, marginBottom: 24 }}>
                Thanks for joining as {role === "gc" ? "a General Contractor" : "an Electrical Contractor"}. We'll email you at <strong style={{ color: "#0F172A" }}>{email}</strong> when SparkBid launches in your area.
</p>
<div style={{
padding: "16px 20px", borderRadius: 14,
background: "#FEF3C7", fontSize: 15, fontWeight: 600, color: "#92400E",
              }}>
                🎁 Early members get <strong>6 months free</strong> when we launch
</div>
</div>
          )}
</div>
</section>
{/* ═══════ FOOTER ═══════ */}
<footer style={{ background: "#0F172A", padding: "48px 24px 32px" }}>
<div style={{ maxWidth: 1200, margin: "0 auto" }}>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 20 }}>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<div style={{ width: 34, height: 34, borderRadius: 8, background: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="#0F172A"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
</div>
<span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 800, color: "#fff" }}>SparkBid</span>
</div>
<div style={{ display: "flex", gap: 24 }}>
{["Features", "How It Works", "Early Access"].map((item, i) => (
<button key={i} style={{ background: "none", border: "none", color: "#94A3B8", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'" }}
onClick={() => {
const ids = ["features", "how-it-works", "signup"];
document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" });
                  }}>
{item}
</button>
              ))}
</div>
</div>
<div style={{ borderTop: "1px solid #1E293B", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
<div style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>
              © 2026 SparkBid. All rights reserved.
</div>
<div style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>
              The AI-powered marketplace for electrical contractor bidding.
</div>
</div>
</div>
</footer>
</div>
  );
}
