window.onload = function() {
    // William Aulsoln CS 325
    // Digital Assignment #8
    // Speed Memory
    
    "use strict";
    
    var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() //preload assets
    {
    	    game.load.image('back', 'assets/back.png');
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.image('floor', 'assets/floor.png');
    	    game.load.image('wall', 'assets/wall.png');
    	    game.load.image('card', 'assets/card.png');
    	    game.load.image('ladybug', 'assets/ladybug.png');
    	    game.load.image('house', 'assets/house.png');
    	    game.load.image('dog', 'assets/dog.png');
    	    game.load.image('ball', 'assets/ball.png');
    	    game.load.image('star', 'assets/star.png');
    	    game.load.image('box', 'assets/box.png');
    	    game.load.image('hamburger', 'assets/hamburger.png');
    	    game.load.image('hotdog', 'assets/hotdog.png');
    	    game.load.image('frog', 'assets/frog.png');
    	    game.load.image('iron', 'assets/iron.png');
    	    game.load.image('bubbles', 'assets/bubbles.png');
    	    game.load.image('beer', 'assets/beer.png');
    	    game.load.image('tree', 'assets/tree.png');
    	    game.load.image('flower', 'assets/flower.png');
    	    game.load.image('cloud', 'assets/cloud.png');
    	    game.load.image('bird', 'assets/bird.png');
    	    game.load.image('bub', 'assets/bub.png');
    	    game.load.audio('bell', 'assets/bell.mp3');
    	    game.load.audio('pop', 'assets/pop.mp3');
    	    game.load.audio('reed', 'assets/reed.mp3');
    }
    //variable lists
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
    var cardGroup;
    var spaceKey;
    var matchesRemaining = 16;
    var avatarText;
    var textStyle = { font: "30px Arial", fill: "#000000", align: "center" };
    var time = 0;
    var gameNotEnd = 1;
    var gameRunning = 0;
    var firstTime = 1;
    var introBack;
    var introTitleText;
    var introText;
    var titleStyle = { font: "100px Arial", fill: "#A30000", align: "center" };
    var emptyBubble;
    var emptyGroup;
    var timerOff = 1;
    var avatarSpeed = 1.0;
    var bell;
    var pop;
    var music;
        
    function create() //create initial assets
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    game.add.sprite(0, 0, 'back');
    	    
    	    time = game.time.now;
    	    
    	    Phaser.Utils.shuffle(cardList);
    	    
    	    wallGroup = game.add.group();
    	    game.physics.arcade.enable(wallGroup);
    	    
    	    bell = game.add.audio('bell');
    	    pop = game.add.audio('pop');
    	    pop.allowMultiple = true;
    	    
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
    	    
    	    emptyGroup = game.add.group();
    	    game.physics.arcade.enable(emptyGroup);
    	        	    
    	    avatar = game.add.sprite(950, 480, 'dude');
    	    game.physics.arcade.enable(avatar);
    	    avatar.animations.add('left', [0, 1, 2, 3], 10, true);
    	    avatar.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    avatarText = game.add.text(370, 45, 'Time Remaining: ' + Math.floor(((169999 - (game.time.now - time)) / 1000) % 600), textStyle);
    	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    
    	    introBack = game.add.sprite(0, 0, 'back');
    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    introTitleText.anchor.set(0.5);
    	    introText = game.add.text(500, 250, 'Use the arrow keys to move.\nFlip the Cards with Spacebar.\nAvoid the bubbles.', textStyle);
    	    introText.anchor.set(0.5);
    	    
    	    music = game.add.audio('reed');
    	    music.play('', 0, 1, true);
    	    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    }
    
    function fullScreenStart() //fullscreen and start game logic method
    {
    	    if (game.scale.isFullScreen)
    	    {
    	    	    game.paused = true;
    	    	    game.scale.stopFullScreen();
    	    }
    	    else
    	    {
    	    	    if (firstTime)
    	    	    {
    	    	    	    killIntro();
    	    	    	    gameRunning = 1;
    	    	    	    firstTime = 0;
    	    	    }
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update() //main game logic loop
    {
    	    avatarText.setText('Time Remaining: ' + Math.floor(((169999 - (game.time.now - time)) / 1000) % 600));
    	    
    	    if (matchesRemaining < 1)
    	    {
    	    	    gameRunning = 0;
    	    	    checkWin();
    	    }
    	    
    	    if ((Math.floor(((169999 - (game.time.now - time)) / 1000) % 600)) < 0)
    	    {
    	    	    gameNotEnd = 0;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.6, checkWin, null);
    	    }
    	    
    	    game.physics.arcade.collide(avatar, wallGroup, null, null, this);
    	    game.physics.arcade.collide(emptyGroup, wallGroup, null, null, this);
    	    game.physics.arcade.collide(avatar, emptyGroup, killBubble, null, this);
    	    
    	    if (spaceKey.isDown && gameNotEnd)
    	    {
    	    	    game.physics.arcade.overlap(avatar, card0, card0Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card1, card1Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card2, card2Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card3, card3Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card4, card4Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card5, card5Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card6, card6Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card7, card7Check, null, this);
    	    	    game.physics.arcade.overlap(avatar, card8, card8Check, null, this);
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
		    game.physics.arcade.overlap(avatar, card31, card31Check, null, this);
    	    }
    	    
    	    
    	    avatar.body.velocity.x = 0;
    	    avatar.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
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
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
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
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
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
        
    function resetTurnSafe() //Prevent too many cards from turning over at once
    {
    	    turnSafe = 1;
    }
    
    function killBubble(avatar, bubble) //destroy a bubble
    {
    	    pop.play('', 0, 1, false);
    	    bubble.destroy();
    	    if (timerOff)
    	    {
    	    	    avatarSpeed = 0.5;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 5.0, resetTimer, null);
    	    	    timerOff = 0;
    	    }
    }
    
    function resetTimer() //reset player speed to regular
    {
    	  avatarSpeed = 1.0;
    	  timerOff = 1;
    }
    
    function makeBubble() //create a bubble object
    {
    	    emptyBubble = emptyGroup.create(getBubbleX(), getBubbleY(), 'bub');
    	    game.physics.arcade.enable(emptyBubble)
    	    emptyBubble.scale.x = .2;
    	    emptyBubble.scale.y = .2;
    	    emptyBubble.body.velocity.x = game.rnd.integerInRange(-400, 400);
    	    emptyBubble.body.velocity.y = game.rnd.integerInRange(-400, 400);
    	    emptyBubble.body.bounce.setTo(1, 1);
    }
    
    function getBubbleX() //get bubble x position
    {
    	    if (avatar.x < 512)
    	    {
    	    	    return 850;
    	    }
    	    else
    	    {
    	    	    return 250; 
    	    }
    }
    
    function getBubbleY() //get bubble y position
    {
    	    if (avatar.y < 255)
    	    {
    	    	    return game.rnd.integerInRange(350, 400);
    	    }
    	    else
    	    {
    	    	    return game.rnd.integerInRange(200, 250); 
    	    }
    }
    
    function killIntro() //remove intro splash
    {
    	    introBack.destroy();
    	    introText.destroy();
    	    introTitleText.destroy();
    }
    
    function killCards() //clear two turned cards
    {
    	    firstCard.destroy();
    	    secondCard.destroy();
    }
    
    function checkWin() //end game state
    {
    	    music.stop();
    	    gameRunning = 0;
    	    if (matchesRemaining < 1)
    	    {
    	    	    game.add.sprite(0, 0, 'back');
    	    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    	    introTitleText.anchor.set(0.5);
    	    	    introText = game.add.text(500, 250, 'You have matched all the pairs in time.\nGood job!', textStyle);
    	    	    introText.anchor.set(0.5);
    	    }
    	    else
    	    {
    	    	    game.add.sprite(0, 0, 'back');
    	    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    	    introTitleText.anchor.set(0.5);
    	    	    introText = game.add.text(500, 250, 'You failed to match all the pairs in time.\nSorry.', textStyle);
    	    	    introText.anchor.set(0.5);
    	    }
    }
    //check each memory card location
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card0;
    	    	    		   if (cardList[0] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card1;
    	    	    		   if (cardList[1] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card2;
    	    	    		   if (cardList[2] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card3;
    	    	    		   if (cardList[3] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card4;
    	    	    		   if (cardList[4] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card5;
    	    	    		   if (cardList[5] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card6;
    	    	    		   if (cardList[6] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card7;
    	    	    		   if (cardList[7] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card8Check(avatar, card8)
    {
    	    if (firstBackCard != card8)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 205, cardList[8]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[8];
    	    	   	   	   firstBackCard = card8;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 205, cardList[8]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card8;
    	    	    		   if (cardList[8] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card9Check(avatar, card9)
    {
    	    if (firstBackCard != card9)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(205, 205, cardList[9]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[9];
    	    	   	   	   firstBackCard = card9;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(205, 205, cardList[9]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card9;
    	    	    		   if (cardList[9] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card10Check(avatar, card10)
    {
    	    if (firstBackCard != card10)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(315, 205, cardList[10]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[10];
    	    	   	   	   firstBackCard = card10;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(315, 205, cardList[10]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card10;
    	    	    		   if (cardList[10] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card11Check(avatar, card11)
    {
    	    if (firstBackCard != card11)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(425, 205, cardList[11]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[11];
    	    	   	   	   firstBackCard = card11;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(425, 205, cardList[11]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card11;
    	    	    		   if (cardList[11] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card12Check(avatar, card12)
    {
    	    if (firstBackCard != card12)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(535, 205, cardList[12]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[12];
    	    	   	   	   firstBackCard = card12;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(535, 205, cardList[12]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card12;
    	    	    		   if (cardList[12] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card13Check(avatar, card13)
    {
    	    if (firstBackCard != card13)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(645, 205, cardList[13]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[13];
    	    	   	   	   firstBackCard = card13;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(645, 205, cardList[13]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card13;
    	    	    		   if (cardList[13] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card14Check(avatar, card14)
    {
    	    if (firstBackCard != card14)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(755, 205, cardList[14]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[14];
    	    	   	   	   firstBackCard = card14;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(755, 205, cardList[14]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card14;
    	    	    		   if (cardList[14] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card15Check(avatar, card15)
    {
    	    if (firstBackCard != card15)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(865, 205, cardList[15]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[15];
    	    	   	   	   firstBackCard = card15;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(865, 205, cardList[15]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card15;
    	    	    		   if (cardList[15] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card16Check(avatar, card16)
    {
    	    if (firstBackCard != card16)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 315, cardList[16]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[16];
    	    	   	   	   firstBackCard = card16;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 315, cardList[16]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card16;
    	    	    		   if (cardList[16] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card17Check(avatar, card17)
    {
    	    if (firstBackCard != card17)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(205, 315, cardList[17]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[17];
    	    	   	   	   firstBackCard = card17;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(205, 315, cardList[17]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card17;
    	    	    		   if (cardList[17] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card18Check(avatar, card18)
    {
    	    if (firstBackCard != card18)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(315, 315, cardList[18]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[18];
    	    	   	   	   firstBackCard = card18;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(315, 315, cardList[18]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card18;
    	    	    		   if (cardList[18] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card19Check(avatar, card19)
    {
    	    if (firstBackCard != card19)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(425, 315, cardList[19]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[19];
    	    	   	   	   firstBackCard = card19;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(425, 315, cardList[19]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card19;
    	    	    		   if (cardList[19] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card20Check(avatar, card20)
    {
    	    if (firstBackCard != card20)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(535, 315, cardList[20]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[20];
    	    	   	   	   firstBackCard = card20;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(535, 315, cardList[20]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card20;
    	    	    		   if (cardList[20] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card21Check(avatar, card21)
    {
    	    if (firstBackCard != card21)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(645, 315, cardList[21]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[21];
    	    	   	   	   firstBackCard = card21;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(645, 315, cardList[21]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card21;
    	    	    		   if (cardList[21] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card22Check(avatar, card22)
    {
    	    if (firstBackCard != card22)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(755, 315, cardList[22]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[22];
    	    	   	   	   firstBackCard = card22;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(755, 315, cardList[22]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card22;
    	    	    		   if (cardList[22] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card23Check(avatar, card23)
    {
    	    if (firstBackCard != card23)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(865, 315, cardList[23]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[23];
    	    	   	   	   firstBackCard = card23;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(865, 315, cardList[23]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card23;
    	    	    		   if (cardList[23] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card24Check(avatar, card24)
    {
    	    if (firstBackCard != card24)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(95, 425, cardList[24]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[24];
    	    	   	   	   firstBackCard = card24;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(95, 425, cardList[24]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card24;
    	    	    		   if (cardList[24] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card25Check(avatar, card25)
    {
    	    if (firstBackCard != card25)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(205, 425, cardList[25]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[25];
    	    	   	   	   firstBackCard = card25;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(205, 425, cardList[25]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card25;
    	    	    		   if (cardList[25] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card26Check(avatar, card26)
    {
    	    if (firstBackCard != card26)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(315, 425, cardList[26]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[26];
    	    	   	   	   firstBackCard = card26;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(315, 425, cardList[26]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card26;
    	    	    		   if (cardList[26] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card27Check(avatar, card27)
    {
    	    if (firstBackCard != card27)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(425, 425, cardList[27]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[27];
    	    	   	   	   firstBackCard = card27;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(425, 425, cardList[27]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card27;
    	    	    		   if (cardList[27] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card28Check(avatar, card28)
    {
    	    if (firstBackCard != card28)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(535, 425, cardList[28]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[28];
    	    	   	   	   firstBackCard = card28;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(535, 425, cardList[28]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card28;
    	    	    		   if (cardList[28] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card29Check(avatar, card29)
    {
    	    if (firstBackCard != card29)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(645, 425, cardList[29]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[29];
    	    	   	   	   firstBackCard = card29;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(645, 425, cardList[29]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card29;
    	    	    		   if (cardList[29] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card30Check(avatar, card30)
    {
    	    if (firstBackCard != card30)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(755, 425, cardList[30]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[30];
    	    	   	   	   firstBackCard = card30;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(755, 425, cardList[30]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card30;
    	    	    		   if (cardList[30] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
    
    function card31Check(avatar, card31)
    {
    	    if (firstBackCard != card31)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(865, 425, cardList[31]);
    	    	   	   	   cardGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[31];
    	    	   	   	   firstBackCard = card31;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(865, 425, cardList[31]);
    	    	   	   	   cardGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.5, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card31;
    	    	    		   if (cardList[31] === firstCardCheck)
    	    	    		   {
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.5, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
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
  
};
