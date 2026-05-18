window.D20_CAMPAIGN_DATA = {
    SkillTree: true,
    races: [
        {
            name: "Human",
            passive: {
                name: "Versatile",
                icon: "human-pyramid.png",
                type: "race-passive",
                description: "Gain +1 to any two different skill checks of your choice."
            }
        },
        {
            name: "Elf",
            passive: {
                name: "Keen Senses",
                icon: "advancedperception.png",
                type: "race-passive",
                description: "Gain +2 to all perception-based checks."
            }
        },
        {
            name: "Beastman",
            skills: [
                {
                    name: "Savage Attack",
                    icon: "claw-slashes.png",
                    type: "race-skill",
                    description: "Once per battle, deal an extra 1d20 damage after a successful hit."
                }
            ]
        },
        {
            name: "Dwarf",
            passive: {
                name: "Stone Endurance",
                icon: "stone-shield.png",
                type: "race-passive",
                description: "Gain +2 to all endurance or constitution-based checks."
            },
            skills: [
                {
                    name: "Forge Mastery",
                    icon: "anvil-impact.png",
                    type: "race-skill",
                    description: "Craft weapons or armor with +1 quality when using a forge."
                }
            ]
        },
        {
            name: "Gnome",
            passive: {
                name: "Tinker’s Wit",
                icon: "gears.png",
                type: "race-passive",
                description: "Gain +2 to all checks involving mechanical or arcane devices."
            },
            skills: [
                {
                    name: "Gadget Trap",
                    icon: "spiky-pit.png",
                    type: "race-skill",
                    description: "Set a trap that deals 1d20 damage and immobilizes an enemy for 1 turn."
                }
            ]
        },
        {
            name: "Halfling",
            passive: {
                name: "Lucky Foot",
                icon: "clover.png",
                type: "race-passive",
                description: "Reroll any failed skill check once per session."
            }
        },
        {
            name: "Orc",
            passive: {
                name: "Brutal Strength",
                icon: "muscle-up.png",
                type: "race-passive",
                description: "Gain +2 to all strength-based checks."
            },
            skills: [
                {
                    name: "Berserk Charge",
                    icon: "sprint.png",
                    type: "race-skill",
                    description: "Charge an enemy, gaining +1d20 damage on your next attack."
                }
            ]
        },
        {
            name: "Tiefling",
            passive: {
                name: "Infernal Resistance",
                icon: "fire-shield.png",
                type: "race-passive",
                description: "Gain +2 to saving throws against fire or demonic effects."
            },
            skills: [
                {
                    name: "Hellfire Bolt",
                    icon: "fireball.png",
                    type: "race-skill",
                    description: "Cast a fire bolt dealing 1d20 fire damage once per battle."
                }
            ]
        },
        {
            name: "Dragonborn",
            passive: {
                name: "Draconic Scales",
                icon: "dragon-head.png",
                type: "race-passive",
                description: "Reduce all incoming physical damage by 2."
            },
            skills: [
                {
                    name: "Dragon Breath",
                    icon: "dragon-breath.png",
                    type: "race-skill",
                        description: "Unleash a breath attack dealing 2d20 elemental damage (choose fire, ice, or acid) once per battle."
                }
            ]
        },
        {
            name: "Goblin",
            passive: {
                name: "Nimble Escape",
                icon: "sneaky.png",
                type: "race-passive",
                description: "Gain +2 to all stealth and escape checks."
            },
            skills: [
                {
                    name: "Quick Bomb",
                    icon: "bomb-explosion.png",
                    type: "race-skill",
                    description: "Throw a small explosive dealing 1d20 damage to enemies in a small radius."
                }
            ]
        },
        {
            name: "Kobold",
            passive: {
                name: "Cunning Instinct",
                icon: "trap-mask.png",
                type: "race-passive",
                description: "Gain +2 to all trap detection and disarming checks."
            },
            skills: [
                {
                    name: "Scavenger’s Strike",
                    icon: "dagger-throw.png",
                    type: "race-skill",
                    description: "Throw a scavenged weapon for 1d20 damage, with a chance to inflict a random debuff."
                }
            ]
        },
        {
            name: "Aasimar",
            passive: {
                name: "Celestial Glow",
                icon: "holy-light.png",
                type: "race-passive",
                description: "Emit a soft light, granting +2 to charisma-based checks in social situations."
            },
            skills: [
                {
                    name: "Radiant Burst",
                    icon: "light-explosion.png",
                    type: "race-skill",
                    description: "Release a burst of holy light, dealing 1d20 damage to undead within a small radius."
                }
            ]
        },
        {
            name: "Lizardfolk",
            passive: {
                name: "Scaly Resilience",
                icon: "lizard-skin.png",
                type: "race-passive",
                description: "Gain +2 to saving throws against poison and disease."
            },
            skills: [
                {
                    name: "Tail Whip",
                    icon: "tail-swipe.png",
                    type: "race-skill",
                    description: "Knock back an enemy, dealing 1d20 damage and forcing them to lose their next action."
                }
            ]
        },
        {
            name: "Goliath",
            passive: {
                name: "Mountain’s Might",
                icon: "stone-giant.png",
                type: "race-passive",
                description: "Gain +2 to all checks involving lifting or breaking objects."
            },
            skills: [
                {
                    name: "Boulder Toss",
                    icon: "rock-throw.png",
                    type: "race-skill",
                        description: "Hurl a large rock, dealing 2d20 damage to a single target."
                }
            ]
        },
        {
            name: "Genasi",
            passive: {
                name: "Elemental Kin",
                icon: "elemental-spark.png",
                type: "race-passive",
                description: "Gain +2 to checks related to your chosen element (fire, water, air, or earth)."
            },
            skills: [
                {
                    name: "Elemental Pulse",
                    icon: "elemental-wave.png",
                    type: "race-skill",
                    description: "Unleash a pulse of your chosen element, dealing 1d20 damage to nearby enemies."
                }
            ]
        },
        {
            name: "Catfolk",
            passive: {
                name: "Feline Agility",
                icon: "cat-paw.png",
                type: "race-passive",
                description: "Gain +2 to all agility and reflex checks."
            },
            skills: [
                {
                    name: "Pounce",
                    icon: "claw-slashes.png",
                    type: "race-skill",
                    description: "Leap onto an enemy, dealing 1d20 damage and gaining +1 on your next attack."
                }
            ]
        },
        {
            name: "Dhampir",
            passive: {
                name: "Vampiric Resilience",
                icon: "vampire-bite.png",
                type: "race-passive",
                description: "Gain +2 to saving throws against necrotic damage and blood-based effects."
            },
            skills: [
                {
                    name: "Blood Drain",
                    icon: "blood-drop.png",
                    type: "race-skill",
                    description: "Target an enemy and drain 1d20 health, healing yourself for the same amount."
                }
            ]
        },
        {
            name: "Bugbear",
            passive: {
                name: "Savage Instinct",
                icon: "bear-trap.png",
                type: "race-passive",
                description: "Gain +2 to intimidation checks and +1 to damage when making surprise attacks."
            },
            skills: [
                {
                    name: "Ambush Strike",
                    icon: "sneak-attack.png",
                    type: "race-skill",
                    description: "Strike from hiding, dealing 2d20 damage on a successful stealth check."
                }
            ]
        },
        {
            name: "Ashborn",
            passive: {
                name: "Ember Heart",
                icon: "coal.png",
                type: "race-passive",
                description: "Gain +2 to fire-based damage and +1 resistance to all fire effects."
            },
            skills: [
                {
                    name: "Ember Flare",
                    icon: "flame-burst.png",
                    type: "race-skill",
                    description: "Burst into flames, dealing 1d20 damage to nearby enemies and igniting them."
                }
            ]
        },
        {
            name: "Jerbeen",
            passive: {
                name: "Desert Runner",
                icon: "sprint.png",
                type: "race-passive",
                description: "Gain +2 to agility and navigation checks in arid environments."
            },
            skills: [
                {
                    name: "Sand Manipulation",
                    icon: "sand-wave.png",
                    type: "race-skill",
                    description: "Control sand to blind an enemy or create a barrier, gaining +1 to dodge for 1 turn."
                }
            ]
        }
    ],
    classes: [
        {
            name: "Knight",
            subclasslevel: 15,
            passive: {
                name: "Sword Mastery",
                icon: "Sword.png",
                type: "class-passive",
                AS: "S",
                description: "Gain +1 item slot for Swords."
            },
            skills: [
                {
                    name: "Taunt",
                    icon: "locked-on.png",
                    type: "class-skill",
                    description: "Force an enemy to target you instead of allies for one turn."
                }
            ],
            subclasses: [
                {
                    name: "Paladin",
                    passive: {
                        name: "Divine Protection",
                        icon: "ankh.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all saving throws against dark magic."
                    },
                    skills: [
                        {
                            name: "Holy Smite",
                            icon: "zeus-sword.png",
                            type: "class-sub-skill",
                            description: "Deal extra damage to undead or demonic creatures."
                        }
                    ]
                },
                {
                    name: "Magical Knight",
                    passive: {
                        name: "Controlled Magic",
                        icon: "fire-spell-cast.png",
                        type: "class-sub-passive",
                        description: "Control over naturally occurring elements. Must match player's affinity."
                    },
                    skills: [
                        {
                            name: "Spell Craft",
                            icon: "spell-book.png",
                            type: "class-sub-skill",
                            description: "Create spells with certain conditions. Requires GM approval, and keep spells in your notes."
                        },
                        {
                            name: "Elemental Summoning",
                            icon: "pentagram-rose.png",
                            type: "class-sub-skill",
                            description: "Summon a temporary elemental ally to fight alongside you. Allies gain half your health and deal 1d20/2 damage per turn."
                        }
                    ]
                },
                {
                    name: "Dark Knight",
                    passive: {
                        name: "Shadow Blade",
                        icon: "sword-shadow.png",
                        type: "class-sub-passive",
                        AS: "D",
                        description: "Gain +1 item slot for cursed or dark-aligned swords."
                    },
                    skills: [
                        {
                            name: "Blood Slash",
                            icon: "bleeding-wound.png",
                            type: "class-sub-skill",
                            description: "Sacrifice 1D20-5 of your health to deal double damage on your next sword attack."
                        }
                    ]
                }
            ]
        },
        {
            name: "Rogue",
            subclasslevel: 10,
            passive: {
                name: "Hidden Blade",
                icon: "cloak-dagger.png",
                type: "class-passive",
                AS: "D",
                description: "Gain +1 item slot for daggers."
            },
            skills: [
                 {
                    name: "Shadowstep Gambit",
                    icon: "hidden.png",
                    type: "class-skill",
                    description: "Once per turn, roll 1d20 (Agility) to move unseen. Nearby entities roll 1d20; if they tie or beat your result, they detect you."
                },
                {
                    name: "Backstab",
                    icon: "backstab.png",
                    type: "class-skill",
                    description: "Once per target, per battle, deal +1d20/2 bonus damage when attacking from stealth."
                }
            ],
            subclasses: [
                {
                    name: "Trickster",
                    skills: [
                        {
                            name: "Illusion",
                            icon: "magick-trick.png",
                            type: "class-sub-skill",
                            description: "Create a temporary illusion to distract enemies. Illusion lasts for 1 turn in battle and cannot attack."
                        }
                    ]
                },
                {
                    name: "Assassin",
                    passive: {
                        name: "Silent Strike",
                        icon: "skull-knife.png",
                        type: "class-sub-passive",
                        description: "Gain +2 towards Might on your first successful stealth attack each battle."
                    },
                    skills: [
                        {
                            name: "Death Mark",
                            icon: "skull-crossed-bones.png",
                            type: "class-sub-skill",
                            description: "Once per battle, mark an enemy for 2 turns. Your next successful stealth attack against that target deals an additional +1d20/2 (Rounded Down) damage."
                        }
                    ]
                },
                {
                    name: "Thief",
                    passive: {
                        name: "Swift Steal",
                        icon: "steal.png",
                        type: "class-sub-skill",
                        description: "Steal an item from an enemy without breaking stealth."
                    },
                    skills: [
                        {
                        name: "Quick Fingers",
                        icon: "hand-pocket.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to sleight-of-hand."
                        }
                    ]
                }
            ]
        },
        {
            name: "Archer",
            subclasslevel: 9,
            passive: {
                name: "Quiver Mastery",
                icon: "bow-arrow.png",
                type: "class-passive",
                AS: "B",
                description: "Gain +1 item slot for bows. Never run out of standard arrows."
            },
            skills: [
                {
                    name: "Piercing Shot",
                    icon: "wide-arrow-dunk.png",
                    type: "class-skill",
                    description: "Ignore defense on your next attack. Requires a bow equipped."
                }
            ],
            subclasses: [
                {
                    name: "Hunter",
                    passive: {
                        name: "Beast Tracker",
                        icon: "paw-print.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to tracking and hunting checks."
                    }
                },
                {
                    name: "Sniper",
                    passive: {
                        name: "Deadeye",
                        icon: "bullseye.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to accuracy checks."
                    },
                    skills: [
                        {
                            name: "Snipe",
                            icon: "target-shot.png",
                            type: "class-sub-skill",
                            description: "Deal triple damage to a single target from long range."
                        }
                    ]
                },
                {
                    name: "Ranger",
                    passive: {
                        name: "Nature’s Stride",
                        icon: "boot-prints.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to agility and survival checks in natural environments."
                    },
                    skills: [
                        {
                            name: "Volley",
                            icon: "arrow-rain.png",
                            type: "class-sub-skill",
                            description: "Fire a volley of arrows, dealing 1d20 damage to up to three enemies."
                        }
                    ]
                }
            ]
        },
        {
            name: "Magician",
            subclasslevel: 12,
            passive: {
                name: "There's My Wand!",
                icon: "wand.png",
                type: "class-passive",
                AS: "W",
                description: "Gain +1 item slot for magical wands or catalysts."
            },
            skills: [
                {
                    name: "Elemental Burst",
                    icon: "burning-dot.png",
                    type: "class-skill",
                    description: "Deal +1d20 bonus damage based on Affinity on hit."
                }
            ],
            subclasses: [
                {
                    name: "Enchanter",
                    passive: {
                        name: "Arcane Knowledge",
                        icon: "wax-tablet.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all magical knowledge checks."
                    },
                    skills: [
                        {
                            name: "Enchant Item",
                            icon: "magic-swirl.png",
                            type: "class-sub-skill",
                            description: "Temporarily enchant an item to give it magical properties. Lasts for 4 turns."
                        }
                    ]
                },
                {
                    name: "Sorcerer",
                    passive: {
                        name: "Mana Surge",
                        icon: "mana-wave.png",
                        type: "class-sub-passive",
                        AS: "M",
                        description: "Gain +1 item slot for magical catalysts and +2 to spell damage."
                    },
                    skills: [
                        {
                            name: "Arcane Barrage",
                            icon: "magic-missile.png",
                            type: "class-sub-skill",
                            description: "Unleash a volley of 3 arcane bolts, each dealing 1d20 damage."
                        }
                    ]
                },
                {
                    name: "Summoner",
                    passive: {
                        name: "Binding Pact",
                        icon: "summon-circle.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to summoning and binding checks."
                    },
                    skills: [
                        {
                            name: "Conjure Familiar",
                            icon: "familiar-spirit.png",
                            type: "class-sub-skill",
                            description: "Summon a magical familiar that aids in scouting or combat for 3 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Cleric",
            subclasslevel: 11,
            passive: {
                name: "Divine Grace",
                icon: "holy-grail.png",
                type: "class-passive",
                description: "Gain +2 to all healing spell effects."
            },
            skills: [
                {
                    name: "Healing Light",
                    icon: "light-heal.png",
                    type: "class-skill",
                        description: "Heal an ally for 2d20 health."
                }
            ],
            subclasses: [
                {
                    name: "Priest",
                    passive: {
                        name: "Sacred Aura",
                        icon: "aura.png",
                        type: "class-sub-passive",
                        AS: "H",
                        description: "Gain +1 item slot for holy relics and +2 to divine spell effects."
                    },
                    skills: [
                        {
                            name: "Divine Shield",
                            icon: "holy-shield.png",
                            type: "class-sub-skill",
                                description: "Grant an ally a shield that absorbs 2d20 damage for 2 turns."
                        }
                    ]
                },
                {
                    name: "Oracle",
                    passive: {
                        name: "Prophetic Vision",
                        icon: "eye-of-truth.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all foresight and divination checks."
                    },
                    skills: [
                        {
                            name: "Foresight",
                            icon: "future-sight.png",
                            type: "class-sub-skill",
                            description: "Predict an enemy’s next move, granting +2 to dodge or counterattack."
                        }
                    ]
                },
                {
                    name: "Crusader",
                    passive: {
                        name: "Holy Zeal",
                        icon: "crossed-swords.png",
                        type: "class-sub-passive",
                        AS: "C",
                        description: "Gain +1 item slot for maces and +2 to melee damage against unholy creatures."
                    },
                    skills: [
                        {
                            name: "Smite Evil",
                            icon: "holy-hammer.png",
                            type: "class-sub-skill",
                                description: "Deal 2d20 damage to an unholy creature with a melee attack."
                        }
                    ]
                }
            ]
        },
        {
            name: "Barbarian",
            subclasslevel: 13,
            passive: {
                name: "Rage",
                icon: "fist-fire.png",
                type: "class-passive",
                description: "Gain +2 to attack damage while below 50% health."
            },
            skills: [
                {
                    name: "Frenzied Strike",
                    icon: "axe-swing.png",
                    type: "class-skill",
                        description: "Deal 2d20 damage but take 1d20 recoil damage."
                }
            ],
            subclasses: [
                {
                    name: "Berserker",
                    passive: {
                        name: "Bloodlust",
                        icon: "bloodlust.png",
                        type: "class-sub-passive",
                        AS: "B",
                        description: "Gain +1 item slot for axes and +2 to damage when below 50% health."
                    },
                    skills: [
                        {
                            name: "Rampage",
                            icon: "war-axe.png",
                            type: "class-sub-skill",
                            description: "Attack all enemies in a small radius for 1d20 damage each."
                        }
                    ]
                },
                {
                    name: "Totem Warrior",
                    passive: {
                        name: "Spirit Bond",
                        icon: "totem.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all spiritual or nature-based checks."
                    },
                    skills: [
                        {
                            name: "Totem Call",
                            icon: "spirit-wolf.png",
                            type: "class-sub-skill",
                            description: "Summon a spiritual animal that aids in battle for 3 turns."
                        }
                    ]
                },
                {
                    name: "Warlord",
                    passive: {
                        name: "Battle Cry",
                        icon: "war-shout.png",
                        type: "class-sub-passive",
                        AS: "W",
                        description: "Gain +1 item slot for warhammers and +2 to intimidation checks."
                    },
                    skills: [
                        {
                            name: "Rallying Shout",
                            icon: "war-cry.png",
                            type: "class-sub-skill",
                            description: "Inspire allies, granting +1 to attack rolls for 2 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Druid",
            subclasslevel: 12,
            passive: {
                name: "Nature’s Bond",
                icon: "tree-branch.png",
                type: "class-passive",
                description: "Gain +2 to all nature-based checks and animal interactions."
            },
            skills: [
                {
                    name: "Wild Shape",
                    icon: "wolf-head.png",
                    type: "class-skill",
                    description: "Transform into an animal, gaining its abilities for 3 turns."
                }
            ],
            subclasses: [
                {
                    name: "Shapeshifter",
                    passive: {
                        name: "Beast Mastery",
                        icon: "beast-form.png",
                        type: "class-sub-passive",
                        AS: "N",
                        description: "Gain +1 item slot for druidic totems and +2 to transformation effects."
                    },
                    skills: [
                        {
                            name: "Dire Form",
                            icon: "bear-head.png",
                            type: "class-sub-skill",
                                description: "Transform into a powerful beast, gaining +2 strength and 2d20 health."
                        }
                    ]
                },
                {
                    name: "Elementalist",
                    passive: {
                        name: "Elemental Harmony",
                        icon: "elemental-circle.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all elemental spell effects."
                    },
                    skills: [
                        {
                            name: "Storm Call",
                            icon: "lightning-bolt.png",
                            type: "class-sub-skill",
                            description: "Summon a storm that deals 1d20 lightning damage to all enemies."
                        }
                    ]
                },
                {
                    name: "Guardian",
                    passive: {
                        name: "Earth’s Ward",
                        icon: "stone-wall.png",
                        type: "class-sub-passive",
                        AS: "E",
                        description: "Gain +1 item slot for staves and +2 to defensive nature spells."
                    },
                    skills: [
                        {
                            name: "Vine Barrier",
                            icon: "vine-shield.png",
                            type: "class-sub-skill",
                                description: "Summon a barrier of vines that absorbs 2d20 damage for 2 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Monk",
            subclasslevel: 10,
            passive: {
                name: "Inner Peace",
                icon: "lotus.png",
                type: "class-passive",
                description: "Gain +2 to all mental resilience and meditation checks."
            },
            skills: [
                {
                    name: "Flurry of Blows",
                    icon: "fist-strike.png",
                    type: "class-skill",
                    description: "Make two unarmed attacks in a single turn, each dealing 1d20 damage."
                }
            ],
            subclasses: [
                {
                    name: "Shadow Monk",
                    passive: {
                        name: "Shadow Step",
                        icon: "shadow-cloak.png",
                        type: "class-sub-passive",
                        AS: "S",
                        description: "Gain +1 item slot for monk weapons and +2 to stealth agility checks."
                    },
                    skills: [
                        {
                            name: "Shadow Strike",
                            icon: "shadow-grasp.png",
                            type: "class-sub-skill",
                            description: "Teleport behind an enemy and deal 1d20 damage."
                        }
                    ]
                },
                {
                    name: "Zen Master",
                    passive: {
                        name: "Serenity",
                        icon: "zen-circle.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all saving throws against mental effects."
                    },
                    skills: [
                        {
                            name: "Tranquil Touch",
                            icon: "healing-hand.png",
                            type: "class-sub-skill",
                            description: "Calm an enemy, preventing them from attacking for 1 turn."
                        }
                    ]
                },
                {
                    name: "Iron Fist",
                    passive: {
                        name: "Steel Body",
                        icon: "iron-fist.png",
                        type: "class-sub-passive",
                        AS: "I",
                        description: "Gain +1 item slot for gauntlets and +2 to unarmed attack damage."
                    },
                    skills: [
                        {
                            name: "Thunder Punch",
                            icon: "thunder-fist.png",
                            type: "class-sub-skill",
                                description: "Deliver a punch that deals 1d20 damage and stuns the enemy for 1 turn."
                        }
                    ]
                }
            ]
        },
        {
            name: "Bard",
            subclasslevel: 10,
            passive: {
                name: "Inspiring Presence",
                icon: "music-note.png",
                type: "class-passive",
                description: "Gain +2 to all charisma-based checks when inspiring allies."
            },
            skills: [
                {
                    name: "Song of Courage",
                    icon: "lyre.png",
                    type: "class-skill",
                    description: "Grant all allies +2 to attack rolls for 2 turns."
                }
            ],
            subclasses: [
                {
                    name: "Skald",
                    passive: {
                        name: "War Chant",
                        icon: "battle-horn.png",
                        type: "class-sub-passive",
                        AS: "B",
                        description: "Gain +1 item slot for instruments and +2 to buffing song effects."
                    },
                    skills: [
                        {
                            name: "Battle Hymn",
                            icon: "war-drum.png",
                            type: "class-sub-skill",
                            description: "Increase allies’ damage by 1d20 for 2 turns."
                        }
                    ]
                },
                {
                    name: "Minstrel",
                    passive: {
                        name: "Charming Melody",
                        icon: "harp.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to persuasion and deception checks."
                    },
                    skills: [
                        {
                            name: "Enthralling Tune",
                            icon: "charm-song.png",
                            type: "class-sub-skill",
                            description: "Charm an enemy, preventing them from attacking for 1 turn."
                        }
                    ]
                },
                {
                    name: "Lorekeeper",
                    passive: {
                        name: "Tale Weaver",
                        icon: "scroll-quill.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to all knowledge checks."
                    },
                    skills: [
                        {
                            name: "Legendary Saga",
                            icon: "story-book.png",
                            type: "class-sub-skill",
                            description: "Recount a tale, granting allies +2 to saving throws for 2 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Warlock",
            subclasslevel: 11,
            passive: {
                name: "Pact Boon",
                icon: "dark-pact.png",
                type: "class-passive",
                description: "Gain +2 to checks related to your patron’s domain."
            },
            skills: [
                {
                    name: "Eldritch Blast",
                    icon: "dark-bolt.png",
                    type: "class-skill",
                        description: "Fire a blast of dark energy, dealing 2d20 damage."
                }
            ],
            subclasses: [
                {
                    name: "Fiend Pact",
                    passive: {
                        name: "Hellish Vigor",
                        icon: "fire-shield.png",
                        type: "class-sub-passive",
                        AS: "F",
                        description: "Gain +1 item slot for demonic relics and +2 to fire-based spell damage."
                    },
                    skills: [
                        {
                            name: "Infernal Chains",
                            icon: "chain-fire.png",
                            type: "class-sub-skill",
                            description: "Bind an enemy with fiery chains, dealing 1d20 damage and immobilizing them for 1 turn."
                        }
                    ]
                },
                {
                     name: "Unfamiliar Pact",
                    passive: {
                        name: "Curiosity Deal",
                        icon: "twirly-flower.png",
                        type: "class-sub-passive",
                        description: "Throughout The Campaign; Curiosity will show up and give world altering gifts that may appear and disappear"
                    },
                    skills: [
                        {
                            name: "Curious Gaze",
                            icon: "eldritch-eye.png",
                            type: "class-sub-skill",
                            description: "Roll 1d20 and Affict a target with 'Curiosity Effect' for 3 turns, The Result of your roll becomes the DC for the status effect. Also the target must roll at the start of their turn and if the result is 7 or lower, the target is confused and cannot take actions. (Cooldown 2 turns)."
                        }
                    ]
                },
                {
                    name: "Fey Pact",
                    passive: {
                        name: "Fey Charm",
                        icon: "fey-wings.png",
                        type: "class-sub-passive",
                        AS: "Y",
                        description: "Gain +1 item slot for fey artifacts and +2 to enchantment spells."
                    },
                    skills: [
                        {
                            name: "Fey Step",
                            icon: "fey-portal.png",
                            type: "class-sub-skill",
                            description: "Teleport a short distance and gain +2 to dodge for 1 turn."
                        }
                    ]
                }
            ]
        },
        {
            name: "Necromancer",
            subclasslevel: 12,
            passive: {
                name: "Death’s Touch",
                icon: "skull-hand.png",
                type: "class-passive",
                description: "Gain +2 to all necromantic spell effects."
            },
            skills: [
                {
                    name: "Raise Dead",
                    icon: "skeleton-rise.png",
                    type: "class-skill",
                    description: "Raise a fallen enemy as a skeleton minion with 1d20 health for 3 turns."
                }
            ],
            subclasses: [
                {
                    name: "Death Knight",
                    passive: {
                        name: "Grave Blade",
                        icon: "sword-shadow.png",
                        type: "class-sub-passive",
                        AS: "K",
                        description: "Gain +1 item slot for necromantic weapons and +2 to melee damage with them."
                    },
                    skills: [
                        {
                            name: "Soul Slash",
                            icon: "soul-reap.png",
                            type: "class-sub-skill",
                                description: "Strike an enemy for 2d20 damage, healing yourself for half the damage dealt."
                        }
                    ]
                },
                {
                    name: "Lich",
                    passive: {
                        name: "Phylactery",
                        icon: "soul-jar.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to saving throws against death effects."
                    },
                    skills: [
                        {
                            name: "Death’s Grasp",
                            icon: "death-hand.png",
                            type: "class-sub-skill",
                            description: "Drain an enemy’s life force, dealing 1d20 damage and healing yourself for the same amount."
                        }
                    ]
                },
                {
                    name: "Bone Weaver",
                    passive: {
                        name: "Skeletal Mastery",
                        icon: "bone-pile.png",
                        type: "class-sub-passive",
                        AS: "N",
                        description: "Gain +1 item slot for necromantic catalysts and +2 to summoned minion health."
                    },
                    skills: [
                        {
                            name: "Bone Storm",
                            icon: "bone-shard.png",
                            type: "class-sub-skill",
                            description: "Unleash a storm of bones, dealing 1d20 damage to all enemies in a small radius."
                        }
                    ]
                }
            ]
        },
        {
            name: "Mystic",
            subclasslevel: 11,
            passive: {
                name: "Psion's Mind",
                icon: "mind-spark.png",
                type: "class-passive",
                description: "Gain +2 to all mental and telepathic checks."
            },
            skills: [
                {
                    name: "Mental Blast",
                    icon: "psionic-bolt.png",
                    type: "class-skill",
                    description: "Focus your mind to strike an enemy mentally, dealing 2d20 damage."
                }
            ],
            subclasses: [
                {
                    name: "Telepath",
                    passive: {
                        name: "Shared Mind",
                        icon: "mind-connection.png",
                        type: "class-sub-passive",
                        AS: "T",
                        description: "Gain +1 item slot for mental anchors and +2 to telepathy range."
                    },
                    skills: [
                        {
                            name: "Mental Link",
                            icon: "telepathy.png",
                            type: "class-sub-skill",
                            description: "Link minds with allies, allowing them to share information and grant +1 to insight checks."
                        }
                    ]
                },
                {
                    name: "Mind Mender",
                    passive: {
                        name: "Psychic Restoration",
                        icon: "heal-mind.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to checks for healing mental or emotional trauma."
                    },
                    skills: [
                        {
                            name: "Psychic Mend",
                            icon: "mind-heal.png",
                            type: "class-sub-skill",
                            description: "Mend an ally's mental wounds, healing 2d20 health and removing one negative mental effect."
                        }
                    ]
                },
                {
                    name: "Psion Warrior",
                    passive: {
                        name: "Mind over Matter",
                        icon: "force-push.png",
                        type: "class-sub-passive",
                        AS: "P",
                        description: "Gain +1 item slot for psionic foci and +2 to psychokinetic abilities."
                    },
                    skills: [
                        {
                            name: "Telekinetic Strike",
                            icon: "telekinesis.png",
                            type: "class-sub-skill",
                            description: "Use psychic force to manipulate objects and enemies, dealing 1d20 damage and moving them."
                        }
                    ]
                }
            ]
        },
        {
            name: "Alchemist",
            subclasslevel: 10,
            passive: {
                name: "Chemical Mastery",
                icon: "alembic.png",
                type: "class-passive",
                description: "Gain +2 to all alchemy and potion-making checks."
            },
            skills: [
                {
                    name: "Catalytic Reaction",
                    icon: "chemistry-flask.png",
                    type: "class-skill",
                    description: "Throw an alchemical mixture dealing 1d20 damage and applying a random effect."
                }
            ],
            subclasses: [
                {
                    name: "Elixir Master",
                    passive: {
                        name: "Brewing Expertise",
                        icon: "potion-bottle.png",
                        type: "class-sub-passive",
                        AS: "E",
                        description: "Gain +1 item slot for potions and +2 to potion effectiveness."
                    },
                    skills: [
                        {
                            name: "Bottled Fortune",
                            icon: "bottled-gift.png",
                            type: "class-sub-skill",
                            description: "Brew a potion that grants an ally +2 to their next roll, lasting 2 turns."
                        }
                    ]
                },
                {
                    name: "Explosionist",
                    passive: {
                        name: "Volatile Compounds",
                        icon: "bomb.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to checks involving explosive reactions and blast radius."
                    },
                    skills: [
                        {
                            name: "Explosive Synthesis",
                            icon: "explosion-burst.png",
                            type: "class-sub-skill",
                            description: "Create and detonate an explosive mixture, dealing 2d20 damage in a radius."
                        }
                    ]
                },
                {
                    name: "Transmuter",
                    passive: {
                        name: "Elemental Conversion",
                        icon: "transmute.png",
                        type: "class-sub-passive",
                        AS: "A",
                        description: "Gain +1 item slot for reagents and +2 to transmutation spells."
                    },
                    skills: [
                        {
                            name: "Material Transform",
                            icon: "shape-shift.png",
                            type: "class-sub-skill",
                            description: "Transform one material into another or change an object's properties for 3 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Artificer",
            subclasslevel: 12,
            passive: {
                name: "Crafted Genius",
                icon: "tool-box.png",
                type: "class-passive",
                description: "Gain +2 to crafting and engineering checks."
            },
            skills: [
                {
                    name: "Automated Defense",
                    icon: "gear-construct.png",
                    type: "class-skill",
                    description: "Deploy a constructed device that grants +1 defense to you or an ally for 2 turns."
                }
            ],
            subclasses: [
                {
                    name: "Infuser",
                    passive: {
                        name: "Arcane Infusion",
                        icon: "rune-circle.png",
                        type: "class-sub-passive",
                        AS: "I",
                        description: "Gain +1 item slot for infused items and +2 to infusion potency."
                    },
                    skills: [
                        {
                            name: "Enchanted Weapon",
                            icon: "enchanted-sword.png",
                            type: "class-sub-skill",
                            description: "Infuse a weapon with magic, granting +1d20 damage for 3 turns."
                        }
                    ]
                },
                {
                    name: "Golemsmith",
                    passive: {
                        name: "Construct Creation",
                        icon: "golem.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to crafting and controlling magical constructs."
                    },
                    skills: [
                        {
                            name: "Summon Golem",
                            icon: "stone-golem.png",
                            type: "class-sub-skill",
                            description: "Create a golem companion with 3d20 health that fights for you for 4 turns."
                        }
                    ]
                },
                {
                    name: "Tinkerer",
                    passive: {
                        name: "Ingenious Invention",
                        icon: "gadget.png",
                        type: "class-sub-passive",
                        AS: "T",
                        description: "Gain +1 item slot for gadgets and +2 to trap and device creation."
                    },
                    skills: [
                        {
                            name: "Mechanical Trap",
                            icon: "trap-spring.png",
                            type: "class-sub-skill",
                            description: "Set an automated trap dealing 1d20 damage and immobilizing enemies for 1 turn."
                        }
                    ]
                }
            ]
        },
        {
            name: "Shaman",
            subclasslevel: 11,
            passive: {
                name: "Spirit Channel",
                icon: "spirit-orb.png",
                type: "class-passive",
                description: "Gain +2 to spirit, ritual, and nature communion checks."
            },
            skills: [
                {
                    name: "Ancestral Totem",
                    icon: "totem.png",
                    type: "class-skill",
                    description: "Place a totem that grants allies +1 to checks and absorbs 1d20 damage for 2 turns."
                }
            ],
            subclasses: [
                {
                    name: "Stormcaller",
                    passive: {
                        name: "Skybound Rite",
                        icon: "storm-cloud.png",
                        type: "class-sub-passive",
                        AS: "R",
                        description: "Gain +1 item slot for ritual foci and +2 to lightning and wind effects."
                    },
                    skills: [
                        {
                            name: "Thunder Rite",
                            icon: "lightning-bolt.png",
                            type: "class-sub-skill",
                            description: "Call a thunder strike that deals 2d20 lightning damage to one target."
                        }
                    ]
                },
                {
                    name: "Spirit Walker",
                    passive: {
                        name: "Veil Sight",
                        icon: "ghost.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to tracking spirits, curses, and hidden entities."
                    },
                    skills: [
                        {
                            name: "Warding Circle",
                            icon: "magic-circle.png",
                            type: "class-sub-skill",
                            description: "Create a warded circle that weakens enemies by -2 to checks for 2 turns."
                        }
                    ]
                },
                {
                    name: "Hexbinder",
                    passive: {
                        name: "Marked Fate",
                        icon: "cursed-star.png",
                        type: "class-sub-passive",
                        AS: "H",
                        description: "Gain +1 item slot for fetishes and +2 to curse application checks."
                    },
                    skills: [
                        {
                            name: "Binding Hex",
                            icon: "curse.png",
                            type: "class-sub-skill",
                            description: "Hex a target for 3 turns; they take 1d20 damage at the start of each turn."
                        }
                    ]
                }
            ]
        },
        {
            name: "Warden",
            subclasslevel: 12,
            passive: {
                name: "Bulwark Instinct",
                icon: "tower-shield.png",
                type: "class-passive",
                description: "Gain +2 to defensive checks and ally-protection actions."
            },
            skills: [
                {
                    name: "Guardian Stance",
                    icon: "shield-bash.png",
                    type: "class-skill",
                    description: "Enter a stance for 2 turns that reduces incoming damage by 1d20."
                }
            ],
            subclasses: [
                {
                    name: "Sentinel",
                    passive: {
                        name: "Line Holder",
                        icon: "fortress.png",
                        type: "class-sub-passive",
                        AS: "S",
                        description: "Gain +1 item slot for shields and +2 to block checks."
                    },
                    skills: [
                        {
                            name: "Interpose",
                            icon: "protective-shield.png",
                            type: "class-sub-skill",
                            description: "Take an incoming hit for an ally and reduce it by 2d20."
                        }
                    ]
                },
                {
                    name: "Vanguard",
                    passive: {
                        name: "Frontline Tempo",
                        icon: "crossed-swords.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to opening-turn checks and tactical positioning."
                    },
                    skills: [
                        {
                            name: "Advance Breaker",
                            icon: "charge.png",
                            type: "class-sub-skill",
                            description: "Break enemy formation, dealing 1d20 damage and forcing a target back."
                        }
                    ]
                },
                {
                    name: "Oathguard",
                    passive: {
                        name: "Sacred Oath",
                        icon: "holy-shield.png",
                        type: "class-sub-passive",
                        AS: "O",
                        description: "Gain +1 item slot for oath relics and +2 to anti-curse defenses."
                    },
                    skills: [
                        {
                            name: "Sanctified Wall",
                            icon: "wall-shield.png",
                            type: "class-sub-skill",
                            description: "Create a sacred barrier that absorbs 3d20 damage over 2 turns."
                        }
                    ]
                }
            ]
        },
        {
            name: "Spellblade",
            subclasslevel: 10,
            passive: {
                name: "Arcsteel Form",
                icon: "magic-sword.png",
                type: "class-passive",
                description: "Gain +2 to checks that combine melee combat and spellcasting."
            },
            skills: [
                {
                    name: "Arc Slash",
                    icon: "energy-sword.png",
                    type: "class-skill",
                    description: "Strike with infused steel, dealing weapon damage plus +1d20 arcane damage."
                }
            ],
            subclasses: [
                {
                    name: "Runeknight",
                    passive: {
                        name: "Rune Etching",
                        icon: "rune-stone.png",
                        type: "class-sub-passive",
                        AS: "R",
                        description: "Gain +1 item slot for runeblades and +2 to rune activation checks."
                    },
                    skills: [
                        {
                            name: "Rune Burst",
                            icon: "rune-blast.png",
                            type: "class-sub-skill",
                            description: "Trigger a rune explosion for 2d20 arcane damage in a small radius."
                        }
                    ]
                },
                {
                    name: "Aether Duelist",
                    passive: {
                        name: "Precision Flux",
                        icon: "duel.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to one-on-one combat checks and counterattacks."
                    },
                    skills: [
                        {
                            name: "Mirror Cut",
                            icon: "slash.png",
                            type: "class-sub-skill",
                            description: "Counter a melee attack and deal 1d20 retaliatory damage."
                        }
                    ]
                },
                {
                    name: "Battlemage",
                    passive: {
                        name: "War Formula",
                        icon: "spell-book.png",
                        type: "class-sub-passive",
                        AS: "B",
                        description: "Gain +1 item slot for battle catalysts and +2 to combat spell checks."
                    },
                    skills: [
                        {
                            name: "Sigil Drive",
                            icon: "sigil.png",
                            type: "class-sub-skill",
                            description: "Imprint a sigil on a target; your next hit deals +2d20 damage."
                        }
                    ]
                }
            ]
        }
    ],

    statusEffects: [
         {
            name: "Burning",
            icon: "burning.png",
            type: "status-effect",
            description: "The character is on fire, taking 5 damage at the start of each turn until extinguished."
        },
        {
            name: "Poisoned",
            icon: "poisoned.png",
            type: "status-effect",
            description: "The character has been poisoned and suffers -2 to checks and actions."
        },
        {
            name: "Charmed",
            icon: "charmed.png",
            type: "status-effect",
            description: "The character is charmed and cannot target the source of the charm."
        },
        {
            name: "Blinded",
            icon: "blinded.png",
            type: "status-effect",
            description: "The character cannot see and suffers penalties to perception checks."
        },
        {
            name: "Drowsiness",
            icon: "Sloth.png",
            type: "status-effect",
            description: "While Sloth is present, all rolls and checks take a -2 penalty. Each time you perform an action, roll 1d20 — on a 10 or lower, the penalty doubles."
        },
        {
            name: "Curiosity Effect",
            icon: "twirly-flower.png",
            type: "status-effect",
            description: "At the start of each turn, roll 1d20, (the DC is set by the initial application of the effect from the source of the Curiosity Effect) if result is less the DC;  .",
            hide: true
        }
    ],
    
    bestiary: [
        {
            name: "Kindness",
            type: "virtue",
            icon: "Kindness_Portrait.jpg",
            domain: "Empathy, Care, Forgiveness",
            health: 165,
            damage: "2d20",
            challenge: 13,
            description: "Kindness radiates warmth and compassion, healing wounds both physical and spiritual."
        },
        {
            name: "Sloth",
            type: "sin",
            icon: "Sloth_Portrait.jpg",
            domain: "Laziness, Apathy, Inaction",
            health: 150,
            damage: "2d20",
            challenge: 12,
            description: "Sloth represents the sin of inaction and indifference, causing mortals to abandon their duties."
        },
        {
            name: "Envy",
            type: "sin",
            icon: "Envy_Portrait.jpg",
            domain: "Jealousy, Resentment, Comparison",
            health: 170,
            damage: "2d20",
            challenge: 13,
            description: "Envy poisons the mind with jealousy and resentment of what others possess."
        },
        {
            name: "Charity",
            type: "virtue",
            icon: "Charity_Portrait.jpg",
            description: "One of the Seven Holy Virtues, Charity embodies compassion and selfless giving to those in need."
        },
        {
            name: "Patience",
            type: "virtue",
            icon: "Patience_Portrait.jpg",
            domain: "Endurance, Calm, Wisdom",
            health: 180,
            damage: "2d20",
            challenge: 14,
            description: "The virtue of steady endurance and calm resolve. Patience teaches mortals the value of waiting and persistence."
        },
        {
            name: "Humility",
            type: "virtue",
            icon: "Humility_Portrait.jpg",
            domain: "Modesty, Balance, Truth",
            health: 170,
            damage: "2d20",
            challenge: 14,
            description: "Humility stands against pride and vanity, granting insight through honest self-assessment."
        },
        {
            name: "Chastity",
            type: "virtue",
            icon: "Chastity_Portrait.jpg",
            domain: "Purity, Control, Discipline",
            health: 190,
            damage: "3d20",
            challenge: 14,
            description: "Guardian of discipline and self-control, Chastity preserves honor and maintains virtue against temptation."
        },
        {
            name: "Temperance",
            type: "virtue",
            icon: "Temperance_Portrait.jpg",
            domain: "Balance, Moderation, Restraint",
            health: 175,
            damage: "2d20",
            challenge: 13,
            description: "The virtue of balance and moderation, Temperance teaches mortals to find harmony between excess and denial."
        },
        {
            name: "Diligence",
            type: "virtue",
            icon: "Diligence_Portrait.jpg",
            domain: "Labor, Dedication, Excellence",
            health: 185,
            damage: "3d20",
            challenge: 14,
            description: "The virtue of tireless work and dedication, Diligence rewards those who strive for excellence in all endeavors."
        },
        {
            name: "Greed",
            type: "sin",
            icon: "Greed_Portrait.jpg",
            domain: "Avarice, Excess, Desire",
            health: 210,
            damage: "3d20",
            challenge: 15,
            description: "One of the Seven Deadly Sins, Greed embodies insatiable hunger for wealth and possessions."
        },
        {
            name: "Wrath",
            type: "sin",
            icon: "Wrath_Portrait.jpg",
            domain: "Anger, Vengeance, Destruction",
            health: 280,
            damage: "4d20",
            challenge: 17,
            description: "The most violent of the Deadly Sins, Wrath manifests divine fury upon those deemed unworthy. Known to personally smite mortals who offend."
        },
        {
            name: "Pride",
            type: "sin",
            icon: "Pride_Portrait.jpg",
            domain: "Vanity, Arrogance, Power",
            health: 220,
            damage: "3d20",
            challenge: 16,
            description: "Pride stands as the greatest of the Deadly Sins, fueling arrogance and the desire for supremacy."
        },
        {
            name: "Lust",
            type: "sin",
            icon: "Lust_Portrait.jpg",
            domain: "Desire, Temptation, Passion",
            health: 180,
            damage: "2d20",
            challenge: 14,
            description: "Lust represents uncontrolled desire and obsessive passion that consumes reason and judgment."
        },
        {
            name: "Gluttony",
            type: "sin",
            icon: "Gluttony_Portrait.jpg",
            domain: "Excess, Consumption, Indulgence",
            health: 240,
            damage: "3d20",
            challenge: 15,
            description: "Gluttony embodies endless consumption and indulgence, never satisfied no matter how much is consumed."
        },
        {
            name: "Hope",
            type: "unfamiliar",
            icon: "Hope_Portrait.jpg",
            domain: "Faith, Possibility, Dreams",
            health: 200,
            damage: "3d20",
            challenge: 15,
            description: "One of the Unfamiliar Fundamentals, dwelling in the forgotten Age of Myth. Hope represents possibility and dreams of rebirth."
        },
        {
            name: "Unity",
            type: "unfamiliar",
            icon: "Unity_Portrait.jpg",
            domain: "Connection, Harmony, Togetherness",
            health: 210,
            damage: "3d20",
            challenge: 15,
            description: "An Unfamiliar god seeking the return of the Age of Myth, Unity yearns for the connection of all things."
        },
        {
            name: "Fate",
            type: "unfamiliar",
            icon: "Fate_Portrait.jpg",
            domain: "Destiny, Inevitability, Change",
            health: 220,
            damage: "3d20",
            challenge: 16,
            description: "Fate spins the threads of destiny from the Unfamiliar Lands, seeking to unravel the order Authority imposed."
        },
        {
            name: "Curiosity",
            type: "unfamiliar",
            icon: "Curiosity_Portrait.jpg",
            domain: "Wonder, Discovery, Chaos",
            health: 200,
            damage: "3d20",
            challenge: 15,
            description: "The most enigmatic of the Unfamiliar Fundamentals, Curiosity appears and disappears at will, bestowing world-altering gifts upon those caught in its gaze."
        },
        {
            name: "Authority",
            type: "god-king",
            icon: "Authority_Portrait.jpg",
            domain: "Order, Law, Leadership",
            health: 500,
            damage: "4d20",
            challenge: 20,
            description: "The supreme God-King who established order and peace across the Familiar Lands. Authority towers above all, commanding absolute power and unquestioned dominion."
        }
    ]

};