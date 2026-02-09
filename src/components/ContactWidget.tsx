'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, X } from 'lucide-react';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = ['9945470269', '9986122719'];
  const whatsappNumber = '919945470269';
  const googleMapsUrl = 'https://maps.google.com/?q=2nd+Floor+Vishnu+Complex,+Vijayapur,+Karnataka';
  const email = 'aicesbjp@gmail.com';

  const handlePhone = () => {
    window.open(`tel:${phoneNumbers[0]}`);
  };

  const handleWhatsApp = () => {
    window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, '_blank');
  };

  const handleGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${email}`);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all"
        title="Open contact options"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <button
        onClick={handlePhone}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        title="Call us"
      >
        <Phone size={24} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        title="WhatsApp us"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.9 1.24l-.353.202-.363-.118-.122-3.562.682-2.165A9.846 9.846 0 0112.6 0c5.487 0 9.854 4.467 9.854 9.954 0 1.93-.482 3.797-1.422 5.478l-.619 1.045.084.441 1.197 3.935-.504.162-3.996-1.205-.44.084-1.038.619c-1.676.94-3.548 1.423-5.48 1.423-5.487 0-9.854-4.467-9.854-9.954a9.87 9.87 0 011.24-4.9l.202-.353-.118-.363L1.832 6.277z" />
        </svg>
      </button>

      {/* Google Maps Button */}
      <button
        onClick={handleGoogleMaps}
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        title="View location"
      >
        <MapPin size={24} />
      </button>

      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        title="Close"
      >
        <X size={24} />
      </button>
    </div>
  );
}
