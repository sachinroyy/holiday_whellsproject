
import React, { useState } from "react";
import freeconsult from "../assets/freeconsult.mp4";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbw_FzLBEwzzAu62CwVp0WCWL8lNLi08YkViwTFq_LCJB8pG0QPT0FSgcfWHiM8HKG0Y/exec"; // Replace with your Web App URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          Name: formData.firstName,
          LastName: formData.lastName,
          Email: formData.email,
          Phone: formData.phone,
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      alert("Error submitting the form: " + error.message);
    }
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <h2 className="text-6xl font-bold mb-8 text-center lg:text-left flex justify-center pb-[10px]">
        Book Your Free Consultation now!
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="block">
            <video
              src={freeconsult}
              autoPlay
              loop
              muted
              className="rounded-lg w-full h-auto"
            ></video>
          </div>

          {/* Form Section */}
          <div className="max-w-3xl mx-auto lg:mx-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm; // Ensure this is the default export



/// google form api https://script.google.com/macros/s/AKfycbw_FzLBEwzzAu62CwVp0WCWL8lNLi08YkViwTFq_LCJB8pG0QPT0FSgcfWHiM8HKG0Y/exec