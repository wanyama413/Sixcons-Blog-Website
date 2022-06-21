import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <span
        style={{ opacity: visible ? "1" : "0" }}
        className="scroll-to-top"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowAltCircleUp}></FontAwesomeIcon>
      </span>
    </>
  );
}

