window.D20_CAMPAIGN_DATA = {
    races: [
        {
            name: "Human",
            passive: {
                name: "Versatile",
                icon: "human-pyramid.png",
                type: "race-passive",
                description: "Gain +1 to any checks towards all task outside of combat."
            },
            skills: [
                {
                    name: "Double Impact",
                    icon: "bullet-impacts.png",
                    type: "race-skill",
                    description: "Gain an additional attack towards one target."
                }
            ]
        },
        {
            name: "Beastfolk",
            passive: {
                name: "Primal Instinct",
                icon: "primalinstinct.png",
                type: "race-passive",
                description: "Gain +2 to instinct checks."
            },
            skills: [
                {
                    name: "Savage Strike",
                    icon: "claw-slashes.png",
                    type: "race-skill",
                    description: "Once per battle, after landing a successful hit, deal an additional 1d20 damage."
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
            name: "Fairy",
            passive: {
                name: "Fey Lightness",
                icon: "fairy-wings.png",
                type: "race-passive",
                description: "Gain +2 to agility-related checks."
            },
            skills: [
                {
                    name: "Pixie Glamour",
                    icon: "sparkles.png",
                    type: "race-skill",
                    description: "Charm or distract a nearby enemy, effect is determined by result: 5-13 = Target cannot target you for their next action, 14 and higher = Target cannot perform an action next turn. This skill can not be used next action."
                }
            ]
        },
        {
            name: "Kobold",
            passive: {
                name: "Trap Sense",
                icon: "trap-mask.png",
                type: "race-passive",
                description: "Gain +2 to trap detection, disarming, and dungeon navigation checks."
            },
            skills: [
                {
                    name: "Pack Tactics",
                    icon: "pack-howl.png",
                    type: "race-skill",
                    description: "If an ally is attacking the same target, gain +1d20 bonus damage on your attack."
                }
            ]
        },
        {
            name: "Daespawn",
            passive: {
                name: "Infernal Blood",
                icon: "devilicon.png",
                type: "race-passive",
                description: "Gain +2 to intimidation and resistance checks. You also take half damage from Dark-based attacks."
            },
            skills: [
                {
                    name: "Crossfire Impact",
                    icon: "cross-flare.png",
                    type: "race-skill",
                    description: "Once per battle, unleash a burst of infernal energy dealing 2d20 Dark damage to a single target. On a roll of 18 or higher, the target is also inflicted with a burn effect."
                }
            ]
        },
        {
            name: "Aesborn",
            passive: {
                name: "Divine Grace",
                icon: "winged-emblem.png",
                type: "race-passive",
                description: "Gain +2 to Mind checks towards persuasion and healing."
            },
            skills: [
                {
                    name: "Radiant Smite",
                    icon: "lightning-dissipation.png",
                    type: "race-skill",
                    description: "Channel light into a melee or ranged attack, dealing an additional 1d20 Light damage. On a roll of 17 or higher, the target is blinded until their next turn."
                }
            ]
        }
    ],

    classes: [
        {
            name: "Warrior",
            subclasslevel: 10,
            passive: {
                name: "Battle Standard",
                icon: "Sword.png",
                type: "class-passive",
                AS: "S",
                description: "Gain +1 item slot for Melee weapons. Gain +2 to Might checks involving striking power, push, pull, or lift."
            },
            skills: [
                {
                    name: "Heroic Strike",
                    icon: "pointy-sword.png",
                    type: "class-skill",
                    description: "Deliver a broad frontline strike that deals 2d20 damage to one target."
                },
                {
                    name: "Rallying Cry",
                    icon: "war-shout.png",
                    type: "class-skill",
                    description: "Bolster the party's momentum, granting one ally +2 on their next attack or defense roll."
                }
            ],
            subclasses: [
                {
                    name: "Berserker",
                    passive: {
                        name: "Rampant Fury",
                        icon: "axe-swing.png",
                        type: "class-sub-passive",
                        description: "When you are below half health, gain +2 to attack rolls and +1d20 bonus damage on your attack each turn."
                    },
                    skills: [
                        {
                            name: "Wild Rampage",
                            icon: "delighted.png",
                            type: "class-sub-skill",
                            description: "Once per battle, enter a frenzy for 2 turns: gain +2 to melee attack rolls, but take +2 damage from incoming attacks."
                        }
                    ]
                },
                {
                    name: "Warlord",
                    passive: {
                        name: "Commanding Presence",
                        icon: "warlord-shout.png",
                        type: "class-sub-passive",
                        description: "Allies within your scene gain +1 to Vigor while you are not downed."
                    },
                    skills: [
                        {
                            name: "Tactical Order",
                            icon: "grant-action.png",
                            type: "class-sub-skill",
                            description: "Give your attack to one ally, allowing them to gain +3 to their next attack."
                        }
                    ]
                },
                {
                    name: "Blademaster",
                    passive: {
                        name: "Sword Discipline",
                        icon: "master-of-arms.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to Might checks and Vigor checks while wielding a sword."
                    },
                    skills: [
                        {
                            name: "Blade Array",
                            icon: "sword-array.png",
                            type: "class-sub-skill",
                            description: "Summon an array of spectral blades (One sword for each point put into Mind) to strike multiple enemies. Each blade deals 1d20 damage to a single target."
                        }
                    ]
                }
            ]
        },
        {
            name: "Guardian",
            subclasslevel: 10,
            passive: {
                name: "Shield Skill",
                icon: "shield.png",
                type: "class-passive",
                AS: "S",
                description: "Gain +1 item slot for shields. Gain +2 to Vigor checks while equipped with a shield, and gain the ability to use shields for cover in combat."
            },
            skills: [
                {
                    name: "Shield Stance",
                    icon: "surrounded-shield.png",
                    type: "class-skill",
                    description: "Take a guarding stance that reduces the next incoming damage by 1d20 for you or an adjacent ally."
                },
                {
                    name: "Last Bastion",
                    icon: "grant-shield.png",
                    type: "class-skill",
                    description: "Once per battle, prevent an ally from being downed and leave them at 1 health instead."
                }
            ],
            subclasses: [
                {
                    name: "Bulwark",
                    passive: {
                        name: "Steady Hand",
                        icon: "camargue-cross.png",
                        type: "class-sub-passive",
                        description: "Allies within your scene gain +1 to instinct checks while you are not downed."
                    },
                    skills: [
                        {
                            name: "Set the Course",
                            icon: "figurehead.png",
                            type: "class-sub-skill",
                            description: "In Combat give up your action to an ally to launch them towards a target, forcing them to perform an action/attack on your turn (Cooldown of 2 turns)."
                        }
                    ]
                },
                {
                    name: "Sentinel",
                    passive: {
                        name: "Watchful Guard",
                        icon: "static-guard.png",
                        type: "class-sub-passive",
                        description: "Once per turn, when an ally is attacked, you may intercept the blow and take the damage in their place."
                    },
                    skills: [
                        {
                            name: "Intercepting Strike",
                            icon: "crossed-slashes.png",
                            type: "class-sub-skill",
                            description: "Slash at an enemy's projectile, Roll 1d20 to attempt to destroy it (DC 20 - Might Modifier)."
                        }
                    ]
                },
                {
                    name: "Templar",
                    passive: {
                        name: "Sacred Vow",
                        icon: "ankh.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to Vigor checks. Allies in Scene to you gain +1 to Vigor checks."
                    },
                    skills: [
                        {
                            name: "Holy Ground",
                            icon: "ancient-sword.png",
                            type: "class-sub-skill",
                            description: "Consecrate the area around you — for 2 turns, all allies in your scene gain +2 to Mind rolls and are immune to the Chaos Status condition during combat (Cannot be used again for 3 turns)."
                        }
                    ]
                }
            ]
        },
        {
            name: "Ranger",
            subclasslevel: 10,
            passive: {
                name: "Quiver Mastery",
                icon: "bow-arrow.png",
                type: "class-passive",
                AS: "B",
                description: "Gain +1 item slot for bows. Never run out of standard arrows. Gain +2 to Instinct checks involving senses, reflexes, and ambush awareness."
            },
            skills: [
                {
                    name: "True Shot",
                    icon: "target-shot.png",
                    type: "class-skill",
                    description: "Loose a precision shot that deals 2d20 damage and ignores minor cover penalties."
                },
                {
                    name: "Ambush Setup",
                    icon: "hidden.png",
                    type: "class-skill",
                    description: "Reposition into terrain advantage, granting +2 to your next attack and +2 to your next agility check (Does not stack)."
                }
            ],
            subclasses: [
                {
                    name: "Beastwarden",
                    passive: {
                        name: "Pack Bond",
                        icon: "wolf-head.png",
                        type: "class-sub-passive",
                        description: "You have a bonded animal companion that fights alongside you. The companion has half your health and deals 1d20/2 damage per turn. If your companion is downed, gain +2 to all attack rolls for the rest of the battle."
                    },
                    skills: [
                        {
                            name: "Hunting Call",
                            icon: "command-focus.png",
                            type: "class-sub-skill",
                            description: "Command your companion to focus a single target — that target takes 1d20 damage at the start of their turn for 5 turns."
                        }
                    ]
                },
                {
                    name: "Sharpshooter",
                    passive: {
                        name: "Steady Aim",
                        icon: "convergence-target.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to Agility. Critical hits on ranged attacks (natural 19 or 20) ignore all damage reduction."
                    },
                    skills: [
                        {
                            name: "Killshot",
                            icon: "charged-arrow.png",
                            type: "class-sub-skill",
                            description: "Take careful aim at a single target and charge the shot over any number of full turns. On the following turn after, fire a shot that deals 1d20 damage for each turn of aiming and cannot be blocked by cover. (Cooldown equals the number of turns spent charging)."
                        }
                    ]
                },
                {
                    name: "Pathfinder",
                    passive: {
                        name: "Trailblazer",
                        icon: "footsteps.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to Instinct checks."
                    },
                    skills: [
                        {
                            name: "Mark the Trail",
                            icon: "trail.png",
                            type: "class-sub-skill",
                            description: "Scout ahead or designate a route, granting the party +2 to their next movement-related action and +2 to ambush-related rolls for that encounter."
                        }
                    ]
                }
            ]
        },
        {
            name: "Magician",
            subclasslevel: 10,
            passive: {
                name: "Arcane Insight",
                icon: "wand.png",
                type: "class-passive",
                AS: "M",
                description: "Gain +1 item slot for wands or catalysts. Gain +2 to Mind checks involving knowledge, reasoning, and controlled spellcasting."
            },
            skills: [
                {
                    name: "Mana Flare",
                    icon: "burning-dot.png",
                    type: "class-skill",
                    description: "Release concentrated spellfire that deals 2d20 damage based on your Affinity."
                },
                {
                    name: "Spellcraft",
                    icon: "spell-book.png",
                    type: "class-skill",
                    description: "Improvise a utility spell with GM approval that solves one immediate obstacle at moderate cost."
                }
            ],
            subclasses: [
                {
                    name: "Hexweaver",
                    passive: {
                        name: "Cursed Thread",
                        icon: "yarn.png",
                        type: "class-sub-passive",
                        description: "Whenever you damage an enemy with a spell, apply a 'Poisoned' Status effect to the target."
                    },
                    skills: [
                        {
                            name: "Ruin Sigil",
                            icon: "cursed-star.png",
                            type: "class-sub-skill",
                            description: "Target one enemy and apply a 'Poisoned' Status effect on that target."
                        }
                    ]
                },
                {
                    name: "Lifebinder",
                    passive: {
                        name: "Restorative Aura",
                        icon: "healing.png",
                        type: "class-sub-passive",
                        description: "Allies in your scene gain +1d20 to healing received while you are not downed."
                    },
                    skills: [
                        {
                            name: "Mend Pulse",
                            icon: "mendpulse.png",
                            type: "class-sub-skill",
                            description: "Release a healing wave that restores 2d20 health to one ally, or 1d20 health to up to two allies in your scene."
                        }
                    ]
                },
                {
                    name: "Runesage",
                    passive: {
                        name: "Charge Stone",
                        icon: "rune-stone.png",
                        type: "class-sub-passive",
                        description: "At the start of each of your turns after using Rune Grenade, gain 1 Charge to a Rune Grenade (max 5)."
                    },
                    skills: [
                        {
                            name: "Rune Grenade",
                            icon: "fire-bomb.png",
                            type: "class-sub-skill",
                            description: "Enscribe an object with 'Charge Stone' Throw a charged Rune Grenade at a target area. It detonates on impact, dealing your total mind multiplied by the charges on that object, then apply 'Burning' to affected enemies."
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
                description: "Gain +2 to Mind checks involving speaking, persuasion, and social reasoning."
            },
            skills: [
                {
                    name: "Song of Courage",
                    icon: "lyre.png",
                    type: "class-skill",
                    description: "Inspire allies with a battle refrain, granting +2 to the next roll for an ally."
                },
                {
                    name: "Discordant Chord",
                    icon: "harp.png",
                    type: "class-skill",
                    description: "Shatter enemy focus with a disruptive chord, imposing -2 on the target's next action roll."
                }
            ],
            subclasses: [
                {
                    name: "Skald",
                    passive: {
                        name: "War Verse",
                        icon: "war-drum.png",
                        type: "class-sub-passive",
                        description: "Allies in your scene gain +1 to attack rolls while you are conscious."
                    },
                    skills: [
                        {
                            name: "Battle Anthem",
                            icon: "guitar.png",
                            type: "class-sub-skill",
                            description: "Lead a fierce chant that grants up to two allies +2 to their next attack roll and +1d20 bonus damage on a hit."
                        }
                    ]
                },
                {
                    name: "Virtuoso",
                    passive: {
                        name: "Perfect Tempo",
                        icon: "musical-notes.png",
                        type: "class-sub-passive",
                        description: "Whenever you grant a bonus to an ally, increase that bonus by +1."
                    },
                    skills: [
                        {
                            name: "Crescendo",
                            icon: "anthem.png",
                            type: "class-sub-skill",
                            description: "Build to a commanding peak note that grants one ally +3 to their next agility check. (cooldown of 2 turns)"
                        }
                    ]
                },
                {
                    name: "Lorekeeper",
                    passive: {
                        name: "Ancient Counsel",
                        icon: "spell-book.png",
                        type: "class-sub-passive",
                        description: "Allies in your scene gain +1 to Mind and Instinct checks while you are conscious."
                    },
                    skills: [
                        {
                            name: "Tale of Triumph",
                            icon: "book-cover.png",
                            type: "class-sub-skill",
                            description: "Revive a fallen ally with a heroic tale, restoring them to 20 health and granting them +2 to their next action roll. (Cooldown of 9 turns)"
                        }
                    ]
                }
            ]
        },
        {
            name: "Thief",
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
                    name: "Acrobatics",
                    icon: "acrobatic.png",
                    type: "class-skill",
                    description: "Roll an Agility check to evade a target's attack (11 and higher succeeds)."
                },
                {
                    name: "Snatch",
                    icon: "snatch.png",
                    type: "class-skill",
                    description: "Steal an item, buff, or advantage from a target on a successful contested Agility check."
                }
            ],
            subclasses: [
                {
                    name: "Shadowdancer",
                    passive: {
                        name: "Slippery",
                        icon: "cowled.png",
                        type: "class-sub-passive",
                        description: "Gain +2 to Agility checks. Enemies targeting you with ranged or opportunity attacks suffer -1 to their roll."
                    },
                    skills: [
                        {
                            name: "Shadow Step",
                            icon: "teleport.png",
                            type: "class-sub-skill",
                            description: "Instantly vanish from sight and reappear beside any target or ally in the scene. Your next attack this turn deals +1d20 bonus damage."
                        }
                    ]
                },
                
            ]
        }
    ],

    bestiary: [
        {
            name: "Fey",
            type: "creature",
            icon: "",
            description: "A mystical being tied to old magic, nature, and trickery."
        },
        {
            name: "Goblin",
            type: "creature",
            icon: "",
            description: "A small, cunning raider that favors ambushes and scavenged gear."
        },
        {
            name: "Orc",
            type: "creature",
            icon: "",
            description: "A powerful warrior species known for aggression and battlefield resilience."
        },
        {
            name: "Fairy",
            type: "creature",
            icon: "",
            description: "A tiny winged fey creature capable of subtle enchantments."
        },
        {
            name: "Giant",
            type: "creature",
            icon: "",
            description: "A towering humanoid with immense physical strength."
        },
        {
            name: "Kobold",
            type: "creature",
            icon: "",
            description: "A crafty reptilian tunnel-dweller known for traps and teamwork."
        },
        {
            name: "Daespawn",
            type: "creature",
            icon: "",
            description: "A being marked by infernal lineage and dark resilience."
        },
        {
            name: "Aesborn",
            type: "creature",
            icon: "",
            description: "A radiant bloodline touched by divine or celestial energy."
        },
        {
            name: "Goliath",
            type: "creature",
            icon: "",
            description: "A mountain-born giantkin known for endurance and raw might."
        },
        {
            name: "Dragon",
            type: "creature",
            icon: "",
            description: "An ancient apex creature of scale, flight, and overwhelming power."
        },
        {
            name: "Dwarf",
            type: "creature",
            icon: "",
            description: "A sturdy folk famed for craftsmanship, resolve, and tradition."
        },
        {
            name: "Lich",
            type: "creature",
            icon: "",
            description: "An undead sorcerer who bound their soul to defy death."
        },
        {
            name: "Sandworm",
            type: "creature",
            icon: "",
            description: "A colossal burrower that hunts from beneath shifting dunes."
        },
        {
            name: "Gravelworm",
            type: "creature",
            icon: "",
            description: "A subterranean worm that tunnels through rock and loose stone."
        },
        {
            name: "Mimic",
            type: "creature",
            icon: "",
            description: "A shape-shifting ambusher that disguises itself as objects."
        },
        {
            name: "Automaton",
            type: "creature",
            icon: "",
            description: "A constructed entity driven by runes, gears, or lost programming."
        },
        {
            name: "Mermaid",
            type: "creature",
            icon: "",
            description: "An ocean-dwelling humanoid known for song and swift swimming."
        },
        {
            name: "Fish",
            type: "creature",
            icon: "",
            description: "A common aquatic creature found in rivers, lakes, and seas."
        },
        {
            name: "Cow",
            type: "creature",
            icon: "",
            description: "A domesticated grazing animal raised for food, labor, and trade."
        },
        {
            name: "Dog",
            type: "creature",
            icon: "",
            description: "A loyal domesticated companion with keen senses and trainable behavior."
        },
        {
            name: "Cat",
            type: "creature",
            icon: "",
            description: "An agile domesticated hunter known for stealth and curiosity."
        },
        {
            name: "Special Cat",
            type: "creature",
            icon: "",
            description: "A rare or unusual feline with traits beyond an ordinary house cat."
        },
        {
            name: "Bird",
            type: "creature",
            icon: "",
            description: "A feathered creature ranging from tiny songbirds to large fliers."
        },
        {
            name: "Shark",
            type: "creature",
            icon: "",
            description: "A predatory sea hunter with acute senses and powerful jaws."
        },
        {
            name: "Hawk",
            type: "creature",
            icon: "",
            description: "A sharp-eyed raptor that excels at aerial hunting."
        },
        {
            name: "Bear",
            type: "creature",
            icon: "",
            description: "A massive omnivore with great strength and territorial instincts."
        },
        {
            name: "Wolf",
            type: "creature",
            icon: "",
            description: "A pack-oriented predator known for endurance and coordinated strikes."
        },
        {
            name: "Dire Wolf",
            type: "creature",
            icon: "",
            description: "A larger and deadlier wolf variant feared for savage pack hunts."
        },
        {
            name: "Sprite",
            type: "creature",
            icon: "",
            description: "A tiny mischievous spirit closely tied to woodland magic."
        },
        {
            name: "Djinn",
            type: "creature",
            icon: "",
            description: "A powerful elemental spirit with vast magical influence."
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
            name: "Identity Crisis",
            icon: "identity-crisis.png",
            type: "status-effect",
            description: "The Fourth Bridge Of Chaos has rewritten your identity and you are unable to recognize your past or who you are. Character believes they are a different person and will act according to that belief. This status effect can only be removed by the Fourth Bridge Of Chaos or by a powerful magic user. To remove this status effect, DC is 15 or higher.",
            hide: true        
        },
        {
            name: "Neverland",
            icon: "neverland.png",
            type: "status-effect",
            description: "The Third Bridge Of Chaos has looped you in a time loop, causing you to relive the same day over and over. You are aware of the loop but cannot escape it. This status effect can only be removed by the Third Bridge Of Chaos or by a powerful magic user. To remove this status effect, DC is 15 or higher.",
            hide: true
        },
        {
            name: "Influenced",
            icon: "influenced.png",
            type: "status-effect",
            description: "The First Bridge of Chaos, Harlequin, has seized your emotions and forced your mood against your will. While Influenced, your reactions are unstable and can be redirected by intense emotion, making calm judgment difficult. This status effect can only be removed by Harlequin, a powerful magic user, DC 15 or higher.",
            hide: true

        },
        {
            name: "Doubt",
            icon: "doubt.png",
            type: "status-effect",
            description: "Illusions and paradoxes that make reality untrustworthy attack you with such magical force that your body physically takes the damage. While under the effect of Doubt, you take 5 damage at the start of each turn and have -5 disadvantage on all checks. This status effect can only be removed by the Sixth Bridge Of Chaos or by a powerful magic user. To remove this status effect, DC is 15 or higher.",
            hide: true
        } 
    ]
};
