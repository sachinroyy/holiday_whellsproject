import React from "react";

// Define props interface
interface ServiceCardProps {
  flag: string; // URL for the flag image
  name: string; // Name of the country
}

const ServiceCard: React.FC<ServiceCardProps> = ({ flag, name }) => {
  return (
    <div className="text-center p-6 bg-[#80C3FD] rounded-lg shadow-md hover:bg-slate-400">
      <img
        src={flag}
        alt={`${name} Flag`}
        className="w-40 h-24 mx-auto mb-4"
      />
      <h3 className="text-3xl font-semibold">{name}</h3>
    </div>
  );
};

export default ServiceCard;
