import { hero, quick } from '../data/content';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <span className="kicker">{hero.kicker}</span>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <a href="#" className="btn">{hero.cta} →</a>
      </div>
      <div className="quick">
        {quick.map((q) => (
          <a href="#" key={q.label}><span>{q.icon}</span>{q.label}</a>
        ))}
      </div>
    </section>
  );
}
