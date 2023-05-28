function getSeventhDayOfMonth(month, i) {
  // Créer une nouvelle date au premier jour du mois donné
  const date = new Date(`2023-${month}-01`);
  console.log(`2023-${month}-01`, "ow");

  // Obtenir le jour de la semaine du premier jour du mois (0 = dimanche, 1 = lundi, etc.)
  const firstDayOfWeek = date.getDay();
  console.log(firstDayOfWeek, "ok");

  // Calculer le nombre de jours à ajouter pour atteindre le i-ème septième jour du mois
  const daysToAdd = (i - 1) * 7 + (7 - firstDayOfWeek);

  // Ajouter les jours nécessaires à la date

  date.setDate(daysToAdd);

  // Retourner la date sous forme de chaîne de caractères (par exemple, "2023-09-14")
  return date.toISOString().slice(0, 10);
}
function getDayName(dateString) {
  // Créer une nouvelle date à partir de la chaîne de caractères de la date donnée
  const date = new Date(dateString);

  // Utiliser toLocaleDateString() avec l'option "weekday" pour obtenir le nom du jour de la semaine
  const options = { weekday: "long" };
  const dayName = date.toLocaleDateString("fr-FR", options);

  // Retourner le nom du jour de la semaine
  return dayName;
}
console.log(getDayName(getSeventhDayOfMonth(5, 1)));
console.log(getSeventhDayOfMonth(5, 1));
