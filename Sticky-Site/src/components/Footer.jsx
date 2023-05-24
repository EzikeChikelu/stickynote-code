const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <b>
        <p>Copyright @ {currYear}</p>
      </b>
    </footer>
  );
}

export default Footer;
