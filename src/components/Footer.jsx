import { useState } from 'react';
import { footer } from '../data/content';

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="footer">
      <div className="news">
        <h2>Get the latest from the Crossroads</h2>
        {done ? <p>Thanks for subscribing! ✨</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="email" required placeholder="Your email address" />
            <button className="btn">Sign Up</button>
          </form>
        )}
      </div>
      <div className="cols">
        <div><a href="#" className="logo">TIMES<span>SQUARE</span></a><p className="muted">Times Square, Manhattan, New York, NY</p></div>
        {footer.map((c) => (
          <div key={c.h}><h4>{c.h}</h4>{c.l.map((l) => <a href="#" key={l}>{l}</a>)}</div>
        ))}
      </div>
      <div className="legal">© {new Date().getFullYear()} Times Square Clone (UI demo) · Privacy · Terms · 📸 ▶ 𝕏 f</div>
    </footer>
  );
}
