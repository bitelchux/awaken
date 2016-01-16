(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;

    }

    Preloader.prototype = {
        preload: function () {
            this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
            this.load.setPreloadSprite(this.asset);

            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.loadResources();

            this.game.time.advancedTiming = true;

            this.ready = true;
        },

        loadResources: function () {
            //player
            this.load.spritesheet('ken', 'assets/player/ken.png', 32, 32, 20);
            this.load.spritesheet('attack', 'assets/player/attack.png', 64, 80, 3);

            //ennemies
            this.load.spritesheet('worm', 'assets/enemies/worm.png', 32, 32, 20);
            this.load.spritesheet('spider', 'assets/enemies/spider.png', 32, 32, 32);

            //boss
            //this.load.spritesheet('david', 'assets/bosses/david.png', 32, 64, 4);
            this.load.spritesheet('david_foot', 'assets/bosses/david_foot.png', 32, 16, 4);
            this.load.spritesheet('david_leg', 'assets/bosses/david_leg.png', 32, 64, 2);


            //Blood particles
            this.load.spritesheet('blood', 'assets/particles/blood.png', 4, 4, 3);


            //ui
            this.load.image('gear', 'assets/ui/gear.png');

            //fonts
            this.load.bitmapFont('gem', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');

            //events
            this.load.image('fog', 'assets/events/fog.png');
            this.load.spritesheet('snow', 'assets/events/snow.png', 4, 4, 3);
            this.load.spritesheet('rain', 'assets/events/rain.png', 4, 4, 3);


            //grounds effects
            this.load.image('bloodTile', 'assets/tiles/bloodTile.png');
            this.load.spritesheet('poison', 'assets/tiles/poison.png', 32, 32, 3);
            this.load.spritesheet('water', 'assets/tiles/water.png', 32, 32, 3);
            this.load.spritesheet('grass', 'assets/tiles/grass.png', 32, 32, 3);


            //filters
            this.load.script('debug',   'assets/filters/DebugFilter.js');
           //this.load.script('recolor', 'assets/filters/RecolorFilter.js');


            //musics
            this.load.audio('music_game_1', ['assets/musics/paragonX9_metropolis.mp3']);

            //sounds
            this.load.audio('fx_hit', 'assets/sounds/hit.wav');
            this.load.audio('fx_attack', 'assets/sounds/attack.wav');
            this.load.audio('fx_text', 'assets/sounds/text.wav');

        },

        create: function () {
            window['awaken'].Boot.fxMusic = this.game.add.audio('music_game_1');
            window['awaken'].Boot.fxMusic.allowMultiple = false;
            window['awaken'].Boot.fxMusic.loop = true;
            window['awaken'].Boot.fxMusic.volume = .5 ;

        },

        update: function () {
            if (!!this.ready) {
            //if (!!this.ready && this.cache.isSoundDecoded('music_game_1')) {
                this.game.state.start('menu');
            }
        },

        onLoadComplete: function () {
            this.ready = true;
        }
    };

    window['awaken'] = window['awaken'] || {};
    window['awaken'].Preloader = Preloader;
}());
