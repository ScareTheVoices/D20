window.D20_CAMPAIGN_DATA = {
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
                    description: "Unleash a breath attack dealing 2d10 elemental damage (choose fire, ice, or acid) once per battle."
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
                    description: "Hurl a large rock, dealing 2d10 damage to a single target."
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
                    name: "Backstab",
                    icon: "backstab.png",
                    type: "class-skill",
                    description: "Deal double damage when attacking from stealth."
                },
                {
                    name: "Shadowstep Gambit",
                    icon: "hidden.png",
                    type: "class-skill",
                    description: "When you attempt to move unseen, blend into darkness, or silently reposition yourself, roll 1d20. Add half your level (rounded down) to the result. Surrounding entities must roll 1d20 to notice user and if result isn't 20; entities subtract half their level (rounded down) from the result"
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
                        description: "Gain +2 to stealth attack damage."
                    },
                    skills: [
                        {
                            name: "Death Mark",
                            icon: "skull-crossed-bones.png",
                            type: "class-sub-skill",
                            description: "Mark an enemy, causing them to take 50% extra damage from your next attack."
                        }
                    ]
                },
                {
                    name: "Thief",
                    passive: {
                        name: "Quick Fingers",
                        icon: "hand-pocket.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to sleight-of-hand and lockpicking checks."
                    },
                    skills: [
                        {
                            name: "Swift Steal",
                            icon: "steal.png",
                            type: "class-sub-skill",
                            description: "Steal an item from an enemy without breaking stealth."
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
                        description: "Gain +1 +2 to accuracy checks."
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
                        description: "Gain +2 to movement and survival checks in natural environments."
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
                    description: "Heal an ally for 2d10 health."
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
                            description: "Grant an ally a shield that absorbs 2d10 damage for 2 turns."
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
                            description: "Deal 2d12 damage to an unholy creature with a melee attack."
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
                    description: "Deal 2d12 damage but take 1d20 recoil damage."
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
                            description: "Transform into a powerful beast, gaining +2 strength and 2d10 health."
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
                        description: "Gain +1 item slot for monk weapons and +2 to stealth movement."
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
                    description: "Fire a blast of dark energy, dealing 2d10 damage."
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
                    name: "Great Old One Pact",
                    passive: {
                        name: "Mind Whisper",
                        icon: "telepathy.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to mental manipulation and psychic checks."
                    },
                    skills: [
                        {
                            name: "Madness Gaze",
                            icon: "eldritch-eye.png",
                            type: "class-sub-skill",
                            description: "Cause an enemy to become confused, attacking randomly for 1 turn."
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
                            description: "Strike an enemy for 2d12 damage, healing yourself for half the damage dealt."
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
        }
    ]

};

