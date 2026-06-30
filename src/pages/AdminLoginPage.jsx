import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getBlogAdminSession, loginToBlogAdmin } from "../data/blog";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [checking, setChecking] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getBlogAdminSession()
      .then((authenticated) => {
        if (!active) {
          return;
        }

        if (authenticated) {
          navigate("/admin/blog", { replace: true });
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        if (active) {
          setChecking(false);
        }
      });

    return () => {
      active = false;
    };
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const authenticated = await loginToBlogAdmin(password);

      if (authenticated) {
        navigate("/admin/blog", { replace: true });
      } else {
        setError("The password was not accepted.");
      }
    } catch (loginError) {
      setError(
        loginError.message ||
          "Admin login is not available. Confirm the Hostinger Node.js app is configured.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Admin Login | Riverflow Laser"
        description="Riverflow Laser admin login"
        canonicalPath="/admin/login"
        robots="noindex, nofollow"
      />

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-lg border border-accent/20 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Admin Login
            </h1>
            {/* <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign in to upload and maintain blog posts.
            </p> */}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label>
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={checking || submitting}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary disabled:opacity-70"
                  autoComplete="current-password"
                />
              </label>

              {error ? (
                <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={checking || submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
              >
                <i className="fa-solid fa-right-to-bracket text-xs" aria-hidden="true"></i>
                {submitting ? "Signing in..." : "Login"}
              </button>
            </form>

            <Link
              to="/"
              className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-secondary"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
