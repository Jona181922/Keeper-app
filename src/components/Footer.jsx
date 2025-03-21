import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Keeper App. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;