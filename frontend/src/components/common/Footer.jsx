// src/components/common/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} TravelVista. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
