/**
 * Created by Epitaph64 on 7/15/2015.
 */
window.onload = function() {

    var game = new Phaser.Game(1024, 768, Phaser.AUTO, "game", { preload: preload, create: create, update: update }, false, false);

    function preload () {
        //game.load.spritesheet('tileset', '/img/tileset.png', 32, 32);
    }

    function create () {

        //	Enable p2 physics
        game.physics.startSystem(Phaser.Physics.P2JS);

        //  Make things a bit more bouncey
        game.physics.p2.defaultRestitution = 0.2;

        game.stage.backgroundColor = '#666666';

        for (var x = 0; x < map_width; x++) {
            for (var y = 0; y < map_height; y++) {
                map[x][y] = 1;
            }
        }
        for (x = 1; x < map_width - 1; x++) {
            for (y = 1; y < map_height - 1; y++) {
                if (Math.random() < 0.9)
                map[x][y] = 0;
            }
        }
        for (x = 0; x < map_width; x++) {
            for (y = 0; y < map_height; y++) {
                switch(map[x][y]) {
                    case 1:
                        tile_block = game.add.sprite(x * 32 + 16, y * 32 + 16, 'tileset', 3);
                        tile_block.scale.setTo(2, 2);
                        game.physics.p2.enable(tile_block);
                        tile_block.body.static = true;
                        tile_block.body.fixedRotation = true;
                        break;
                    default:
                        tile_block = game.add.sprite(x * 32, y * 32, 'tileset', 48);
                        tile_block.scale.setTo(2, 2);
                        break;
                }
            }
        }

        //var style = { font: "32px Arial", fill: '#ffffff', align: "center" };
        //text = game.add.text(game.world.centerX, 64, "Test", style);
        //text.anchor.set(0.5);
        //text.inputEnabled = true;
        //text.events.onInputDown.add(down, this);

        player = game.add.sprite(player.x, player.y, 'tileset', 11);
        player.scale.setTo(2.0, 2.0);
        game.physics.p2.enable(player);
        player.body.setZeroDamping();
        player.body.fixedRotation = true;
    }

    function update () {
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
};
