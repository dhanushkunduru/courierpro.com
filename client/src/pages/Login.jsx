import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (
      email === "admin@courierpro.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } else {

      toast.error("Invalid Email or Password");

    }
  };

  return (
    <MainLayout>
      <section className="bg-[linear-gradient(135deg,_#f8fafc_0%,_#f8fbff_100%)] px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">

              <ShieldCheck className="h-4 w-4" />

              Secure Operations Portal

            </div>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              Enterprise Access
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              Sign in to manage shipments, monitor deliveries,
              and access the logistics dashboard.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <Card className="p-8">

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-blue-100 p-3">

                  <Lock className="text-blue-600" />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    Admin Login
                  </h2>

                  <p className="text-slate-500">
                    Enter your credentials
                  </p>

                </div>

              </div>

              <form
                onSubmit={login}
                className="mt-8 space-y-5"
              >

                <div>

                  <label className="mb-2 block font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-xl border p-3"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="admin@courierpro.com"
                    required
                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    className="w-full rounded-xl border p-3"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="admin123"
                    required
                  />

                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Login
                </Button>

              </form>

              <div className="mt-8 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">

                <strong>Demo Credentials</strong>

                <br />

                Email:
                <br />
                admin@courierpro.com

                <br /><br />

                Password:
                <br />
                admin123

              </div>

            </Card>

          </motion.div>

        </div>

      </section>
    </MainLayout>
  );
}