import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bol">404</h1>
        <p className="text-lg text-gray-700 mt-4">
          Oops!
        </p>
        <Link
          to="/home"
          className="text-green-500 underline"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
