"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">✅</div>
        <h3
          className="text-2xl font-black text-[#1C1C1E] mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Message Received!
        </h3>
        <p className="text-[#6B7280]">
          Our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h3
        className="text-lg font-black text-[#1C1C1E] mb-6"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Get a Free Quote
      </h3>

      <div>
        <label className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">
          Full Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">
            Email *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            type="email"
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
            placeholder="(416) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">
          Project Type
        </label>
        <select
          {...register("projectType")}
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          <option>Commercial Construction</option>
          <option>Residential Construction</option>
          <option>Renovation</option>
          <option>Office Fit-Out</option>
          <option>Project Management</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1C1C1E] mb-1.5">
          Project Details *
        </label>
        <textarea
          {...register("message", { required: "Please describe your project" })}
          rows={4}
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
          placeholder="Describe your project, location, timeline, and budget range..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] disabled:opacity-60 transition-colors"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
