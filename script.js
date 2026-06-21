const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {

    const vagues = Number(document.getElementById("vagues").value);
    const maree = Number(document.getElementById("maree").value);
    const vent = Number(document.getElementById("vent").value);

    const indice = vagues + maree + (vent / 20);

    if (indice < 3) {
        resultat.innerHTML = "🟢 Risque Faible";
    }
    else if (indice < 5) {
        resultat.innerHTML = "🟡 Risque Moyen";
    }
    else if (indice < 7) {
        resultat.innerHTML = "🟠 Risque Élevé";
    }
    else {
        resultat.innerHTML = "🔴 Danger Critique";
    }

});