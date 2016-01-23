/**
 *
 *
 *
 * Levels objects
 *
 *  getFirstLevel()
 *  getGameOver()
 *  getLevels()
 *
 * Each levels return the object of the nextLevel or null
 *
 *
 *  Level configuration :
 *
 *
 *
 *

    level_1: {
        **************************************

        //*** Levels transition

         title: "Level 1",
         short: "The house",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" +
         "Suspendisse posuere augue aliquam risus elementum, eu accumsan orci ullamcorper.",

        //*** Objectives possible

         enemiesToKill: 30,
         bossesToKill: 2,
         timeLimit: 10,

        //*** Maximum enemies, bosses showed on the screen

         maxEnemies: 10,
         maxBosses: 1,

        //*** Delay of spawn between each enemies or bosses

         minSpawnDelay: 250,
         maxSpawnDelay: 500,

        //*** Parameters of player

         playerParameters: {
                            health: 100,
                            minDmg: 3,
                            maxDmg: 7,
                            attackSize: 1
                            },

        //*** Parameters of bosses [david, rat]

         bossParameters: {
                                david: {
                                    maxBoss: 1, // number max of this type of boss in the same time
                                    health: 100000,
                                    dmg: 5000,
                                    score: 4242424242
                                },
                                rat: {
                                    maxBoss: 2, // number max of this type of boss in the same time
                                    health: 100000,
                                    dmg: 5000,
                                    score: 4242424242
                                }

                            },

         **************************************

        //*** Parameters of enemies [spider, worm, cockroach]

         enemyParameters: {
                                spider:{
                                    maxEnemy: 10, // number max of this type of enemy in the same time
                                    health: 20,
                                    dmg: 50,
                                    score: 200
                                },
                                worm:{
                                    maxEnemy: 10, // number max of this type of enemy in the same time
                                    health: 20,
                                    dmg: 50,
                                    score: 200
                                }
                            },

         **************************************

        //*** Parameters of tiles [poison, water, grass, ice]

         tiles: {
                                poison: {
                                    maxTiles: 0, // number max of this type of tile
                                    scale:4, // fixed size: random size if not specified (recommendation: scale 6 should be the max)
                                    dmg: 5
                                },
                                water: {
                                    maxTiles: 0,
                                    speedDecrease: 150
                                },
                                grass:{
                                    maxTiles: 0
                                },
                                ice:{
                                    maxTiles: 4,
                                    speedIncrease: 50
                                }
                            },

         **************************************

            //*** Parameters of events [wind, snow, rain, fog]
            // work well all in the same time. Don't have parameters for now
         events: {
                                wind: {},
                                snow: {},
                                rain: {},
                                fog: {}
                            },

         **************************************
     }
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */


