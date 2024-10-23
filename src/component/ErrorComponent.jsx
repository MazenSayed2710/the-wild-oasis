import { FaArrowLeftLong } from "react-icons/fa6";
function ErrorComponent({ error }) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-12">
        <p className="text-3xl font-bold text-gray-800">
          The page you are looking for could not be found 😢
        </p>
        {error && (
          <p className="mt-2 font-semibold text-gray-800">{error.message}</p>
        )}
        <button
          className="mt-10 flex items-center gap-3 rounded-lg bg-violet-500 px-5 py-3 font-semibold text-gray-100"
          onClick={() => window.location.replace("/")}
        >
          <FaArrowLeftLong />
          <span>Go back</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorComponent;
