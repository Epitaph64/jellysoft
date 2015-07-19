/**
 * Created by Epitaph64 on 7/18/2015.
 */
window.onload = function() {

    var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, false, false);

    var tileSize = 32;
    var wTiles = 24;
    var hTiles = 24;
    var gamePanelWidth = tileSize * wTiles;

    var mouse_pressed = false;
    var mouse_x = 0;
    var mouse_y = 0;

    var lightning_timer = 0;

    var lightning = {
        x: 0,
        y: 0,
        life: 0,
        active: false,
        sprite: null
    }

    function preload () {
        import_map();
        //game.load.spritesheet('tileset', '/img/tileset.png', 32, 32);

        // load cactus images
        game.load.image('imgBabySaguaro', 'img/cactus/babysaguaro.png');
        game.load.image('imgBarrel', 'img/cactus/barrel.png');
        game.load.image('imgPricklyPear', 'img/cactus/pricklypear.png');
        game.load.image('imgTallSaguaro', 'img/cactus/tallsaguaro.png');

        // load player images
        game.load.image('imgPlayer', 'img/player/player.png');

        // load tile-textures
        game.load.image('imgDirt', 'img/dirt/dirt.png');
        game.load.image('imgRock', 'img/rock/rock.png');
        game.load.image('imgGreenGrass', 'img/buffelgrass/greengrass.png');
        game.load.image('imgRock', 'img/buffelgrass/yellowgrass.png');

        // load lightning graphic
        game.load.image('imgLightning', 'img/lightning/lightning.png');

        // load fire
        game.load.image('imgFire', 'img/fire/fire.png');
    }

    function create () {

        //	Enable p2 physics
        game.physics.startSystem(Phaser.Physics.P2JS);

        //  Make things a bit more bouncey
        game.physics.p2.defaultRestitution = 0.2;

        // generates basic map for testing
        for (var x = 0; x < wTiles; x++) {
            for (var y = 0; y < hTiles; y++) {
                dirtTile = game.add.sprite(x * 32, y * 32, 'imgDirt');
                var r = Math.floor(Math.random() * 16);
                switch(r) {
                    case 0:
                        cactus = game.add.sprite(x * 32 + 16, y * 32 + 16, 'imgTallSaguaro');
                        game.physics.p2.enable(cactus);
                        cactus.body.static = true;
                        cactus.body.fixedRotation = true;
                        break;
                    case 1:
                        cactus = game.add.sprite(x * 32 + 16, y * 32 + 16, 'imgPricklyPear');
                        game.physics.p2.enable(cactus);
                        cactus.body.static = true;
                        cactus.body.fixedRotation = true;
                        break;
                    case 2:
                        cactus = game.add.sprite(x * 32 + 16, y * 32 + 16, 'imgBarrel');
                        game.physics.p2.enable(cactus);
                        cactus.body.static = true;
                        cactus.body.fixedRotation = true;
                        break;
                    case 3:
                        cactus = game.add.sprite(x * 32 + 16, y * 32 + 16, 'imgBabySaguaro');
                        game.physics.p2.enable(cactus);
                        cactus.body.static = true;
                        cactus.body.fixedRotation = true;
                        break;
                    default:
                        px = x;
                        py = y;
                        break;
                }
            }
        }

        player = game.add.sprite(px * 32 + 16, py * 32 + 16, 'imgPlayer');

        //var style = { font: "32px Arial", fill: '#ffffff', align: "center" };
        //text = game.add.text(game.world.centerX, 64, "Test", style);
        //text.anchor.set(0.5);
        //text.inputEnabled = true;
        //text.events.onInputDown.add(down, this);

        game.physics.p2.enable(player);
        player.body.setZeroDamping();
        player.body.fixedRotation = true;
    }

    function update () {
        // Handle mouse clicks
        if (game.input.activePointer.isDown) {
            if (!mouse_pressed) {
                mouse_pressed = true;
                mouse_x = game.input.mousePointer.x;
                mouse_y = game.input.mousePointer.y;
                if (mouse_x < gamePanelWidth) {
                    mouse_click_game(mouse_x, mouse_y);
                } else {
                    mouse_click_gui(mouse_x - gamePanelWidth, mouse_y);
                }
            }
        } else {
            mouse_pressed = false;
        }

        if (player.x + 16 > gamePanelWidth) {
            player.body.x = gamePanelWidth - 16;
        }

        // Set velocity to zero at start of update (to avoid residual movement)
        player.body.setZeroVelocity();
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            move_left();
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            move_right();
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            move_up();
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            move_down();
        }

        lightning_timer += 1;
        if (lightning_timer > 200) {
            //console.log('lightning timer has passed');
            var rvalue = Math.random();
            if (lightning_timer <= 0) {
                lightning_timer = 1;
            }
            var value = 200 / lightning_timer;
            //console.log('value: ' + value + ', rvalue: ' + rvalue);
            if (value < rvalue) {
                //console.log('lighning has struck somewhere');
                lightning_timer = 0;
                var lx = rint(0, wTiles) * 32;
                var ly = rint(0, hTiles) * 32;
                lightning.sprite = game.add.sprite(lx, ly, 'imgLightning');
                lightning.life = 20;
                lightning.x = lx;
                lightning.x = ly;
                lightning.active = true;
            }
        }

        if (lightning.active) {
            lightning.life -= 1;
            if (lightning.life <= 0) {
                lightning.sprite.kill();
            }
        }
    }

    function import_map() {
        // Create 2D grid representation out of arrays of map_width and map_height
        var map = new Array(wTiles);
        for (var i = 0; i < hTiles; i++) {
            map[i] = new Array(hTiles);
        }
    }

    // mouse click within game area panel
    function mouse_click_game(mx, my) {
        console.log('Clicked on tile at (' + Math.floor(mx / 32) + ', ' + Math.floor(my / 32) + ').');
    }

    // mouse click within GUI panel
    function mouse_click_gui(mx, my) {
        console.log('Clicked at coords (' + mx + ', ' + my + ').');
    }

    function move_left () {
        player.body.moveLeft(250);
    }

    function move_right() {
        player.body.moveRight(250);
    }

    function move_up() {
        player.body.moveUp(250);
    }

    function move_down() {
        player.body.moveDown(250);
    }

    function rint(low, high) {
        if (low > high) {
            return low;
        }
        return Math.floor(Math.random() * (high - low)) + low;
    }
};
