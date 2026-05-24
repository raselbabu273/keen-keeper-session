import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 text-center">
        
        {/* Emoji Icon */}
        <div className="flex justify-center text-6xl text-[#244D3F] mb-4"><BsFillRocketTakeoffFill /></div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#244D3F]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-3 text-base md:text-lg leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Home Button */}
        <Link to="/">
          <button className="mt-8 px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;