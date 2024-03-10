import { Link } from "react-router-dom";

export default function NotFoundPages() {
  return (
    <div>
      <b>Oops! Not found!</b>
      <Link to="/">Back to home page!</Link>
    </div>
  );
}
  