import React, { useState } from "react";

const DropdownEvent = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      toggleDropdown(); // Alterna la visibilidad al presionar la flecha hacia arriba
    }
  };

  // Desestructura las propiedades del objeto 'data'
  const { date, month, title, location, time, detailsLink, ticketLink } = data;

  return (
    <div
      className="w-full max-w-[950px] flex-wrap border border-gray-300 rounded-lg my-5 mx-auto font-sans"
      tabIndex={0} // Permite que el div sea foco
      onKeyDown={handleKeyDown} // Agrega el manejador de eventos
    >
      <div
        onClick={toggleDropdown}
        className="w-full max-w-[900px] cursor-pointer flex items-center p-2 bg-[#DCD7BF] rounded-t-lg"
      >
        <div className="text-lg font-bold text-center w-[50px]">
          <span className="block">{date}</span>
          <span className="block text-sm">{month}</span>
        </div>
        <div className="ml-2 flex-grow">
          <h3 className="m-0 text-base">{title}</h3>
          <p className="m-0 text-xs text-gray-500">{location}</p>
        </div>
        <div className="ml-auto text-lg">{isOpen ? "▲" : "▼"}</div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-[300px]" : "max-h-0"
        } overflow-hidden transition-[max-height] duration-400 ease-in-out bg-white border-t rounded-b-lg`}
      >
        <div className="p-2">
          <div>
            <h4 className="m-0 mb-2 text-sm">DETALLES DEL EVENTO</h4>
            <p className="m-0 mb-2">
              Entradas:{" "}
              <a
                href={detailsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {ticketLink}
              </a>
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="m-0 text-sm">Hora: {time}</p>
            <p className="m-0 text-sm">Lugar: {location}</p>
          </div>
          <div className="mb-2">
            <a href="#" className="text-blue-500 no-underline">
              Agregar a calendario de Google
            </a>
          </div>
          <div>
            <a
              href={detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 no-underline"
            >
              Entradas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownEvent;
