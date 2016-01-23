/**
 *
 * Menu state
 *
 * Menu have three features
 *  Play the game : Launch game state
 *  Cheater : Give immortality to the player
 *  Fullscreen : Toggle the screen to fullscreen
 *
 */



(function () {
    'use strict';

    var ns = window['awaken'];

    function Menu() {
    }

    Menu.prototype = {


        /** Create everything on the scene **/
        create: function () {

            // (re)initialise the score to 0
            ns.Boot.score = 0;

            /** Sounds **/
            this.fxButtonOver = this.game.add.audio('fx_button_over');
            this.fxButtonOver.allowMultiple = false;
            this.fxButtonOver.volume = .9;

            this.fxButtonActivated = this.game.add.audio('fx_button_activated');
            this.fxButtonActivated.allowMultiple = false;
            this.fxButtonActivated.volume = .9;

            /** Music **/
            if(!ns.Boot.fxMusic.isPlaying) ns.Boot.fxMusic.play();
            if(!ns.Boot.fxMusic.paused) ns.Boot.fxMusic.resume();



            /** Texts **/
            var title = this.game.add.bitmapText(this.game.width * 0.5, this.game.height * 0.3, 'gem', "AWAKEN", 42);
            title.anchor.set(0.5);

            var author = this.game.add.bitmapText(this.game.width-25, this.game.height * 0.9, 'gem', "Developed by Clement Baconnier", 12);
            author.anchor.set(1);

            var music = this.game.add.bitmapText(this.game.width-25, this.game.height * 0.93, 'gem', "Music by ParagonX9", 12);
            music.anchor.set(1);

            this.cheatText = this.game.add.bitmapText(this.game.width-230, this.game.height * 0.55, 'gem', "", 14);;
            this.cheatText.anchor.set(0.5);


            /** buttons **/
            this.play = this.game.add.button(this.game.width * 0.5, this.game.height * 0.45, 'button', this.playAction, this, 0, 1, 2);
            this.play.smoothed = false;
            this.play.anchor.set(0.5);
            this.play.scale.x = 3;
            this.play.scale.y = 3;
            this.play.setSounds(this.fxButtonOver);
            var playText = this.game.add.bitmapText(this.game.width * 0.5, this.game.height * 0.45, 'gem', "PLAY", 16);
            playText.anchor.set(0.5);


            this.cheat = this.game.add.button(this.game.width * 0.5, this.game.height * 0.55, 'button', this.cheaterAction, this, 0, 1, 2);
            this.cheat.smoothed = false;
            this.cheat.anchor.set(0.5);
            this.cheat.scale.x = 3;
            this.cheat.scale.y = 3;
            this.cheat.setSounds(this.fxButtonOver);
            var cheaterText = this.game.add.bitmapText(this.game.width * 0.5, this.game.height * 0.55, 'gem', "CHEATER", 16);
            cheaterText.anchor.set(0.5);


            this.full = this.game.add.button(this.game.width * 0.5, this.game.height * 0.65, 'button', this.fullscreenAction, this, 0, 1, 2);
            this.full.smoothed = false;
            this.full.anchor.set(0.5);
            this.full.scale.x = 3;
            this.full.scale.y = 3;
            this.full.setSounds(this.fxButtonOver);
            var fullscreenText = this.game.add.bitmapText(this.game.width * 0.5, this.game.height * 0.65, 'gem', "FULLSCREEN", 16);
            fullscreenText.anchor.set(0.5);

            /** Input **/
            //keyboard
            this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.changeState, this);
            this.input.keyboard.addKey(Phaser.Keyboard.F).onDown.add(this.goFullscreen, this);

            //gamepad
            this.input.gamepad.start();
            this.pad = this.input.gamepad.pad1;
            if (this.game.input.gamepad.supported && this.game.input.gamepad.active && this.pad.connected){
                this.pad.addCallbacks(this, {onConnect: this.addButtons});
                this.addButtons();
            }



        },


        /** Play button action **/
        playAction: function(){
            if(this.play.input.pointerOver()){
                this.fxButtonActivated.play();
                // change the state
                this.changeState();
            }

        },

        /** Cheater button action **/
        cheaterAction: function(){
            if(this.cheat.input.pointerOver()){
                this.fxButtonActivated.play();
                ns.Boot.cheater = !ns.Boot.cheater;
                if(ns.Boot.cheater){
                    this.cheatText.text = "Cheat activated !";
                }else{
                    this.cheatText.text = "Cheat deactivated !";
                }
            }
        },

        /** Fullscreen button action **/
        fullscreenAction: function(){
            if(this.full.input.pointerOver()) {
                this.fxButtonActivated.play();
                this.goFullscreen();
            }
        },


        /** Change the state **/
        changeState: function () {

            // We have to reset the gamepad buttons otherwise they keep the action on the next state
            this.resetButtons();

            // Change to the transition state
            this.game.state.start('transition', true, false, new ns.Levels().getFirstLevel());
        },

        /** Switch the game to fullscreen / windowed **/
        goFullscreen: function(){
            if (this.game.scale.isFullScreen)
            {
                this.game.scale.stopFullScreen();
            }
            else
            {
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
                this.game.scale.startFullScreen(false);
            }

        },

        /** Add the buttons to the gamepad **/
        addButtons: function(){
            this.pad.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(this.changeState, this);
        },

        /** Remove the buttons to the gamepad **/
        resetButtons: function(){
            if (this.game.input.gamepad.supported && this.game.input.gamepad.active && this.pad.connected){
                this.pad.getButton(Phaser.Gamepad.XBOX360_A).onDown.dispose();
            }
        }


    };

    window['awaken'] = window['awaken'] || {};
    window['awaken'].Menu = Menu;
}());
