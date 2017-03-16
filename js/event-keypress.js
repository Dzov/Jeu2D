let Keypress = function(world_) {
    this.world = world_;
}

Keypress.prototype.create_listener = function() {
    let world_ = this.world;

    return function(event) {
        let position_changed = true;

        let position = {
            x: parseInt(world_.character.elt.style.left),
            y: parseInt(world_.character.elt.style.top)
        }
        let step = 5;

        switch(event.key)
        {
            case "ArrowUp" :
                position.y -= step;
                break;
            case "ArrowDown" :
                position.y += step;
                break;
            case "ArrowLeft" :
                position.x -= step;
                break;
            case "ArrowRight" :
                position.x += step;
                break;
            case " " :
                if(world_.hovered_level)
                {
                    world_.character.set_current_level(
                        world_.hovered_level
                    );
                }
                else
                {
                    alert("I'm lost. Guide me to a level");
                }
                position_changed = false;
                break;
            default:
                position_changed = false;
                break;
        }

        if(position_changed)
        {
            if(position.x < 0)
            {
                position.x = 0;
            }
            else if(
                position.x > (
                    world_.elt.offsetWidth -
                    world_.character.elt.offsetWidth
                )
            )
            {
                position.x =
                    world_.elt.offsetWidth -
                    world_.character.elt.offsetWidth;
            }

            if(position.y < 0)
            {
                position.y = 0;
            }
            else if(
                position.y > (
                    world_.elt.offsetHeight -
                    world_.character.elt.offsetHeight
                )
            )
            {
                position.y =
                    world_.elt.offsetHeight -
                    world_.character.elt.offsetHeight;
            }

            world_.character.elt.style.left = "" + position.x + "px";
            world_.character.elt.style.top = "" + position.y + "px";

            world_.hovered_level = null;

            for(let i in world_.levels)
            {
                world_.levels[i].elt.classList.remove("linked");
            }
            for(let i in world_.levels)
            {
                // thx http://stackoverflow.com/a/9607413/6612932
                let doElsCollide = function(el1, el2) {
                    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
                    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
                    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
                    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

                    return !((el1.offsetBottom < el2.offsetTop) ||
                             (el1.offsetTop > el2.offsetBottom) ||
                             (el1.offsetRight < el2.offsetLeft) ||
                             (el1.offsetLeft > el2.offsetRight))
                };

                if(
                    doElsCollide(world_.character.elt, world_.levels[i].elt)
                )
                {
                    world_.levels[i].elt.classList.add("visiting");
                    world_.hovered_level = world_.levels[i];

                    for(let j in world_.levels[i].linked)
                    {
                        world_.levels[i].linked[j].elt.classList.add("linked");
                    }
                }
                else
                {
                    world_.levels[i].elt.classList.remove("visiting");
                }
            }
        }
    }
}

