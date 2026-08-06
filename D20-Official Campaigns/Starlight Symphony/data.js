window.D20_CAMPAIGN_DATA = {
	PlayerSkillCreate: {
        enabled: true,
        sections: ["Equipment", "Symphony", "Requiem", "SS"]
    },
	
	ItemsCreateSkills: [
        {
            name: "Starlight Rider",
            item: ["KarmaBelt.png"],
            icon: "KarmaBelt.png",
            description: "Whilst you wear Starlight Rider Belt; Once per turn: You may equip one of your suits as an additional action."
        },
		{
            name: "Harp String",
            item: ["String.png"],
            icon: "String.png",
            description: "Whilst you have a Harp String; Once per battle: You may add +2 to one of your modified rolls."
        }
    ],
	
	
	Items: ["KarmaBelt.png", "String.png"],
	
	
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
			name: "Droid",
			skills: [
				{
					name: "Connect",
					icon: "connect.png",
					type: "race-skill",
					description: "Can interface with machines and digital systems."
				}
			]
		},
		{
			name: "Nomad",
			passive: {
				name: "Scavenger",
				icon: "scavenger.png",
				type: "race-passive",
			 	description: "Nomads find useful materials more often when scavenging."
			},
			skills: [
				{
					name: "Trail Sense",
					icon: "trailsense.png",
					type: "race-skill",
					description: "You can track or find shelter faster when traveling between locations."
				}
			]
		},
		{
			name: "Mutant",
			passive: {
				name: "Unstable Gift",
				icon: "unstable.png",
				type: "race-passive",
				description: "Mutant abilities produce unpredictable side effects; GM will call for a d20."
			},
			skills: [
				{
					name: "Mutation Burst",
					icon: "mutationburst.png",
					type: "race-skill",
					description: "Unleash a mutation effect; potency and side-effects are resolved with a d20."
				}
			]
		},
		{
			name: "Voidborn",
			passive: {
				name: "Starless Resilience",
				icon: "voidborn.png",
				type: "race-passive",
				description: "Voidborns gain +2 towards Vigor when defending against Starlight/Requiem attacks."
			},
			skills: [
				{
					name: "Null Pulse",
					icon: "nullpulse.png",
					type: "race-skill",
					description: "Once per battle, you can roll 1d20 + Mind. Every other entity in the battle (including allies) must roll a Vigor check. If an entity's result is lower than your roll, they lose their Symphony/Requiem for 2 Rotations."
				}
			]
		},
		{
			name: "Nebulon",
			passive: {
				name: "Nebula Cloak",
				icon: "nebulon.png",
				type: "race-passive",
				description: "Nebulons blend with interstellar gas, gain +2 Towards Agility when performing a Stealth check."
			},
			skills: [
				{
					name: "Gasform",
					icon: "gasform.png",
					type: "race-skill",
					description: "For 2 turns/scenes, take on a 'Gas Form', preventing you from taking damage involving Might, but you can not perform attack rolls. (Cooldown 2 turns/scenes)"
				}
			]
		},
		{
			name: "Aegis",
			passive: {
				name: "Shieldborn",
				icon: "aegis.png",
				type: "race-passive",
				description: "Aegis have natural resistance to energy damage and system shocks."
			},
			skills: [
				{
					name: "Fortify",
					icon: "fortify.png",
					type: "race-skill",
					description: "Temporarily bolster shields or armor for a brief duration."
				}
			]
		}
	],
	classes: [
		{
			name: "Mechanic",
            subclasslevel: 10,
			passive: {
				name: "Machine Maintenance",
				icon: "maintenance.png",
				type: "class-passive",
				description: "Be able to work at a workbench and run maintenance on ships or machinery. Gain +2 Mind when working on a Workbench/Tool Bag"
			},
			skills: [
				{
					name: "Config",
					icon: "config.png",
					type: "class-skill",
					description: "If you have a tool bag, you can modify weapons and gear on the go by equipping artifacts on them."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "When you use your gift. you hear your Symphony to call upon your Starlight Blade. This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "When you use your gift you hear your Requiem to call upon your Oblivion Blade. This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Artillery Specialist",
			subclasslevel: 10,
			passive: {
				name: "Holster",
				icon: "holster.png",
				type: "class-passive",
				AS: "H",
				description: "Gains +1 item slot specifically for firearms only. Dual pistols count as one item. Requires Firearms."
			},
			skills: [
				{
					name: "Lock On",
					icon: "locked on.png",
					type: "class-skill",
					description: "Once per turn, when you make an Accuracy check (Agility), you may roll an additional unmodified 1d20 and add the result to your total."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					subclasslevel: 10,
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					subclasslevel: 10,
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Pilot",
			subclasslevel: 10,
			skills: [
				{
					name: "Ship Call",
					icon: "shipcall.png",
					type: "class-skill",
					description: "If you have one, you can pilot any Ship/Mecha. After activation, wait one full turn rotation for the ship/Mecha registered to you to come to your location."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Medic",
			subclasslevel: 10,
			passive: {
				name: "Effective Dosage",
				icon: "effectivedosage.png",
				type: "class-passive",
				description: "Your health items do twice the effects."
			},
			skills: [
				{
					name: "Medical Experiment",
					icon: "medicalexperiment.png",
					type: "class-skill",
					description: "You can mix ingredients for new item effects."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
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
					description: "Gains additional stealth points on use. Requires Sword."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Brawler",
			subclasslevel: 10,
			passive: {
				name: "Bloodsport",
				icon: "bloodsport.png",
				type: "class-passive",
				description: "In battle domes, you earn twice the amount of credits when winning a fight."
			},
			skills: [
				{
					name: "Ambush",
					icon: "ambush.png",
					type: "class-skill",
					description: "On unexpected targets, the first hit will be 5x the result of a d20."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
						 name: "Brother's Gift",
						 icon: "brothersgift.png",
						 type: "subclass-skill",
						 description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Scout",
			subclasslevel: 10,
			passive: {
				name: "Trailblazer",
				icon: "trailblazer.png",
				type: "class-passive",
				description: "Scouts move quickly and spot hidden dangers more readily."
			},
			skills: [
				{
					name: "Quick Recon",
					icon: "recon.png",
					type: "class-skill",
					description: "Perform a fast reconnaissance sweep to reveal traps or enemies."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		},
		{
			name: "Mystic",
			subclasslevel: 10,
			passive: {
				name: "Arcane Attunement",
				icon: "arcane.png",
				type: "class-passive",
				description: "You gain a +2 bonus to Knowledge (Mind) checks related to Symphony/Requiem."
			},
			skills: [
				{
					name: "Meditation",
					icon: "channel.png",
					type: "class-skill",
					description: "Once per turn, if you are passive, you may roll an Instinct check. If the result is higher than 13, you may Astral Travel."
				}
			],
			subclasses: [
				{
					name: "Blessed",
					skills: [
						{
							name: "Mother's Gift",
							icon: "mothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Symphony to call upon your Starlight Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Symphony Act",
						icon: "Symphonyact.png",
						type: "subclass-passive",
						description: "Symphony Act is a GM Given description."
					}
				},
				{
					name: "Cursed",
					skills: [
						{
							name: "Brother's Gift",
							icon: "brothersgift.png",
							type: "subclass-skill",
							description: "when you use your gift you hear your Requiem to call upon your Oblivion Blade This weapon doesn't take an Inventory slot."
						}
					],
					passive: {
						name: "Requiem Act",
						icon: "brotherscurse.png",
						type: "subclass-passive",
						description: "Requiem Act is a GM Given description."
					}
				}
			]
		}
		
	]
};
