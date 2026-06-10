import type { ReactNode } from "react";
import { useState } from "react";
import { Coffee, MapPin, Clock, Phone, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logoImage from "../imports/LOGO.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="Toko Kopi Kalcer Logo" className="h-16" />
              <span className="text-xl font-bold text-[#0048a8]">Toko Kopi Kalcer</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#beranda" className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Beranda
              </a>
              <a href="#tentang" className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Tentang
              </a>
              <a href="#menu" className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Menu
              </a>
              <a href="#galeri" className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Galeri
              </a>
              <a href="#kontak" className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Kontak
              </a>
            </div>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg border border-gray-200 text-[#0048a8] hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="md:hidden bg-white/95 border-t border-gray-200 shadow-sm">
            <div className="flex flex-col gap-3 px-4 py-4">
              <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Beranda
              </a>
              <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Tentang
              </a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Menu
              </a>
              <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Galeri
              </a>
              <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#0048a8] hover:text-[#003d8f] transition-colors">
                Kontak
              </a>
            </div>
          </div>
        ) : null}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1765134948935-b28cf6d7d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Toko Kopi Kalcer Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0048a8]/80 via-[#0048a8]/60 to-white"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Toko Kopi Kalcer</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Kopi Asli Yogyakarta, Citarasa Istimewa</p>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">Nikmati pengalaman kopi terbaik di jantung Yogyakarta. Setiap cangkir diseduh dengan passion dan keahlian untuk menciptakan momen sempurna Anda.</p>
          <a href="#menu" className="inline-block bg-white text-[#0048a8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Lihat Menu Kami
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0048a8] mb-6">Tentang Kami</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Toko Kopi Kalcer adalah destinasi utama bagi pecinta kopi di Yogyakarta. Kami berkomitmen untuk menyajikan kopi berkualitas tinggi yang dipilih dengan cermat dari berbagai perkebunan terbaik di Indonesia.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dengan suasana yang hangat dan nyaman, kami menciptakan ruang di mana Anda dapat menikmati setiap tegukan kopi sambil bersantai atau bekerja. Barista kami yang berpengalaman siap melayani Anda dengan senyuman.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-[#0048a8] rounded-lg p-4 text-center bg-white shadow-sm">
                  <div className="text-3xl font-bold text-[#0048a8]">100%</div>
                  <div className="text-gray-600 text-sm mt-1">Biji Kopi Pilihan</div>
                </div>
                <div className="border-2 border-[#0048a8] rounded-lg p-4 text-center bg-white shadow-sm">
                  <div className="text-3xl font-bold text-[#0048a8]">5+</div>
                  <div className="text-gray-600 text-sm mt-1">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback src="https://images.unsplash.com/photo-1631270275227-0abd3ad56b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Barista Toko Kopi Kalcer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0048a8] mb-4">Menu Favorit Kami</h2>
            <p className="text-gray-600 text-lg">Pilihan kopi terbaik yang diseduh dengan sempurna</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <MenuCard image="https://images.unsplash.com/photo-1559001724-fbad036dbc9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Cappuccino" description="Espresso dengan foam susu yang lembut dan creamy" price="25.000" />
            <MenuCard image="https://images.unsplash.com/photo-1507133750040-4a8f57021571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Latte" description="Kombinasi sempurna espresso dengan steamed milk" price="28.000" />
            <MenuCard
              image="https://images.unsplash.com/photo-1670404161009-29548c027d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              title="Cold Brew"
              description="Kopi dingin yang diseduh selama 12 jam untuk rasa yang smooth"
              price="30.000"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeri" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0048a8] mb-4">Galeri Kami</h2>
            <p className="text-gray-600 text-lg">Lihat suasana dan kopi kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Biji Kopi Premium"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708792083117-52286bee89f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Suasana Kafe"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Biji Kopi Arabica"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden md:col-span-2 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748179951577-a8bb08ef3838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Interior Kafe"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631779109060-196aa24cc187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Coffee Truck"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0048a8] mb-4">Kunjungi Kami</h2>
            <p className="text-gray-600 text-lg">Kami menunggu kedatangan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard icon={<MapPin size={32} />} title="Alamat" content="Jl. Teratai III, Perumnas Condong Catur, Condongcatur, Kec. Depok, Kabupaten Sleman" />
            <ContactCard icon={<Clock size={32} />} title="Jam Buka" content="Senin - Minggu: 08.00 - 00.00 WIB" />
            <ContactCard icon={<Phone size={32} />} title="Kontak" content="+62 274 123 4567" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0048a8] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center gap-3">
              <img src={logoImage} alt="Toko Kopi Kalcer Logo" className="h-12 brightness-0 invert" />
              <span className="text-xl font-bold text-white">Toko Kopi Kalcer Yogyakarta</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
              <a href="https://www.instagram.com/tokcerykc/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="https://www.tiktok.com/@tokcerykc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                TikTok
              </a>
            </div>
          </div>
          <p className="text-white/80 text-sm">© 2026 Toko Kopi Kalcer. Semua hak dilindungi undang-undang.</p>
        </div>
      </footer>
    </div>
  );
}

function MenuCard({ image, title, description, price }: { image: string; title: string; description: string; price: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#0048a8] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0048a8] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-2xl font-bold text-[#0048a8]">Rp {price}</div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content }: { icon: ReactNode; title: string; content: string }) {
  return (
    <div className="bg-gradient-to-br from-[#0048a8] to-[#0056c7] rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
      <div className="text-white mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{content}</p>
    </div>
  );
}
