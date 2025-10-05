import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  const sendWhatsApp = () => {
    const phone = "94761234567"; 
    const message = `Hi, I want to book a room.
Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}
Room Type: ${roomType}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-orange-50 py-12 px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Contact & Booking</h1>

    
      <div className="mb-10 text-center">
        <p>📞 Phone: +94 76 123 4567</p>
        <p>📧 Email: info@royal.com</p>
        <p>📍 Address:Colombo , Sri Lanka</p>
      </div>

     
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-3 border rounded"  value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" className="w-full p-2 mb-3 border rounded"  value={checkIn} onChange={(e) => setCheckIn(e.target.value)}  />
        <input type="date" className="w-full p-2 mb-3 border rounded"   value={checkOut}  onChange={(e) => setCheckOut(e.target.value)}  />

        <select  className="w-full p-2 mb-3 border rounded"   value={roomType}  onChange={(e) => setRoomType(e.target.value)}  >
          <option value="">Select Room Type</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Suite Room">Suite Room</option>
          <option value="Standard Room">Standard Room</option>
        </select>

        <button
          onClick={sendWhatsApp}
          className="w-full bg-amber-900 text-white py-2 rounded hover:bg-amber-700"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Contact;
