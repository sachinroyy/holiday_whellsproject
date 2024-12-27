import CountryCard from "./Servicecard";

const countries = [
  {
    name: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  },
  {
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "New Zealand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  },
  {
    name: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
  },
  {
    name: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  },
];

const Services = () => {
    return (
        <section id="service">
      <div className="container mx-auto px-4 py-12 w-[80%]">
        <h2 className="text-4xl font-bold text-center mb-12 ">Our Services</h2>
  
       {/* Visa Cards Section */}
<div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
  {/* Study Visa Card */}
  <div className="p-6 bg-[#4290EC] shadow-lg rounded-lg flex flex-col min-h-[400px]">
    <h3 className="text-2xl font-semibold mb-4 justify-center flex text-black">Study Visa</h3>
    <p className="text-black mb-4 flex-grow">
    A study visa allows individuals to travel to a foreign country to pursue education at a recognized institution. It is typically valid for the duration of the course and may include permissions for part-time work. To apply, students need an admission letter, proof of funds, language proficiency, a valid passport, and sometimes medical insurance or biometrics. 
    </p>

    <a href="#booking"  className="font-bold text-2xl bg-blue-700 text-white rounded-[20px] mt-auto p-2 hover:bg-blue-800 transition justify-center flex">
      Contact Us
    </a>
    
  </div>

  {/* Tourist Visa Card */}
  <div className="p-6 bg-[#4290EC] shadow-lg rounded-lg flex flex-col min-h-[400px]">
    <h3 className="text-2xl font-semibold mb-4 justify-center flex text-black">Tourist Visa</h3>
    <p className="text-black flex-grow">
      A Tourist Visa allows visitors to explore countries like the UK, Australia, and Canada for leisure or sightseeing purposes. The application process generally requires proof of financial stability and a return ticket to your home country.
    </p>
    <a href="#booking"  className="font-bold text-2xl bg-blue-700 text-white rounded-[20px] mt-auto p-2 hover:bg-blue-800 transition justify-center flex">
      Contact Us
    </a>
  </div>

  {/* Business Visa Card */}
  <div className="p-6 bg-[#4290EC] shadow-lg rounded-lg flex flex-col min-h-[400px]">
    <h3 className="text-2xl font-semibold mb-4 justify-center flex text-black">Business Visa</h3>
    <p className="text-black flex-grow">
      A Business Visa is for individuals wishing to conduct business activities such as meetings, conferences, and short-term work opportunities. Applicants need to demonstrate a clear business purpose and proof of financial support.
    </p>
    <a href="#booking"  className="font-bold text-2xl bg-blue-700 text-white rounded-[20px] mt-auto p-2 hover:bg-blue-800 transition justify-center flex ">
      Contact Us
    </a>
  </div>
</div>

  
        {/* Country Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <CountryCard key={country.name} flag={country.flag} name={country.name} />
          ))}
        </div>
      </div>
      </section>
    );
  };
  
  export default Services;