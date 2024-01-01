import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  const setTheme = useUpdateTheme();
  console.log("footer");

  return (
    <footer>
      <div>Footer</div>
    </footer>
  );
};

export default Footer;
