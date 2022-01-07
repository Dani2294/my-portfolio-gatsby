import * as React from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import { IconContext } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  /* 
  const footerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const bodyScrollVal = document.body.scrollHeight;
      const footerOffsetTopVal = footerRef.current?.offsetTop;

      if (footerOffsetTopVal > bodyScrollVal - footerOffsetTopVal) {
        footerRef.current?.classList.remove("opacity-0");
      } else {
        footerRef.current?.classList.add("opacity-0");
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);
  console.log(footerRef.current); */
  return (
    <IconContext.Provider
      value={{
        size: "1.5em",
      }}
    >
      <footer id="contact" /* ref={footerRef} */ className="mt-auto w-full">
        <Container>
          <div className="bg-var-very-dark-blue rounded-t-xl p-4">
            <p className="sub-heading clamp-5">Get in touch</p>
            <h2 className="font-heading clamp-2 font-semibold text-var-off-white mb-7">
              Contact Me
            </h2>
            <div className="mb-14">
              <p className="text-var-off-white clamp-4 mb-4 max-w-lg">
                Ready to talk with me? Click on one of the buttons listed bellow
                to send me an email or a message on my socials:
              </p>
              <div className="contact-links flex items-center space-x-5">
                <a
                  href="mailto:agbato.dani@gmail.com"
                  className="border-2 border-var-off-white hover:border-var-secondary rounded-lg p-2 group cursor-pointer"
                >
                  <MdAlternateEmail className="text-var-off-white group-hover:text-var-secondary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-agbato-06981b121/"
                  className="border-2 border-var-off-white hover:border-var-secondary rounded-lg p-2 group cursor-pointer"
                >
                  <SiLinkedin className="text-var-off-white group-hover:text-var-secondary" />
                </a>
              </div>
            </div>

            <p className="text-center text-var-off-white clamp-5">
              Copyright &copy; {new Date().getFullYear()} | Designed and build
              w/ 🧡 by Daniel Agbato
            </p>
          </div>
        </Container>
      </footer>
    </IconContext.Provider>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;