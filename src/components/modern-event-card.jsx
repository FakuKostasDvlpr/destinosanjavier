import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronDown, Ticket, XCircle } from "lucide-react"; // Importar XCircle para mostrar "No disponible"
import { motion, AnimatePresence } from "framer-motion";

export default function RandomDropDown({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { date, month, title, location, provincia, time, detailsLink, disponible } = data;

  // Definir el color de fondo dinámicamente según el estado de "disponible"
  const backgroundClass = disponible
    ? "from-[#c4ca82] to-[#a8ad6c]"
    : "from-[#e5e5e5] to-[#adb5bd]";

  // Construir el enlace dinámico para agregar al calendario de Google
  const generateCalendarLink = () => {
    const eventTitle = encodeURIComponent(title);
    const eventLocation = encodeURIComponent(location);
    const eventDetails = encodeURIComponent(`${title} - ${location}`);
    const eventStartDate = "20241019T003000Z"; // Aquí puedes insertar la fecha de inicio dinámica
    const eventEndDate = "20241019T025000Z";   // Aquí puedes insertar la fecha de finalización dinámica
    const timeZone = "America/Argentina/Buenos_Aires";

    return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${eventTitle}&dates=${eventStartDate}/${eventEndDate}&ctz=${timeZone}&details=${eventDetails}&location=${eventLocation}`;
  };

  return (
    <div className="flex items-center justify-center bg-transparent p-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`relative bg-gradient-to-r ${backgroundClass} p-6 text-white`}>
          <motion.div
            className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full p-1 cursor-pointer"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </motion.div>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">{date}</span>
            <span className="text-2xl ml-2 font-light">{month}</span>
          </div>
          <h2 className="text-2xl font-bold mt-2 leading-tight">{title}</h2>
          <p className="text-lg font-semibold">{provincia}</p>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="p-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-lg">{time}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-lg">{location}</span>
              </div>
              <motion.a
                href={disponible ? generateCalendarLink() : undefined} // Solo establecer href si disponible
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold text-lg mt-4 flex items-center justify-center space-x-2 shadow-lg transform transition-all duration-300 ease-in-out ${
                  disponible ? 'bg-[#8b8f61] text-white' : 'bg-gray-400 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={disponible ? { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" } : {}}
                whileTap={disponible ? { scale: 0.95 } : {}}
              >
                <Calendar className="w-5 h-5" />
                <span>Agregar al Calendario</span>
              </motion.a>

              <motion.button
                className={`w-full py-3 rounded-lg font-semibold text-lg mt-2 flex items-center justify-center space-x-2 shadow-lg transform transition-all duration-300 ease-in-out ${
                  disponible ? 'bg-white text-blue-600' : 'bg-red-100 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={disponible ? { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" } : {}}
                whileTap={disponible ? { scale: 0.95 } : {}}
                disabled={!disponible} // Deshabilitar cuando disponible sea false
              >
                {disponible ? (
                  <>
                    <Ticket className="w-5 h-5" />
                    <a href={detailsLink} target="_blank" rel="noopener noreferrer">Comprar Entradas</a>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-500" /> {/* Icono de "No disponible" */}
                    <span className='text-red-500'>No Disponible</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
