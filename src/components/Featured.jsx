import { featured } from '../data/content';

export default function Featured() {
  return (
    <section className="section">
      <h2>Happening Now</h2>
      <div className="grid3">
        {featured.map((f) => (
          <a href="#" className="card" key={f.title}>
            <div className="card-img" style={{ background: `linear-gradient(135deg, ${f.g[0]}, ${f.g[1]})` }}>
              <span className="tag">{f.tag}</span>
            </div>
            <div className="card-body"><h3>{f.title}</h3><p>{f.text}</p></div>
          </a>
        ))}
      </div>
    </section>
  );
}
