import { explore } from '../data/content';

export default function Explore() {
  return (
    <section className="section">
      <h2>Explore Times Square</h2>
      <div className="grid4">
        {explore.map((x) => (
          <a href="#" key={x.title} className="tile" style={{ background: `linear-gradient(160deg, ${x.g[0]}, ${x.g[1]})` }}>
            <h3>{x.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
