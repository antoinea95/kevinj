import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";

// import assets
import burger from "../images/assets/burger.svg";
import burgerWhite from "../images/assets/burgerwhite.svg";
import close from "../images/assets/close.svg";
import closeWhite from "../images/assets/close-white.svg";
import logo from "../images/assets/logo.svg";
import logoBlack from "../images/assets/logo-black.svg";

export default function Header() {
  let location = window.location.pathname;

  // animation when rendered
  useEffect(() => {
    gsap.fromTo(
      ".nav",
      {
        opacity: 0,
        width: "0%",
      },
      {
        opacity: 1,
        width: "80%",
        delay: 0,
        duration: 0.7,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".header--logo",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0,
        duration: 0.5,
      }
    );
  }, []);

  function handleBurger() {
    let navList = document.querySelector(".nav--list");
    let btnBurger = document.querySelector(".nav--burger");
    let btnClose = document.querySelector(".nav--burger__close")
    navList.classList.toggle("nav--list__active");
    btnBurger.classList.toggle("nav--burger__open");
    btnClose.classList.toggle("close");
  }

  return (
    <>
      <header className={location === "/" ? "header" : " header header--white"}>
        <div className="header--logo">
          <Link aria-label="Retour vers la page d'accueil" to={`/`}>
            {location === "/" ? (
              <img src={logo} alt="Logo de Kevin Jacquet" />
            ) : (
              <img src={logoBlack} alt="Logo de Kevin Jacquet" />
            )}
          </Link>
        </div>
        <nav className="nav">
          <button className="nav--burger" onClick={handleBurger}>
            {location === "/" ? (
              <img src={burgerWhite} alt="afficher le menu" />
            ) : (
              <img src={burger} alt="afficher le menu" />
            )}
          </button>
          <button className="nav--burger__close" onClick={handleBurger}>
          {location === "/" ? (
              <img src={closeWhite} alt="afficher le menu" />
            ) : (
              <img src={close} alt="afficher le menu" />
            )}
          </button>

          <ul
            className={
              location === "/"
                ? "nav--list nav--list__white"
                : "nav--list nav--list__black"
            }
          >
            <Link aria-label="Lien vers contenu immobilier" to={`/immobilier`}>
              <li>Immobilier</li>
            </Link>

            <Link
              aria-label="Lien vers la page photographie"
              to={`/photographie`}
            >
              <li>Photographie</li>
            </Link>

            <Link aria-label="Lien vers la page vidéo" to={`/video`}>
              <li>Vidéo</li>
            </Link>

            <Link aria-label="Lien vers la page contact" to={`/contact`}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
