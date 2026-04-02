const demoForm = document.getElementById("demoForm");
const resultCard = document.getElementById("resultCard");

demoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  resultCard.classList.add("result-success");
  resultCard.innerHTML = `
    <div class="panel-top">
      <h3>Analyse de la simulation</h3>
      <span class="badge green">Compris</span>
    </div>

    <div class="risk-list">
      <div class="risk-item">
        <span>01</span>
        <div>
          <strong>Le design ne prouve rien</strong>
          <p>Une interface premium peut être copiée très facilement.</p>
        </div>
      </div>

      <div class="risk-item">
        <span>02</span>
        <div>
          <strong>Les mots “sécurisé” rassurent</strong>
          <p>Mais ils ne garantissent pas l’authenticité du site.</p>
        </div>
      </div>

      <div class="risk-item">
        <span>03</span>
        <div>
          <strong>La vraie alerte, c’est la demande de données</strong>
          <p>Identifiants, mots de passe, codes SMS ou validation urgente.</p>
        </div>
      </div>

      <div class="risk-item">
        <span>04</span>
        <div>
          <strong>Le bon réflexe</strong>
          <p>Fermer la page, vérifier l’URL officielle et contacter le vrai service.</p>
        </div>
      </div>
    </div>
  `;
});
