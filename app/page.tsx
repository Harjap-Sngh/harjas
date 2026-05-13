import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Image from "next/image";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/Flux_Dev_Design_a_modern_clean_and_creative_logo_for_a_company_1.jpeg"
              alt="HarJas Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            HarJas Resto
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Delicious home-cooked Punjabi meals delivered daily
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Menu
          </h2>
          <Menu />
        </div>
        <p className="text-center text-gray-700 italic mt-12 text-lg">
          Give us a call to discover delightful surprise add-ons—absolutely free
          for a limited time!. We&apos;re also happy to personalize your tiffin just
          the way you like it.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About HarJas
              </h2>
              <p className="text-lg text-gray-600">
                HarJas is a local tiffin service providing healthy, home-cooked
                Punjabi meals daily. We use fresh ingredients and deliver with
                love — just like home.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/Flux_Dev_Design_a_modern_clean_and_creative_logo_for_a_company_1.jpeg"
                alt="About HarJas"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📞</span> Phone
                </h3>
                <a
                  href="tel:+14034949001"
                  className="text-gray-600 hover:text-orange-600 flex items-center gap-2"
                >
                  +1 (403)-494-9001
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✉️</span> Email
                </h3>
                <a
                  href="mailto:harjasresto@gmail.com"
                  className="text-gray-600 hover:text-orange-600 flex items-center gap-2"
                >
                  harjasresto@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Social Media
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://instagram.com/harjas.resto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-orange-600 flex items-center gap-2"
                  >
                    Instagram: @harjas.resto
                  </a>
                  <a
                    href="https://tiktok.com/@harjas.resto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-orange-600 flex items-center gap-2"
                  >
                    TikTok: @harjas.resto
                  </a>
                  <a
                    href="https://wa.me/14034949001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 flex items-center gap-2"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HarJas</h3>
              <p className="text-gray-400">
                Delicious home-cooked Punjabi meals delivered daily.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-gray-400 hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +1 (403)-494-9001</li>
                <li>Email: harjasresto@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HarJas Tiffin Service. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
