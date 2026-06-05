window.D20_CAMPAIGN_DATA = {
    PlayerSkillCreate: {
        enabled: true,
        sections: ["Prosthetics"]
    },

    ItemsCreateSkills: [
        {
            name: "Hack",
            item: ["reddisc.png"],
            icon: "hack.png",
            AS: "H",
            description: "This hack let's you Equip 'Hacked' gear items in your H Slot."
        }
    ],

    Items: ["myscarecrow.png", "shahzicon.png", "reddisc.png", "greendisc.png"],

    races: [
        {
            name: "Player",
            skills: [
                {
                    name: "Final Bullet!",
                    icon: "finalbullet.png",
                    description: "The Player takes a stance and charges up their ranged weapon and consumes all their ammuntion, bypassing all ammo restrictions for a single bullet only to be aimed at one target. Apply Agility modifier Multiplied by the ammount of Ammo, Multiplied by 1D20 to equal the amount of damage. The Target must roll 1D20, the result will be multiplied by their Vigor to reduce the damage recieved."
                },
            ]
        },
    ],
    classes: [
       {
        name: "Gunner",
        passive: {
            name: "Guess What I got...",
            icon: "gunner.png",
            AS: "G",
                description: "Recieve and Item Slot for firearms. +2 to Agility Modifier when first shooting a weapon."
        },
        skills: [
            {
                name: "Rapid Fire",
                icon: "rapidfire.png",
                description: "The Player can make two attacks with a firearm in one turn, but suffers a -3 to Agility to each shot."
            }
        ]
        },

        {
			name: "Swordsman",
			subclasslevel: 10,
			passive: {
				name: "Sheath",
				icon: "sheath.png",
				type: "class-passive",
				AS: "S",
                description: "Gains +1 item slot specifically for swords only."
			},
			skills: [
				{
					name: "Footwork",
					icon: "footwork.png",
					type: "class-skill",
                    description: "Gains additional stealth points and better repositioning on use. Requires Sword."
				}
			],
        },

        {
            name: "Scavenger",
            passive: {
                name: "Treasure Sense",
                icon: "strongbox.png",
                type: "class-passive",
                description: "Specializes in spotting hidden loot, dropped gear, and overlooked valuables. Gains +2 to Instinct when searching battlefields, supply caches, or enemy drops."
            },
            skills: [
                {
                    name: "Lucky Find",
                    icon: "luckyfind.png",
                    type: "class-skill",
                    description: "Quickly scans the area for useful loot routes and weak stash points. On use, the Player can reveal a hidden item, spot a valuable drop, or gain an advantage when collecting rewards after combat."
                }
            ]
        },

        {
            name: "Vanguard",
            passive: {
                name: "Reinforced Frame",
                icon: "reinforcedframe.png",
                type: "class-passive",
                description: "Built for front-line combat. Gains +2 to Vigor while fighting at close range or while protecting allies in open battle zones."
            },
            skills: [
                {
                    name: "Boost Dash",
                    icon: "overclockrush.png",
                    type: "class-skill",
                    description: "Triggers a burst of movement to close distance instantly. Rush into melee range and strike; if the hit lands, the target is stunned and loses movement on their next turn."
                }
            ]
        }

    ],

    bestiary: [
        {
            name: "MyScarecrow",
            type: "Player",
            icon: "myscarecrow.png",
            description: "An Underground Player Dev. who makes his money writing code that creates items in Hex City."
        },
        {
            name: "Shahz",
            type: "NPC",
            icon: "shahzicon.png",
            description: "An NPC designed to support players by offering a Shop with gear/ammo"
        }
    ],

    statusEffects: [
        {
            name: "Burning",
            icon: "burning.png",
            type: "status-effect",
            description: "The Player is on fire, taking 5 damage at the start of each turn until extinguished."
        },
        {
            name: "Poisoned",
            icon: "poisoned.png",
            type: "status-effect",
            description: "The Player has been poisoned and suffers -2 to checks and actions."
        },
        {
            name: "Stunned",
            icon: "stunned.png",
            type: "status-effect",
            description: "The Player cannot perform a Skill on their turn and lose their 'Final Bullet' Stance."
        },
        {
            name: "Blinded",
            icon: "blinded.png",
            type: "status-effect",
            description: "The Player cannot see and suffers penalties to perception checks."
        }
    ]
};