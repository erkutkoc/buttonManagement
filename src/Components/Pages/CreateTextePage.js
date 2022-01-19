
let buttons = `<button type="button" id="dactylographieButton">Dactylographier</button><button type="button" id="createTexteButton">Créer un texte</button><br>`;
let createText = `
<div id="showCreateText">
    Ajout d'un texte à dactylographier 
    <br>
    <textarea disabled rows="10" cols="100">
    </textarea>
    <br>
    <select name="dactylographier" id="dactylographier">
        <option value="">Veuillez choisir un niveau</option>
        <option value="facile">facile</option>
        <option value="moyen">moyen</option>
        <option value="difficile">difficile</option>
    </select>
    <br>
    <p>Statut opération</p>
</div>

`;
const CreateTextPage = () => {
    let main = document.getElementById("page");
    main.innerHTML += buttons;
    main.innerHTML += dactylographier;
    main.innerHTML += createText;
    let dactylographieButton = document.getElementById("dactylographieButton");
    let createTexteButton = document.getElementById("createTexteButton");
    let selectDifficulty = document.getElementById("dactylographier");
    createTexteButton.addEventListener("click", () => {
        document.getElementById("showCreateText").style.display = "block";
        document.getElementById("showDactylographie").style.display = "none";

    })
    dactylographieButton.addEventListener("click", () => {
        document.getElementById("showDactylographie").style.display = "block";
        document.getElementById("showCreateText").style.display = "none";

    })
    selectDifficulty.addEventListener("change", (event) => {
        console.log(event.target.value);
        
    })
};
export default DactylographiePage;