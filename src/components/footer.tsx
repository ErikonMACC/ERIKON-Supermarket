const Footer = () => {
    return (
        <footer className="p-4">
        <div className="container mx-auto grid grid-cols-12 flex items-center gap-4 footer">
          <img src="../src/images/logo.png" alt="Logo" className="h-15" />
          <p className="w-80">© Copyright Erik Machado Lopes</p>
          <a id="itemButton" href="https://github.com/ErikonMACC/Project-ERIKON-Supermarket"><img src="../src/images/gitHubIcon.svg" alt="" /></a>
        </div>
      </footer>
    )
};

export default Footer;