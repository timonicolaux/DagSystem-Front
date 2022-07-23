import "./styles/App.css";
import React from "react";

function App() {
  
  const classement:{participant: string, dateArrivee: number, dateDepart: number}[] =  [
    {
      participant: "Damien Da Silva Bregieiro",
      dateDepart: 1643724000,
      dateArrivee: 1643725713,
    },
    {
      participant: "Thomas Ponthoreau",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
    {
      participant: "Guillem Dardill",
      dateDepart: 1643724000,
      dateArrivee: 1643726269,
    },
    {
      participant: "Amadou NDIAYE",
      dateDepart: 1643724000,
      dateArrivee: 1643724564,
    },
    {
      participant: "Pierre Bague",
      dateDepart: 1643732114,
      dateArrivee: 1643733782,
    },
    {
      participant: "Hugo Prea",
      dateDepart: 1643724000,
      dateArrivee: 1643730981,
    },
    {
      participant: "Jean-Luc Roux",
      dateDepart: 1643724000,
      dateArrivee: 1643726134,
    },
    {
      participant: "Tony Bernard",
      dateDepart: 1643724000,
      dateArrivee: 1643725967,
    },
    {
      participant: "Serge Munnia-Vincent",
      dateDepart: 1643724000,
      dateArrivee: 1643867841,
    },
    {
      participant: "Camille Constant",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
  ];

  const calculateRunningTime:{participant: string, dateArrivee: number}[] = classement.map(
    (result) =>
      (result = {
        participant: result.participant,
        dateArrivee: result.dateArrivee - result.dateDepart,
        dateDepart: result.dateDepart,
      })
  );

  return (
    <div className="App">
      <div className="conteneur">
        <h1 className="titreConteneur">Classement :</h1>
        {calculateRunningTime
          .sort((a, b) =>
            a.dateArrivee > b.dateArrivee ? 1 : a.dateArrivee < b.dateArrivee ? -1 : 0
          )
          .map((result) => (
            <div className="participant" key={result.participant}>
              <h1 className="nomParticipant">{result.participant}</h1>
              <h2 className="resultatParticipant">
                <em>Résultat :</em> <mark>{result.dateArrivee}</mark>
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
