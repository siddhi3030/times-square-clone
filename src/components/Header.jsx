import { useState } from 'react';
import { nav } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  return (
    <header className="header">
      <div className="topbar">
        <span>🌐 EN</span><a href="#">Press</a><a href="#">Partners</a><a href="#">Contact</a>
      </div>
      <div className="navbar">
        <a href="#" className="logo">TIMES<span>SQUARE</span></a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {nav.map((n) => (
            <div key={n.label} className="nav-item"
              onMouseEnter={() => setSub(n.label)} onMouseLeave={() => setSub(null)}>
              <a href="#" onClick={(e) => { e.preventDefault(); setSub(sub === n.label ? null : n.label); }}>{n.label} ▾</a>
              {sub === n.label && (
                <ul className="dropdown">{n.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul>
              )}
            </div>
          ))}
        </nav>
        <button className="search" aria-label="Search">🔍</button>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
    </header>
  );
}
