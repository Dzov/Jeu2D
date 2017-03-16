
// Constructeur de World 
// -> instance de World créée dans app.js
let World = function() {
    // On créé l'élément "div"
    this.elt = document.createElement("div");
    // on lui ajoute l'id et la classe world 
    this.elt.id = "world";
    this.elt.classList.add("world");
    // et on l'attache au body
    document.body.appendChild(this.elt);

    // On créé le tableau levels qui contiendra tous les niveaux
    this.levels = [];
    // On créé un nouveau personnage qui s'appelle Michelle 
    this.character = new Character("Michelle");

    this.hovered_level = null;

    // On appelle la méthode create_levels 
    this.create_levels(); 
}

// On créé de nouveaux niveaux que l'on ajoute au tableau levels 
// -> appelé dans le constructeur World au dessus
World.prototype.create_levels = function() {
    this.levels.push(
        new Level("Pandora", "pandora.html")
    );
    this.levels.push(
        new Level("Tatooine", "tatooine.html", [
            this.levels[0]
        ])
    );
    this.levels.push(
        new Level("Poudlard", "poudlard.html")
    );
    this.levels.push(
        new Level("Azgaroth", "azgaroth.html", [
            this.levels[1],
            this.levels[2]
        ])
    );

    this.levels.reverse(); 
    // On débloque le premier niveau
    this.levels[0].unlock();
}

// on affiche tous les niveaux contenus dans le tableau levels puis on affiche le perso
// -> appelé dans app.js
World.prototype.display = function() {
    for(let i in this.levels)
    {
        this.levels[i].display();
    }

    this.character.display();
}

