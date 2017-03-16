// Constructeur de niveaux 
//  -> instances de Level créées dans object-world.js
let Level = function(name_, path_, linked_ = []) {
    // on créé l'élément div
    this.elt = document.createElement("div");
    // on ajoute les classes level et locked 
    this.elt.classList.add("level");
    this.elt.classList.add("locked");
    // on assigne une position aléatoire au niveau
    this.elt.style.top = "" + (Math.random()*90) + "%";
    this.elt.style.left = "" + (Math.random()*90) + "%";

    // on attache la div .level à la div #world
    document.getElementById("world").appendChild(this.elt);

    // le nom du niveau correspond à l'argument renseigné lors de la création de l'objet
    this.name = name_;
    // le niveau est bloqué par défaut
    this.locked = true;
    
    this.linked = linked_;

    this.path = path_
}

Level.prototype.display = function() {
}

// méthode permettant de débloquer les niveaux 
Level.prototype.unlock = function() {
    // si le niveau est bloqué
    if(this.locked)
    {
        // on le débloque
        this.locked = false;
        // on enleve la classe locked et on ajoute la classe unlocked puis on le notifie avec une alerte
        this.elt.classList.remove("locked");
        this.elt.classList.add("unlocked");
        alert("level " + this.name + " is unlocked");
    }
}

Level.prototype.start = function() {
    window.location.href = this.path; 
}

Level.prototype.finish = function() {
    // on ajoute la classe finished
    this.elt.classList.add("finished");

    for(let i in this.linked)
    {
        this.linked[i].unlock();
    }
}

