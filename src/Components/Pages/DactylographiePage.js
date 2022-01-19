import {randomText} from "../../Utils/default_texts";
let buttons = `<button type="button" id="dactylographieButton">Dactylographier</button><button type="button" id="createTexteButton">Créer un texte</button><br>`;
let dactylographier = `<div id="dactylographieBlock"><label for="Dactylographier" >Texte à dactylographier</label><br>

<select name="dactylographier" id="difficulty1">
    <option value="">Veuillez choisir un niveau</option>
    <option value="facile">facile</option>
    <option value="moyen">moyen</option>
    <option value="difficile">difficile</option>
</select><br>
<p class="alert alert-info" id="dactylographieText">Le texte à dactylographier sera repris ici une fois le niveau sélectionné.</p><br>
<textarea id="textADactylographier"  rows="10" cols="100">
</textarea></div>
`;
let createText = `<div id="createTextBlock">Ajout d'un texte à dactylographier <br>
<textarea  disabled rows="10" cols="100">
</textarea>
<br>

<select name="dactylographier" id="difficulty2">
    <option value="">Veuillez choisir un niveau</option>
    <option value="facile">facile</option>
    <option value="moyen">moyen</option>
    <option value="difficile">difficile</option>
</select><br>
<button type="submit" class="button btn-primary">Envoyer</button>
<p class="alert alert-info">Statut opération</p>
</div>
`;
const DactylographiePage = () => {
    let main = document.getElementById("page");
    //On charge tout les éléments de la page
    main.innerHTML += buttons;
    main.innerHTML += dactylographier;
    main.innerHTML += createText;
    let textArea = document.getElementById("textADactylographier");
    textArea.disabled = true;
    textArea.value = "";
    document.getElementById("dactylographieBlock").style.display = "block";
    document.getElementById("createTextBlock").style.display = "none";

    let dactylographieButton = document.getElementById("dactylographieButton");
    let createTexteButton = document.getElementById("createTexteButton");
    let selectDifficulty1 = document.getElementById("difficulty1");
    let selectDifficulty2 = document.getElementById("difficulty2");
    

    createTexteButton.addEventListener("click", () => {
        document.getElementById("dactylographieBlock").style.display = "none";
        document.getElementById("createTextBlock").style.display = "block";
        textArea.value = "";
        textArea.disabled = true;
    })
    dactylographieButton.addEventListener("click", () => {
        document.getElementById("dactylographieBlock").style.display = "block";
        document.getElementById("createTextBlock").style.display = "none";
        textArea.value = "";
        textArea.disabled = true;
    })
    selectDifficulty1.addEventListener("change", (event) => {
        event.preventDefault;
        let content = document.getElementById("dactylographieText");
        content.textContent= randomText(event.target.value);
        textArea.value = "";
        textArea.disabled = false;

    })
    selectDifficulty2.addEventListener("change", (event) => {


    })
};

export default DactylographiePage;