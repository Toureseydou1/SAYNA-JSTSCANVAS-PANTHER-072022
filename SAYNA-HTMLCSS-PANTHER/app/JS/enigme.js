document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments à animer
    const elements = document.querySelectorAll('.fade-in-slide');
  
    // Fonction pour vérifier si un élément est visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    // Observer chaque élément
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  const enigmes = [
    {
        titre: "Énigme 1",
        description: "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje.",
        contenu: "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
        reponse: "C'est à ce trône peu importe qui monte dessus",
        
        infos: "L'ALPHABET  :A = a ; B = b ; C = c ; D = d ; E = e ; F = f ; G = g ; H = h ; I = i ; J = j ; K = k ; L = l ; M = m ; N = n ; O = o ; P = p ; Q = q ; R = r ; S = s ; T = t ; U = u ; V = v ; W = w ; X = x ; Y = y ; Z = z"
    },
    {
        titre: "Énigme 2",
        description: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase.",
        contenu: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmz.",
        reponse: "Réponse de l'énigme 2",
        infos: " LE SAVIEZ VOUS? Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    },
    {
        titre: "Énigme 3",
        description: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film.",
        contenu: "Quel est ce film ? 01001100 01000101 00100000 01010010 01001111...",
        reponse: "C'est Black Panther.",
        infos: " LE SAVIEZVOUS? Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let currentEnigmeIndex = 0;

    const container = document.getElementById('enigme-container');
    const answerContainer = document.getElementById('answer-container');
    const answerElement = document.getElementById('answer');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');
    const nextButton = document.getElementById('next-button');

    const showEnigme = () => {
        const enigme = enigmes[currentEnigmeIndex];
        container.innerHTML = `
            <h2>${enigme.titre.toUpperCase()}</h2>
            <p class="enigme-description">${enigme.description}</p>
            <p class="enigme-contenu">${enigme.contenu}</p>
            <p class="enigme-infos">${enigme.infos}</p> <!-- Ajout des infos ici -->
            <button id="reveal-answer-button">Révéler la réponse</button>
        `;

        const revealButton = document.getElementById('reveal-answer-button');
        revealButton.addEventListener('click', () => {
            revealAnswer(enigme.reponse);
        });
    };

    const revealAnswer = (answer) => {
        answerElement.textContent = answer;
        answerContainer.style.display = 'block';
        container.style.display = 'none';

        // Affichage de la popup
        popupMessage.textContent = `Bravo, tu as répondu avec la bonne réponse : "${answer}"!`;
        popup.style.display = 'flex'; // Afficher la popup
    };

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Fermer la popup
    });

    nextButton.addEventListener('click', () => {
        currentEnigmeIndex++;
        if (currentEnigmeIndex < enigmes.length) {
            answerContainer.style.display = 'none';
            popup.style.display = 'none'; // Fermer la popup
            container.style.display = 'block';
            showEnigme();
        } else {
            // Redirige vers une autre page ou affiche un message de fin
            window.location.href = 'enigme.html'; // Remplace par ton URL
        }
    });

    showEnigme(); // Affiche la première énigme
});