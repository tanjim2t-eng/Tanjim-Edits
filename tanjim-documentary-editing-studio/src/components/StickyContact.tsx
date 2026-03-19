import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-black/50 transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href="tel:+15551234567"
        className="bg-brand-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg shadow-black/50 transition-transform hover:scale-110 flex items-center justify-center group relative md:hidden"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
