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
    	    game.load.image('ladybug', 'assets/ladybug.png')
    	    game.load.image('house', 'assets/house.png')
    	    game.load.image('dog', 'assets/dog.png')
    	    game.load.image('ball', 'assets/ball.png')
    	    game.load.image('star', 'assets/star.png')
    	    game.load.image('box', 'assets/box.png')
    	    game.load.image('hamburger', 'assets/hamburger.png')
    	    game.load.image('hotdog', 'assets/hotdog.png')
    	    game.load.image('frog', 'assets/frog.png')
    	    game.load.image('iron', 'assets/iron.png')
    	    game.load.image('bubbles', 'assets/bubbles.png')
    	    game.load.image('beer', 'assets/beer.png')
    	    game.load.image('tree', 'assets/tree.png')
    	    game.load.image('flower', 'assets/flower.png')
    	    game.load.image('cloud', 'assets/cloud.png')
    	    game.load.image('bird', 'assets/bird.png')
    }
    
    var cardList = ["bird", "bird", "ball", "ball", "house", "house", "ladybug", "ladybug", "dog", "dog", "star", "star", "box", "box",
    	            "hamburger", "hamburger", "hotdog", "hotdog", "frog", "frog", "iron", "iron", "bubbles", "bubbles", "beer", "beer",
    			"tree", "tree", "flower", "flower", "cloud", "cloud"];
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
    var turnSafe = 1;
    var firstCard;
    var secondCard;
    var firstCardTurn = 0;
    var firstCardCheck;
    var firstBackCard = 0;
    var secondBackCard = 0;
    var card0Safe = 1;
    var card1Safe = 1;
    var card2Safe = 1;
    var card3Safe = 1;
    var card4Safe = 1;
    var card5Safe = 1;
    var card6Safe = 1;
    var card7Safe = 1;
    var card8Safe = 1;
    var card9Safe = 1;
    var card10Safe = 1;
    var card11Safe = 1;
    var card12Safe = 1;
    var card13Safe = 1;
    var card14Safe = 1;
    var card15Safe = 1;
    var card16Safe = 1;
    var card17Safe = 1;
    var card18Safe = 1;
    var card19Safe = 1;
    var card20Safe = 1;
    var card21Safe = 1;
    var card22Safe = 1;
    var card23Safe = 1;
    var card24Safe = 1;
    var card25Safe = 1;
    var card26Safe = 1;
    var card27Safe = 1;
    var card28Safe = 1;
    var card29Safe = 1;
    var card30Safe = 1;
    var card31Safe = 1;
    var cardGroup;
    var spaceKey;
        
    function create()
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    game.add.sprite(0, 0, 'back');
    	    
    	    Phaser.Utils.shuffle(cardList);
    	    
    	    wallGroup = game.add.group();
    	    game.physics.arcade.enable(wallGroup);
    	    
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    
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
    	    
    	    cardGroup = game.add.group();
    	        	    
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
    	    game.physics.arcade.collide(avatar, wallGroup, null, null, this);
    	    
    	    if (spaceKey.isDown)
    	    {
    	    	    game.physics.arcade.overlap(avatar, card0, card0Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card1, card1Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card2, card2Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card3, card3Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card4, card4Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card5, card5Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card6, card6Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card7, card7Check, null, this);
    	    	    /*game.physics.arcade.overlap(avatar, card8, card8Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card9, card9Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card10, card10Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card11, card11Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card12, card12Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card13, card13Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card14, card14Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card15, card15Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card16, card16Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card17, card17Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card18, card18Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card19, card19Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card20, card20Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card21, card21Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card22, card22Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card23, card23Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card24, card24Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card25, card25Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card26, card26Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card27, card27Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card28, card28Check, null, this);
		    game.physics.arcade.overlap(avatar, card29, card29Check, null, this);
		    game.physics.arcade.overlap(avatar, card30, card30Check, null, this);
		    game.physics.arcade.overlap(avatar, card31, card31Check, null, this);*/
    	    }
    	    
    	    
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
        
    function resetTurnSafe()
    {
    	    turnSafe = 1;
    }
    
    function killCards()
    {
    	    firstCard.destroy();
    	    secondCard.destroy();
    }
    
    function card0Check(avatar, card0)
    {
    	    if (firstBackCard != card0)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card1Check(avatar, card1)
    {
    	    if (firstBackCard != card1)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(205, 95, cardList[1]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[1];
    	    	   	   	   firstBackCard = card1;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(205, 95, cardList[1]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card1;
    	    	    		   if (cardList[1] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card2Check(avatar, card2)
    {
    	    if (firstBackCard != card2)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(315, 95, cardList[2]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[2];
    	    	   	   	   firstBackCard = card2;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(315, 95, cardList[2]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card2;
    	    	    		   if (cardList[2] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card3Check(avatar, card3)
    {
    	    if (firstBackCard != card3)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(425, 95, cardList[3]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[3];
    	    	   	   	   firstBackCard = card3;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(425, 95, cardList[3]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card3;
    	    	    		   if (cardList[3] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card4Check(avatar, card4)
    {
    	    if (firstBackCard != card4)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(535, 95, cardList[4]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[4];
    	    	   	   	   firstBackCard = card4;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(535, 95, cardList[4]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card4;
    	    	    		   if (cardList[4] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card5Check(avatar, card5)
    {
    	    if (firstBackCard != card5)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(645, 95, cardList[5]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[5];
    	    	   	   	   firstBackCard = card5;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(645, 95, cardList[5]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card5;
    	    	    		   if (cardList[5] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card6Check(avatar, card6)
    {
    	    if (firstBackCard != card6)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(755, 95, cardList[6]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[6];
    	    	   	   	   firstBackCard = card6;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(755, 95, cardList[6]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card6;
    	    	    		   if (cardList[6] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card7Check(avatar, card7)
    {
    	    if (firstBackCard != card7)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(865, 95, cardList[7]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[7];
    	    	   	   	   firstBackCard = card7;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(865, 95, cardList[7]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card7;
    	    	    		   if (cardList[7] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 2.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
    
    function card0Check(avatar, card0)
    {
    	    if (card0Safe)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   firstCardCheck = cardList[0];
    	    	   	   	   firstBackCard = card0;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   	   card0Safe = 0;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 95, cardList[0]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 2.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   //decrement counter
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstCardBack.x = -500;
    	    	    		    	   secondCardBack.x = -500;
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   card0Safe = 1;
    	    	    		   	   firstCardTurn = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
  
};
