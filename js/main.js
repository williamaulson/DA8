window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload()
    {
    	    game.load.image('back', 'assets/back.png')
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.image('floor', 'assets/floor.png')
    	    game.load.image('wall', 'assets/wall.png')
    	    game.load.image('card', 'assets/card.png')
    }
    
    var avatar;
    var cursors;
    var avatarDirect = 1;
    var wSouth;
    var wNorth;
    var wWest;
    var wEast;
    var wallGroup;
    var card0;
    var card1;
    var card2;
    var card3;
    var card4;
    var card5;
    var card6;
    var card7;
    var card8;
    var card9;
    var card10;
    var card11;
    var card12;
    var card13;
    var card14;
    var card15;
    var card16;
    var card17;
    var card18;
    var card19;
    var card20;
    var card21;
    var card22;
    var card23;
    var card24;
    var card25;
    var card26;
    var card27;
    var card28;
    var card29;
    var card30;
    var card31;
        
    function create()
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    game.add.sprite(0, 0, 'back');
    	    
    	    wallGroup = game.add.group();
    	    game.physics.arcade.enable(wallGroup);
    	    
    	    wSouth = game.add.sprite(0, 551, 'floor');
    	    game.physics.arcade.enable(wSouth);
    	    wSouth.body.immovable = true;
    	    wallGroup.add(wSouth);
    	    wNorth = game.add.sprite(0, 0, 'floor');
    	    game.physics.arcade.enable(wNorth);
    	    wNorth.body.immovable = true;
    	    wallGroup.add(wNorth);
    	    wWest = game.add.sprite(0, 0, 'wall');
    	    game.physics.arcade.enable(wWest);
    	    wWest.body.immovable = true;
    	    wallGroup.add(wWest);
    	    wEast = game.add.sprite(999, 0, 'wall');
    	    game.physics.arcade.enable(wEast);
    	    wEast.body.immovable = true;
    	    wallGroup.add(wEast);
    	    
    	    card0 = game.add.sprite(95, 95, 'card');
    	    game.physics.arcade.enable(card0);
    	    card0.body.immovable = true;
    	    card1 = game.add.sprite(205, 95, 'card');
    	    game.physics.arcade.enable(card1);
    	    card1.body.immovable = true;
    	    card2 = game.add.sprite(315, 95, 'card');
    	    game.physics.arcade.enable(card2);
    	    card2.body.immovable = true;
    	    card3 = game.add.sprite(425, 95, 'card');
    	    game.physics.arcade.enable(card3);
    	    card3.body.immovable = true;
    	    card4 = game.add.sprite(535, 95, 'card');
    	    game.physics.arcade.enable(card4);
    	    card4.body.immovable = true;
    	    card5 = game.add.sprite(645, 95, 'card');
    	    game.physics.arcade.enable(card5);
    	    card5.body.immovable = true;
    	    card6 = game.add.sprite(755, 95, 'card');
    	    game.physics.arcade.enable(card6);
    	    card6.body.immovable = true;
    	    card7 = game.add.sprite(865, 95, 'card');
    	    game.physics.arcade.enable(card7);
    	    card7.body.immovable = true;
    	    
    	    card8 = game.add.sprite(95, 205, 'card');
    	    game.physics.arcade.enable(card8);
    	    card8.body.immovable = true;
    	    card9 = game.add.sprite(205, 205, 'card');
    	    game.physics.arcade.enable(card9);
    	    card9.body.immovable = true;
    	    card10 = game.add.sprite(315, 205, 'card');
    	    game.physics.arcade.enable(card10);
    	    card10.body.immovable = true;
    	    card11 = game.add.sprite(425, 205, 'card');
    	    game.physics.arcade.enable(card11);
    	    card11.body.immovable = true;
    	    card12 = game.add.sprite(535, 205, 'card');
    	    game.physics.arcade.enable(card12);
    	    card12.body.immovable = true;
    	    card13 = game.add.sprite(645, 205, 'card');
    	    game.physics.arcade.enable(card13);
    	    card13.body.immovable = true;
    	    card14 = game.add.sprite(755, 205, 'card');
    	    game.physics.arcade.enable(card14);
    	    card14.body.immovable = true;
    	    card15 = game.add.sprite(865, 205, 'card');
    	    game.physics.arcade.enable(card15);
    	    card15.body.immovable = true;
    	    
    	    card16 = game.add.sprite(95, 315, 'card');
    	    game.physics.arcade.enable(card16);
    	    card16.body.immovable = true;
    	    card17 = game.add.sprite(205, 315, 'card');
    	    game.physics.arcade.enable(card17);
    	    card17.body.immovable = true;
    	    card18 = game.add.sprite(315, 315, 'card');
    	    game.physics.arcade.enable(card18);
    	    card18.body.immovable = true;
    	    card19 = game.add.sprite(425, 315, 'card');
    	    game.physics.arcade.enable(card19);
    	    card19.body.immovable = true;
    	    card20 = game.add.sprite(535, 315, 'card');
    	    game.physics.arcade.enable(card20);
    	    card20.body.immovable = true;
    	    card21 = game.add.sprite(645, 315, 'card');
    	    game.physics.arcade.enable(card21);
    	    card21.body.immovable = true;
    	    card22 = game.add.sprite(755, 315, 'card');
    	    game.physics.arcade.enable(card22);
    	    card22.body.immovable = true;
    	    card23 = game.add.sprite(865, 315, 'card');
    	    game.physics.arcade.enable(card23);
    	    card23.body.immovable = true;
    	    
    	    card24 = game.add.sprite(95, 425, 'card');
    	    game.physics.arcade.enable(card24);
    	    card24.body.immovable = true;
    	    card25 = game.add.sprite(205, 425, 'card');
    	    game.physics.arcade.enable(card25);
    	    card25.body.immovable = true;
    	    card26 = game.add.sprite(315, 425, 'card');
    	    game.physics.arcade.enable(card26);
    	    card26.body.immovable = true;
    	    card27 = game.add.sprite(425, 425, 'card');
    	    game.physics.arcade.enable(card27);
    	    card27.body.immovable = true;
    	    card28 = game.add.sprite(535, 425, 'card');
    	    game.physics.arcade.enable(card28);
    	    card28.body.immovable = true;
    	    card29 = game.add.sprite(645, 425, 'card');
    	    game.physics.arcade.enable(card29);
    	    card29.body.immovable = true;
    	    card30 = game.add.sprite(755, 425, 'card');
    	    game.physics.arcade.enable(card30);
    	    card30.body.immovable = true;
    	    card31 = game.add.sprite(865, 425, 'card');
    	    game.physics.arcade.enable(card31);
    	    card31.body.immovable = true;
    	        	    
    	    avatar = game.add.sprite(950, 480, 'dude');
    	    game.physics.arcade.enable(avatar);
    	    avatar.animations.add('left', [0, 1, 2, 3], 10, true);
    	    avatar.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    }
    
    function fullScreenStart()
    {
    	    if (game.scale.isFullScreen)
    	    {
    	    	    game.paused = true;
    	    	    game.scale.stopFullScreen();
    	    }
    	    else
    	    {
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update()
    {
    	    avatar.body.velocity.x = 0;
    	    avatar.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200;
    	    	    avatar.body.velocity.x = 200;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200;
    	    	    avatar.body.velocity.x = -200;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200;
    	    	    avatar.body.velocity.x = 200;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200;
    	    	    avatar.body.velocity.x = -200;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200;
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.animations.play('left');
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.animations.play('right');
    	    	    }
    	    }
    	    else if (cursors.down.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200;
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.animations.play('left');
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.animations.play('right');
    	    	    }
    	    }
    	    else if (cursors.left.isDown)
    	    {
    	    	    avatar.body.velocity.x = -200;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.x = 200;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else
    	    {
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.frame = 0;
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.frame = 5;
    	    	    }
    	    }
    }
  
};
