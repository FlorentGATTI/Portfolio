import React, { useEffect, useState, useCallback, useMemo } from "react";
import Hero from "./components/Hero";
import Specializing from "./components/Specializing";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { LegalModal } from "./components/LegalModal";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";

const App = () => {
  const [modalContent, setModalContent] = useState(null);

  const modalContents = useMemo(
    () => ({
      mentions: {
        title: "Mentions Légales",
        content: (
          <div className="modal-content-section">
            <div className="content-group">
              <h4>Éditeur du site</h4>
              <p>Florent GATTI</p>
              <p>Auto-entrepreneur</p>
              <p>Email : flogatti@orange.fr</p>
            </div>

            <div className="content-group">
              <h4>Hébergement</h4>
              <p>OVH SAS</p>
              <p>2 rue Kellermann - BP 80157</p>
              <p>59053 ROUBAIX CEDEX 1</p>
              <p>Téléphone : 1007</p>
            </div>

            <div className="content-group">
              <h4>Propriété intellectuelle</h4>
              <p>L'ensemble des éléments de ce site (textes, images, logos, code source) est la propriété exclusive de Florent GATTI ou fait l'objet d'une autorisation d'utilisation. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation expresse préalable.</p>
            </div>

            <div className="content-group">
              <h4>Crédits</h4>
              <p>Conception et développement : Florent GATTI</p>
            </div>
          </div>
        ),
      },
      politique: {
        title: "Politique de Confidentialité",
        content: (
          <div className="modal-content-section">
            <div className="content-group">
              <h4>1. Collecte des données</h4>
              <p>Ce site ne collecte aucune donnée personnelle des visiteurs. Il n'utilise pas de formulaire de contact ni de système d'inscription.</p>
            </div>

            <div className="content-group">
              <h4>2. Cookies</h4>
              <p>Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Aucun cookie publicitaire ou de traçage n'est utilisé.</p>
            </div>

            <div className="content-group">
              <h4>3. Hébergeur</h4>
              <p>Les services d'hébergement sont fournis par OVH SAS qui peut collecter des logs de connexion (adresse IP, navigateur utilisé, etc.) conformément à sa propre politique de confidentialité.</p>
            </div>

            <div className="content-group">
              <h4>4. Vos droits</h4>
              <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données :</p>
              <ul>
                <li>Droit d'accès et de portabilité</li>
                <li>Droit de rectification et de suppression</li>
                <li>Droit d'opposition et de limitation du traitement</li>
              </ul>
              <p>Pour exercer ces droits ou pour toute question, contactez-moi à : flogatti@orange.fr</p>
            </div>

            <div className="content-group">
              <h4>5. Modifications</h4>
              <p>Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour est le 20/11/2024.</p>
            </div>
          </div>
        ),
      },
    }),
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (modalContent) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [modalContent]);

  const handleOpenModal = useCallback(
    (type) => {
      setModalContent(modalContents[type]);
    },
    [modalContents]
  );

  const handleCloseModal = useCallback(() => {
    setModalContent(null);
  }, []);

  return (
    <div className="app">
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer onOpenModal={handleOpenModal} />
      <LegalModal isOpen={!!modalContent} onClose={handleCloseModal} title={modalContent?.title} content={modalContent?.content} />
    </div>
  );
};

export default App;
