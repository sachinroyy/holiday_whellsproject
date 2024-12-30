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
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  },
];

const Country = () => {
  return (
     <section id="country">
      {/* Country Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 w-[80%]  pl-[20%]  justify-center ">
        {countries.map((country) => (
          <CountryCard key={country.name} flag={country.flag} name={country.name} />
        ))}
      </div>
      </section>
  );
};

export default Country;
