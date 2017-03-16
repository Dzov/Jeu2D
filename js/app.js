/* Lorsque la page est entièrement chargée, on va créer le monde et 
   */
window.addEventListener("load", function(){
    let world = new World();

/* On appelle la fonction create_listener de l'instance de Keypress, qui permet au perso de se déplacer, de vérifier si le perso est 
  positionné au dessus d'un niveau et de rentrer dans le niveau si c'est le cas */
    document.addEventListener(
        "keydown",
        new Keypress(world).create_listener()
    );

    //on appelle la méthode display qui permet d'afficher les niveaux et le perso
    world.display();
});

