import React, { useState, useEffect } from "react";
import "./style_accueil.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Accueil = () => {
  const [ouv, setouv] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <div class="header">
        <nav class="nav container">
          <a href="#home" class="nav-logo">
            ABSE<span>NCE</span>
          </a>

          <div class={ouv ? "nav-menu show-menu" : "nav-menu"} id="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">
                  A Propos
                </a>
              </li>
              <li class="nav-item">
                <a href="#program" class="nav-link">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a href="#footer" class="nav-link">
                  Contact
                </a>
              </li>
              <div class="nav-close" id="nav-close">
                <p onClick={() => setouv(false)}>
                  <FaTimes />
                </p>
              </div>
            </ul>

            <Link to="/LOGIN" class="nav-button">
              login
            </Link>
          </div>

          <div class="nav-toggle" id="nav-toggle">
            <p onClick={() => setouv(true)}>
              {" "}
              <GiHamburgerMenu />
            </p>
          </div>
        </nav>
      </div>
      <main>
        <section class="hero" id="home">
          <img src="./image/ze.jpg" class="jj" />

          <a href="#login" class="hero-btn-get-started">
            GET STARTED
          </a>
        </section>

        <section class="about container" id="about">
          <div class="about-wrapper">
            <img class="about-image" src="/image/about.jpg" />
            <div class="about-data">
              <h3 class="about-title">STORY ABOUT US</h3>
              <p class="about-description">
                Site web qui fait la gestion des absences et represente pour
                chaque prof son planning et la liste des etudiants associé a
                chaque seance pour faire absence lié a cette seance.
              </p>
              <a href="#read-more" class="about-btn">
                READ MORE
              </a>
            </div>
          </div>
        </section>
        <section class="program container" id="program">
          <h3 class="section-title">OUR Services</h3>
          <span class="section-subtitle"></span>
          <div class="row program-row">
            <div class="col program-card">
              <img class="program-card-image" src="/image/aa.png" alt="" />
              <h4 class="card-title">Gestion Planning</h4>
              <p class="card-description">
                Genrer planning associe a chaque professeur durant le semestre
              </p>
            </div>
            <div class="col program-card">
              <img class="program-card-image" src="/image/bb.png" alt="" />
              <h4 class="card-title">Gestion Absence</h4>
              <p class="card-description">
                Donner au prof acces a remplir absence associe a sa senace.
              </p>
            </div>
            <div class="col program-card">
              <img class="program-card-image" src="/image/cc.png" alt="" />
              <h4 class="card-title">Gestion Etudiant</h4>
              <p class="card-description">
                importer la liste des etudiants sous forme excel des differents
                filiéere de notre cycle d'ingenieur.
              </p>
            </div>
          </div>
        </section>

        <section class="container newsletter">
          <div class="newsletter-card">
            <h3 class="newsletter-title">Commentaire</h3>
            <p class="newsletter-subtitle">Message dédié a l'admin</p>
            <form action="">
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  placeholder="Enter votre message"
                />
                <button class="newsletter-button">Envoyer</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer class="footer" id="footer">
        <div class="container footer-container">
          <div class="footer-row">
            <div class="footer-identity">
              <a href="#home" class="nav-logo">
                ABSE<span>NCE</span>
              </a>
              <p class="footer-description">
                Site web qui fait la gestion des absences et represente pour
                chaque prof son planning et la liste des etudiants associé a
                chaque seance pour faire absence lié a cette seance.
              </p>
            </div>
            <div class="footer-feature">
              <div class="col footer-feature-1">
                <h4 class="footer-feature-title">About</h4>
                <ul class="footer-feature-list">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#term-condition">Terms & Agreements</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h4 class="footer-feature-title">Support</h4>
                <ul class="footer-feature-list">
                  <li>
                    <a href="#faq">Faq</a>
                  </li>
                  <li>
                    <a href="#support">Support Center</a>
                  </li>
                  <li>
                    <a href="#privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h4 class="footer-feature-title">Contact Us</h4>
                <ul class="footer-feature-list">
                  <li>
                    <a href="#gmail">
                      <i class="ri-mail-line"></i>contact.ensak@usms.ma
                    </a>
                  </li>
                  <li>
                    <a href="#address">
                      <i class="ri-map-pin-line"></i>Ecole Nationale des
                      Sciences Appliquées Bd Béni Amir, BP 77
                    </a>
                  </li>
                  <li>
                    <a href="#address">
                      <i class="ri-map-pin-line"></i> 25000 / Khouribga
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">All rights reserved,</div>
        </div>
      </footer>

      <div class="scroll-up" id="scroll-up">
        <a href="#home">
          <i class="ri-arrow-up-line arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Accueil;
