"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

type ServiceOption = "Yard Maintenance" | "Tree Trimming" | "Full Yard Remodel" | "Other";
type TimelineOption = "ASAP" | "1-3 Months" | "Flexible";

export default function QuoteWizard() {
  const [step, setStep] = useState<number>(1);
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [details, setDetails] = useState("");
  const [timeline, setTimeline] = useState<TimelineOption | "">("");
  const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "" });

  const toggleService = (service: ServiceOption) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const nextStep = () => {
    if (step === 1 && services.length === 0) return;
    if (step === 3 && !timeline) return;
    if (step === 4 && (!contact.name || !contact.phone || !contact.email)) return;
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send data to an API
    console.log({ services, details, timeline, contact });
    setStep(5);
  };

  return (
    <section id="quote" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-green-500 tracking-widest uppercase mb-3">Get Started</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Let's Build Your Dream Space
          </h3>
          <p className="mt-4 text-xl text-gray-600">
            Tell us about your project to get a free, no-obligation estimate.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-green-500 z-0 transition-all duration-500 rounded-full" 
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            ></div>
            
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-colors duration-300 ${
                  step >= i ? "bg-green-500 text-white shadow-lg" : "bg-white text-gray-400 border-2 border-gray-200"
                }`}
              >
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
            <span className={step >= 1 ? "text-green-600" : ""}>Services</span>
            <span className={step >= 2 ? "text-green-600" : ""}>Details</span>
            <span className={step >= 3 ? "text-green-600" : ""}>Timeline</span>
            <span className={step >= 4 ? "text-green-600" : ""}>Contact</span>
            <span className={step >= 5 ? "text-green-600" : ""}>Done</span>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[400px]"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Which services do you need?</h4>
                <p className="text-gray-600 mb-8">Select all that apply.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {["Yard Maintenance", "Tree Trimming", "Full Yard Remodel", "Other"].map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleService(service as ServiceOption)}
                      className={`p-6 border-2 rounded-xl text-left font-semibold text-lg transition-all ${
                        services.includes(service as ServiceOption)
                          ? "border-green-500 bg-green-50 text-green-700 shadow-md"
                          : "border-gray-200 hover:border-green-300 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={services.length === 0}
                    className="flex items-center px-8 py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md font-bold text-lg transition-colors shadow-md"
                  >
                    Continue <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your project</h4>
                <p className="text-gray-600 mb-8">Provide any details like specific services needed, rough dimensions, or existing issues. (Optional)</p>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="E.g., I'd like a full yard remodel with new grass and some tree trimming..."
                  className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 outline-none resize-none mb-8 text-gray-800"
                />
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex items-center px-8 py-3 bg-green-500 hover:bg-green-400 text-white rounded-md font-bold text-lg transition-colors shadow-md"
                  >
                    Continue <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">When would you like it done?</h4>
                <div className="flex flex-col gap-4 mb-8">
                  {["ASAP", "1-3 Months", "Flexible"].map((time) => (
                    <button
                      key={time}
                      onClick={() => { setTimeline(time as TimelineOption); nextStep(); }}
                      className={`p-6 border-2 rounded-xl text-left font-semibold text-lg transition-all ${
                        timeline === time
                          ? "border-green-500 bg-green-50 text-green-700 shadow-md"
                          : "border-gray-200 hover:border-green-300 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!timeline}
                    className="flex items-center px-8 py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md font-bold text-lg transition-colors shadow-md"
                  >
                    Continue <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Your Contact Information</h4>
                <form onSubmit={submitForm} className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 outline-none text-gray-800 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 outline-none text-gray-800 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 outline-none text-gray-800 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Address (Optional)</label>
                    <input
                      type="text"
                      value={contact.address}
                      onChange={(e) => setContact({ ...contact, address: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 outline-none text-gray-800 transition-colors"
                    />
                  </div>
                </form>
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={submitForm}
                    disabled={!contact.name || !contact.phone || !contact.email}
                    className="flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md font-bold text-xl transition-colors shadow-xl"
                  >
                    Submit Request
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-16 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h4>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for reaching out. We've received your project details and will get back to you within 24 hours with a free estimate.
                </p>
                <div className="inline-block p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-600 font-medium mb-2">Need immediate assistance?</p>
                  <a href="tel:480-363-6207" className="text-2xl font-bold text-green-600 hover:text-green-500 transition-colors">
                    (480) 363-6207
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
