// Constructeur de Personnage
// -> instance de Character créée dans object-world.js
let Character = function(name_) {
    // on créé l'éléement div
    this.elt = document.createElement("div");
    // on lui ajoute la classe character
    this.elt.classList.add("character");

    // son positionnement par défaut est en haut à gauche
    this.elt.style.top = this.elt.style.left = 0;

    // on attache la div .character à la div #world 
    document.getElementById("world").appendChild(this.elt);

    // le nom du perso est le nom renseigné lors de sa création
    this.name = name_;
    // le perso n'est associé à aucun niveau par défaut
    this.current_level = null;
}

Character.prototype.display = function() {
}

// méthode permettant de déterminer le niveau dans lequel se trouve le perso
// -> appelé dans event-keypress.js
Character.prototype.set_current_level = function(level_) {
    if(level_.locked)
    {   
        alert(this.name + " can't go to " + level_.name);
    }
    else
    {   // si le niveau n'est pas bloqué, le niveau actuel est le niveau sur lequel est positionné le perso
        this.current_level = level_;

        alert(this.name + " goes to " + this.current_level.name);

        this.current_level.start();
    }
}

