import "./styles/App.css";
import React from "react";

function App() {

  interface Classement {
    participant: string;
    dateDepart: number;
    dateArrivee: number;
  }

//   class NewClassement implements Classement {
//     Participant: string;
//     Resultat: number;
  

//   constructor(Participant: string, Resultat: number) {
//     this.Participant = participant
//     this.Resultat = dateArrivee - dateDepart
//   }
// }

  interface NewClassement extends Classement {
    Participant: string;
    Resultat: number;
  }
  
  const classement: Classement[] =  [
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

  const calculateRunningTime = classement.map(
    (result: NewClassement) =>
      (result = {
        Participant: result.participant,
        Resultat: result.dateArrivee - result.dateDepart,
        participant: result.participant,
        dateDepart: result.dateDepart,
        dateArrivee: result.dateArrivee,
      })
  );

  return (
    <div className="App">
      <div className="conteneur">
        <h1 className="titreConteneur">Classement :</h1>
        {calculateRunningTime
          .sort((a: NewClassement, b: NewClassement) =>
            a.Resultat > b.Resultat ? 1 : a.Resultat < b.Resultat ? -1 : 0
          )
          .map((result: NewClassement) => (
            <div className="participant" key={result.participant}>
              <h1 className="nomParticipant">{result.participant}</h1>
              <h2 className="resultatParticipant">
                <em>Résultat :</em> <mark>{result.Resultat}</mark>
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
