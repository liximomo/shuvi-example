import { Link } from "@shuvi/app";

function HomePage() {
  return (
    <div>
      <p>Welcome to shuvi!</p>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

export default HomePage;
