import React from "react";
import "../styles/pages/notFound/notFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="main-error">
      <h1>404</h1>
      <p className="info-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"}>
        <p className="info-link">Retourner sur la page d’accueil</p>
      </Link>
    </main>
  );
}
