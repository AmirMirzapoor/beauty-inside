"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaLock, FaUser, FaSpinner } from "react-icons/fa";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // شبیه‌سازی تاخیر شبکه
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (username === "admin" && password === "123456") {
      // ✅ استفاده از js-cookie برای ست کردن کوکی
      // expires: 1 یعنی انقضا پس از ۱ روز
      Cookies.set("auth_token", "valid_token_123", { expires: 1, path: "/" });
      
      router.push("/dashboard");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Login Background"
          fill
          className="object-cover opacity-10 blur-sm"
        />
      </div>

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl relative z-10 border border-white/50 backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-green-dark mb-2">خوش آمدید</h1>
          <p className="text-gray-500 text-sm">پنل مدیریت متخصصان زیبایی</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 block">نام کاربری</label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all text-left"
                placeholder="admin"
              />
              <FaUser className="absolute right-4 top-3.5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 block">رمز عبور</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all text-left"
                placeholder="••••••"
              />
              <FaLock className="absolute right-4 top-3.5 text-gray-400" />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-pink/40 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin" />
                در حال ورود...
              </>
            ) : (
              "ورود به حساب کاربری"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            نام کاربری: <b>admin</b> | رمز عبور: <b>123456</b>
          </p>
        </div>
      </div>
    </div>
  );
}