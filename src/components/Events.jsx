import { events } from '../data/content';

export default function Events() {
  return (
    <section className="events">
      <div className="section">
        <div className="row"><h2>Upcoming Events</h2><a href="#" className="link">Full calendar →</a></div>
        <ul>
          {events.map((e) => (
            <li key={e.title}>
              <div className="date"><b>{e.d}</b>{e.m}</div>
              <div><h3>{e.title}</h3><p>{e.where}</p></div>
              <a href="#" className="btn small">Details</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
