const Footer = () => {
  return (
    <footer className="w-full absolute   bottom-0  bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.
          </p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2">
              Hakkımızda
            </a>
            <a href="#" className="mx-2">
              İletişim
            </a>
            <a href="#" className="mx-2">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