(function() {
    'use strict';

    function Levels() {
    }

    Levels.prototype = {


        /*

        level 1 : House -- spiders
        level 2 : Garden -- worms + grass
        level 3 : City -- cockroaches, worms + rain + water
        level 4 : Sewers -- rat, cockroaches + poison
        level 5 : Train -- ??, ~wind, + poison
        level 6 : City -- spiders, worms, cockroaches + snow + wind + fog
        level 7 : School -- boss, spiders, worms, cockroaches

         */

        getFirstLevel: function () {
            return this.getLevels().level_1;
        },

        getGameOver: function(){
            return this.getLevels().over;
        },


        getLevels: function () {

            var levels;

            return levels = {




                /********************************************************
                 *  Level 1
                 *
                 *
                 *
                 *********************************************************/

                level_1: {
                    title: "Level 1",
                    short: "The house",
                    description: "It's 7am and Ken just woke up! He will miss his train for the school. He must hurry! \n" +
                    "Because of his small size, Ken have to fight against multiple dangers. \n" +
                    "So, he picked his toothpick to defend himself. \n" +
                    "Now.. He have to cross the kitchen full of spiders to go out...",

                    enemiesToKill: 30,
                    //timeLimit: 10,
                    //bossesToKill: 2,
                    maxEnemies: 5,
                    maxBosses: 0,
                    minSpawnDelay: 250,
                    maxSpawnDelay: 500,

                    nextLevel: function () {
                        return levels.level_2;
                    },

                    events: {
                        //wind: {},
                        //snow: {},
                        //rain: {},
                        //fog: {}
                    },

                    tiles: {
                        poison: {
                            maxTiles: 0,
                            scale:4,
                            dmg: 5
                        },
                        water: {
                            maxTiles: 0,
                            speedDecrease: 50
                        },
                        grass:{
                            maxTiles: 0
                        }
                    },

                    playerParameters: {
                        health: 100,
                        //minDmg: 3,
                        minDmg: 3,
                        //maxDmg: 7,
                        maxDmg: 7,
                        attackSize: 1
                    },


                    enemyParameters: {
                        spider: {
                            maxEnemy: 10,
                            health: 5,
                            dmg: 5,
                            score: 20
                        }
                    }
                },




                /********************************************************
                 *  Level 2
                 *
                 *
                 *
                 *********************************************************/

                level_2: {
                    title: "Level 2",
                    short: "The garden",
                    description: "Ken is now out. As soon he laid his foot in the garden, a big worm tried to eat him ! \n" +
                    "Quickly, ken dodge it and hit the worm right in his face. The worm died. \n" +
                    "Sadly for Ken, the sound of the dead worm has called all the worms of the garden. \n" +
                    "Ken must fight back if he want to survive.",
                    enemiesToKill: 60,
                    maxEnemies: 20,
                    minSpawnDelay: 750,
                    maxSpawnDelay: 1300,
                    nextLevel: function () {
                        return levels.level_3;
                    },

                    events: {
                         //wind: {},
                         //rain: {}
                    },

                    playerParameters: {
                        health: 200,
                        minDmg: 30,
                        maxDmg: 70,
                        attackSize: 1.5
                    },

                    enemyParameters: {
                        worm:{
                            maxEnemy: 20,
                            health: 35,
                            dmg: 15,
                            score: 200
                        }
                    },

                    tiles: {
                        grass:{
                            maxTiles: 7
                        }
                    }

                },




                /********************************************************
                 *  Level 3
                 *
                 *
                 *
                 *********************************************************/
                level_3: {
                    title: "Level 3",
                    short: "The city",
                    description: "Damn! The rain just started and to top it all off, the wind has risen. \n" +
                    "To take the train, Ken will have to survive the elements. \n" +
                    "It would be so much easier if the spiders would let him take the train.",
                    enemiesToKill: 75,
                    maxEnemies: 100,
                    minSpawnDelay: 350,
                    maxSpawnDelay: 1000,
                    nextLevel: function () {
                        return levels.level_4;
                    },

                    playerParameters: {
                        health: 500,
                        minDmg: 300,
                        maxDmg: 600,
                        attackSize: 2.5
                    },

                    enemyParameters: {
                        spider:{
                            maxEnemy: 30,
                            health: 400,
                            dmg: 45,
                            score: 2000
                        }
                    },
                    events: {
                        wind: {},
                        rain: {}
                    },

                    tiles: {
                        water: {
                            maxTiles: 4,
                            speedDecrease: 50
                        }
                    }
                },





                /********************************************************
                 *  Level 4
                 *
                 *
                 *
                 *********************************************************/
                level_4: {
                    title: "Level 4",
                    short: "The sewers",
                    description: "Oh no!! What bad luck! The wind carried off Ken into the sewers. \n" +
                    "This place is full of toxic products and cockroach. Ken must find a way to get out. \n" +
                    "Some rumors say that there are rats in the sewers...",
                    bossesToKill: 2,
                    maxEnemies: 25,
                    maxBosses: 2,
                    minSpawnDelay: 450,
                    maxSpawnDelay: 750,
                    nextLevel: function () {
                        return levels.level_5;
                    },

                    playerParameters: {
                        health: 1000,
                        minDmg: 3000,
                        maxDmg: 7000,
                        attackSize: 3
                    },


                    bossParameters: {
                        rat: {
                            maxBoss: 2,
                            health: 100000,
                            dmg: 200,
                            score: 1404545
                        }
                    },

                    enemyParameters: {
                        cockroach: {
                            maxEnemy: 75,
                            health: 3000,
                            dmg: 100,
                            score: 20000
                        }
                    },
                    tiles: {
                        poison: {
                            dmg: 5,
                            maxTiles: 3
                        }
                    }
                },



                /********************************************************
                 *  Level 5
                 *
                 *
                 *
                 *********************************************************/
                level_5: {
                    title: "Level 5",
                    short: "The train",
                    description: "Fuck yes! Ken finally took the train! He did it! \n" +
                    "But it seems that the cockroach aren't that died.\n" +
                    "It looks like they needed a new place for their home and the train was a perfect place.\n" +
                    "He wanted so hard to revise his math exam before the school. Seems that will not be today.",
                    timeLimit: 45,
                    maxEnemies: 100,
                    maxBosses: 0,
                    minSpawnDelay: 100,
                    maxSpawnDelay: 250,
                    nextLevel: function () {
                        return levels.level_6;
                    },

                    playerParameters: {
                        health: 2000,
                        minDmg: 6000,
                        maxDmg: 9000,
                        attackSize: 3
                    },

                    enemyParameters: {
                        cockroach: {
                            maxEnemy: 75,
                            health: 3000,
                            dmg: 100,
                            score: 20000
                        }
                    },
                    tiles: {
                        poison: {
                            dmg: 5,
                            maxTiles: 3
                        }
                    }
                },



                /********************************************************
                 *  Level 6
                 *
                 *
                 *
                 *********************************************************/
                level_6: {
                    title: "Level 6",
                    short: "Santa Cruz",
                    description: "Ken is so close to the school! Sadly, the fog, the wind and the snow are there. \n" +
                    "Ken is desperate. He feels like the whole world want to kill him. \n" +
                    "Even in this place, cold, windy and lost in the mountains, a bunch of spiders and\n" +
                    "worms want kill him. From where they come, by the way?",
                    enemiesToKill: 150,
                    maxEnemies: 100,
                    maxBosses: 0,
                    minSpawnDelay: 100,
                    maxSpawnDelay: 250,
                    nextLevel: function () {
                        return levels.level_7;
                    },

                    playerParameters: {
                        health: 2000,
                        minDmg: 6000,
                        maxDmg: 9000,
                        attackSize: 4
                    },

                    enemyParameters: {
                        spider: {
                            maxEnemy: 100,
                            health: 4500,
                            dmg: 250,
                            score: 20000
                        },
                        worm: {
                            maxEnemy: 100,
                            health: 5000,
                            dmg: 200,
                            score: 20000
                        }
                    },

                    events: {
                        snow: {},
                        wind: {},
                        fog: {}
                    },

                    tiles: {
                        ice:{
                            maxTiles: 4,
                            speedIncrease: 50
                        }
                    }


                },



                /********************************************************
                 *  Level 7
                 *
                 *
                 *
                 *********************************************************/
                level_7: {
                    title: "Level 7",
                    short: "The school",
                    description: "He did it! Ken is at the school! *Boom* But what is that noise? *Boom* \n" +
                    "Ken felt a earthquake *Boom*, he didn't need to look behind him. *Boom* He knew. *Boom* \n" +
                    "He knew that David was there...  \n" +
                    "David opened the insectarium of the science class and started to threw insects on Ken. \n" +
                    "Ken who doesn't want that anyone let him rot his day, decided this time, to fight back!",
                    bossesToKill: 1,
                    maxEnemies: 50,
                    maxBosses: 1,
                    minSpawnDelay: 100,
                    maxSpawnDelay: 250,
                    nextLevel: function () {
                        return levels.final;
                    },

                    playerParameters: {
                        health: 20000,
                        minDmg: 60000,
                        maxDmg: 100000,
                        attackSize: 5
                    },

                    bossParameters: {
                        david: {
                            maxBoss: 1,
                            health: 5000000,
                            dmg: 6000,
                            score: 10000000000
                        }
                    },

                    enemyParameters: {
                        spider: {
                            maxEnemy: 50,
                            health: 40000,
                            dmg: 1000,
                            score: 200000
                        },
                        worm: {
                            maxEnemy: 50,
                            health: 50000,
                            dmg: 1000,
                            score: 200000
                        },
                        cockroach: {
                            maxEnemy: 50,
                            health: 50000,
                            dmg: 1000,
                            score: 200000
                        }
                    }

                },

                over: {
                    title: "GAME OVER",
                    short: "",
                    description: "",
                    nextLevel: function () {
                        return null;
                    }
                },

                final: {
                    title: "YOU BEAT THE GAME",
                    short: "Thank you for playing",
                    description: "Ken have finally win of his bully. \n" +
                    "He feels stronger than before and very proud of himself. \n" +
                    "\n" +
                    "Has soon he took his place on his desk, a chill ran down his spine causing him to shiver. \n" +
                    "Ken saw his worst nightmare show up. \n" +
                    "He didn't had the time to revise and the math exam has started.",
                    nextLevel: function () {
                        return null;
                    }

                }





            };

        }





    };

    window['awaken'] = window['awaken'] || {};
    window['awaken'].Levels = Levels;
}());
