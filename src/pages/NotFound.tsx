import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="page page--narrow notFound">
      <p className="eyebrow">404</p>
      <h1>This path grew over</h1>
      <p className="lead">
        We couldn’t find that page. Try the timeline or head back to the start.
      </p>
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/timeline">View the timeline</Link>
        <Link className="btn btn--ghost" to="/">Back to home</Link>
      </div>
    </div>
  );
}
