const DEFAULT_TEXTS = [
    {
        id: 1,
        content: "voici un texte a dactylographier sans caractere complique",
        level: "facile",
    },
    {
        id: 2,
        content: "et voila que nous apprenons tous a taper sur un clavier",
        level: "facile",
    },
    {
        id: 3,
        content: "Si c'est ça être sage, alors je préfère rester un idiot pour le restant de mes jours !",
        level: "moyen",
    },
    {
        id: 4,
        content:
            "J'étais devenu une relique du passé qu'ils souhaitaient tous voir disparaître.Jeune, je me suis demandé pourquoi j'existais.",
        level: "moyen",
    },
    {
        id: 5,
        content:
            "Les gens vivent en s'appuyant sur leurs convictions et leurs connaissances et ils appellent ça la réalité: mais le savoir et la compréhension sont des concepts si ambigus que cette réalité ne pourrait être alors qu'une illusion.",
        level: "difficile",
    },
    {
        id: 6,
        content:
            "C'est vrai... Dans le monde des ninjas, ceux qui ne respectent pas les règles et transgressent les lois...Sont considérés comme des moins- querien.Mais...Ceux qui ne pensent pas à leurs compagnons...Sont encore pires.",
        level: "difficile",
    },
];
const randomText = (difficulty) => {
    let filteredText = DEFAULT_TEXTS.filter(element => element.level == difficulty);
    return filteredText[Math.floor(Math.random() * filteredText.length)].content;
      
}
export {randomText};