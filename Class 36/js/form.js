class Form {
    constructor(){
        this.input  = createInput("Player 1");
        this.button = createButton("Click to play");
        this.greeting = createElement("h1");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing Game");
        title.position(displayWidth/2, 10);

        this.input.position(displayWidth/2, displayHeight/2-50);

        this.button.position(displayWidth/2, displayHeight/2);

        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();

                player.name = this.input.value();

                playerCount = playerCount+1;
                player.index = playerCount;

                player.update();
                player.updateCount(playerCount);

                this.greeting.html("Welcome " + player.name);
                this.greeting.position(displayWidth/2, displayHeight/2  );
            }
        )
    }
}