import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log("Registration successful", data);
      // Optionally redirect to login page after successful registration
      // navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen bg-[url(../../Linux-user-Room.png)]">
        <div className="h-screen flex justify-center items-center  from-red-600 to-blue-500">
          <div className="bg-gradient-to-b from-gray-800 to-blue-500 h-150 w-120 rounded-2xl flex justify-center items-center">
            <div className="grid gap-30">
              <p className="text-4xl font-bold text-white flex justify-center items-center pt-30">
                Create your Account
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 pb-40 px-4"
              >
                {error && (
                  <div className="text-red-300 text-center">{error}</div>
                )}
                <input
                  type="email"
                  className="bg-red-100 w-80 h-10 rounded-xl focus:ring-2 placeholder:text-center px-4 py-4"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="bg-red-100 w-80 h-10 rounded-xl placeholder:text-center px-4 py-4"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="text-2xl font-bold flex items-center justify-center pt-10 text-white hover:text-blue-200 disabled:opacity-50 hover:cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <p className="text-white text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/auth" className="underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
