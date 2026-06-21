let message = "";

if (indice < 3) {
    message = `
        <h2>🟢 Risque Faible</h2>
        <p>Aucun danger immédiat détecté.</p>
    `;
}
else if (indice < 5) {
    message = `
        <h2>🟡 Risque Moyen</h2>
        <p>Surveillance recommandée.</p>
    `;
}
else if (indice < 7) {
    message = `
        <h2>🟠 Risque Élevé</h2>
        <p>Des inondations côtières sont possibles.</p>
    `;
}
else {
    message = `
        <h2>🔴 Danger Critique</h2>
        <p>Risque important de dégâts sur le littoral.</p>
    `;
}

resultat.innerHTML = `
    ${message}
    <p><strong>Indice :</strong> ${indice.toFixed(1)}</p>
`;