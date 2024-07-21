import { DnDClass } from '../common/common';

export const STATIC_DATA: DnDClass[] = [
  {
    name: 'Barbarian',
    icon: '🪓',
    children: [
      {
        name: 'Path of the Berserker',
        children: [
          { name: 'Frenzy' },
          { name: 'Mindless Rage' },
          { name: 'Intimidating Presence' },
          { name: 'Retaliation' },
        ],
      },
      {
        name: 'Path of the Totem Warrior',
        children: [
          { name: 'Spirit Seeker' },
          { name: 'Totem Spirit' },
          { name: 'Aspect of the Beast' },
          { name: 'Spirit Walker' },
          { name: 'Totemic Attunement' },
        ],
      },
    ],
  },
  {
    name: 'Bard',
    icon: '🎸',
    children: [
      {
        name: 'College of Lore',
        children: [
          { name: 'Bonus Proficiencies' },
          { name: 'Cutting Words' },
          { name: 'Additional Magical Secrets' },
          { name: 'Peerless Skill' },
        ],
      },
      {
        name: 'College of Valor',
        children: [
          { name: 'Bonus Proficiencies' },
          { name: 'Combat Inspiration' },
          { name: 'Extra Attack' },
          { name: 'Battle Magic' },
        ],
      },
    ],
  },
  {
    name: 'Cleric',
    icon: '🙏',
    children: [
      {
        name: 'Knowledge Domain',
        children: [
          { name: 'Blessings of Knowledge' },
          { name: 'Channel Divinity: Knowledge of the Ages' },
          { name: 'Channel Divinity: Read Thoughts' },
          { name: 'Potent Spellcasting' },
          { name: 'Visions of the Past' },
        ],
      },
      {
        name: 'Life Domain',
        children: [
          { name: 'Bonus Proficiency' },
          { name: 'Disciple of Life' },
          { name: 'Channel Divinity: Preserve Life' },
          { name: 'Blessed Healer' },
          { name: 'Divine Strike' },
          { name: 'Supreme Healing' },
        ],
      },
      {
        name: 'Light Domain',
        children: [
          { name: 'Bonus Cantrip' },
          { name: 'Warding Flare' },
          { name: 'Channel Divinity: Radiance of the Dawn' },
          { name: 'Improved Flare' },
          { name: 'Potent Spellcasting' },
          { name: 'Corona of Light' },
        ],
      },
      {
        name: 'Nature Domain',
        children: [
          { name: 'Acolyte of Nature' },
          { name: 'Bonus Proficiency' },
          { name: 'Channel Divinity: Charm Animals and Plants' },
          { name: 'Dampen Elements' },
          { name: 'Divine Strike' },
          { name: 'Master of Nature' },
        ],
      },
      {
        name: 'Tempest Domain',
        children: [
          { name: 'Bonus Proficiencies' },
          { name: 'Wrath of the Storm' },
          { name: 'Channel Divinity: Destructive Wrath' },
          { name: 'Thunderbolt Strike' },
          { name: 'Divine Strike' },
          { name: 'Stormborn' },
        ],
      },
      {
        name: 'Trickery Domain',
        children: [
          { name: 'Blessing of the Trickster' },
          { name: 'Channel Divinity: Invoke Duplicity' },
          { name: 'Channel Divinity: Cloak of Shadows' },
          { name: 'Divine Strike' },
          { name: 'Improved Duplicity' },
        ],
      },
      {
        name: 'War Domain',
        children: [
          { name: 'Bonus Proficiencies' },
          { name: 'War Priest' },
          { name: 'Channel Divinity: Guided Strike' },
          { name: "Channel Divinity: War God's Blessing" },
          { name: 'Divine Strike' },
          { name: 'Avatar of Battle' },
        ],
      },
    ],
  },
  {
    name: 'Druid',
    icon: '🌿',
    children: [
      {
        name: 'Circle of the Land',
        children: [
          { name: 'Bonus Cantrip' },
          { name: 'Natural Recovery' },
          { name: 'Circle Spells' },
          { name: "Land's Stride" },
          { name: "Nature's Ward" },
          { name: "Nature's Sanctuary" },
        ],
      },
      {
        name: 'Circle of the Moon',
        children: [
          { name: 'Combat Wild Shape' },
          { name: 'Circle Forms' },
          { name: 'Primal Strike' },
          { name: 'Elemental Wild Shape' },
          { name: 'Thousand Forms' },
        ],
      },
    ],
  },
  {
    name: 'Fighter',
    icon: '⚔️',
    children: [
      {
        name: 'Champion',
        children: [
          { name: 'Improved Critical' },
          { name: 'Remarkable Athlete' },
          { name: 'Additional Fighting Style' },
          { name: 'Superior Critical' },
          { name: 'Survivor' },
        ],
      },
      {
        name: 'Battle Master',
        children: [
          { name: 'Combat Superiority' },
          { name: 'Student of War' },
          { name: 'Know Your Enemy' },
          { name: 'Improved Combat Superiority' },
          { name: 'Relentless' },
        ],
      },
      {
        name: 'Eldritch Knight',
        children: [
          { name: 'Weapon Bond' },
          { name: 'War Magic' },
          { name: 'Eldritch Strike' },
          { name: 'Arcane Charge' },
          { name: 'Improved War Magic' },
        ],
      },
    ],
  },
  {
    name: 'Monk',
    icon: '🥋',
    children: [
      {
        name: 'Way of the Open Hand',
        children: [
          { name: 'Open Hand Technique' },
          { name: 'Wholeness of Body' },
          { name: 'Tranquility' },
          { name: 'Quivering Palm' },
        ],
      },
      {
        name: 'Way of Shadow',
        children: [
          { name: 'Shadow Arts' },
          { name: 'Shadow Step' },
          { name: 'Cloak of Shadows' },
          { name: 'Opportunist' },
        ],
      },
      {
        name: 'Way of the Four Elements',
        children: [
          { name: 'Disciple of the Elements' },
          { name: 'Elemental Attunement' },
          { name: 'Elemental Disciplines' },
        ],
      },
    ],
  },
  {
    name: 'Paladin',
    icon: '🛡️',
    children: [
      {
        name: 'Oath of Devotion',
        children: [
          { name: 'Sacred Weapon' },
          { name: 'Turn the Unholy' },
          { name: 'Aura of Devotion' },
          { name: 'Purity of Spirit' },
          { name: 'Holy Nimbus' },
        ],
      },
      {
        name: 'Oath of the Ancients',
        children: [
          { name: "Nature's Wrath" },
          { name: 'Turn the Faithless' },
          { name: 'Aura of Warding' },
          { name: 'Undying Sentinel' },
          { name: 'Elder Champion' },
        ],
      },
      {
        name: 'Oath of Vengeance',
        children: [
          { name: 'Abjure Enemy' },
          { name: 'Vow of Enmity' },
          { name: 'Relentless Avenger' },
          { name: 'Soul of Vengeance' },
          { name: 'Avenging Angel' },
        ],
      },
    ],
  },
  {
    name: 'Ranger',
    icon: '🏹',
    children: [
      {
        name: 'Hunter',
        children: [
          { name: "Hunter's Prey" },
          { name: 'Defensive Tactics' },
          { name: 'Multiattack' },
          { name: "Superior Hunter's Defense" },
        ],
      },
      {
        name: 'Beast Master',
        children: [
          { name: "Ranger's Companion" },
          { name: 'Exceptional Training' },
          { name: 'Bestial Fury' },
          { name: 'Share Spells' },
        ],
      },
    ],
  },
  {
    name: 'Rogue',
    icon: '🗡️',
    children: [
      {
        name: 'Thief',
        children: [
          { name: 'Fast Hands' },
          { name: 'Second-Story Work' },
          { name: 'Supreme Sneak' },
          { name: 'Use Magic Device' },
          { name: "Thief's Reflexes" },
        ],
      },
      {
        name: 'Assassin',
        children: [
          { name: 'Bonus Proficiencies' },
          { name: 'Assassinate' },
          { name: 'Infiltration Expertise' },
          { name: 'Impostor' },
          { name: 'Death Strike' },
        ],
      },
      {
        name: 'Arcane Trickster',
        children: [
          { name: 'Spellcasting' },
          { name: 'Mage Hand Legerdemain' },
          { name: 'Magical Ambush' },
          { name: 'Versatile Trickster' },
          { name: 'Spell Thief' },
        ],
      },
    ],
  },
  {
    name: 'Sorcerer',
    icon: '🔥',
    children: [
      {
        name: 'Draconic Bloodline',
        children: [
          { name: 'Dragon Ancestor' },
          { name: 'Draconic Resilience' },
          { name: 'Elemental Affinity' },
          { name: 'Dragon Wings' },
          { name: 'Draconic Presence' },
        ],
      },
      {
        name: 'Wild Magic',
        children: [
          { name: 'Wild Magic Surge' },
          { name: 'Tides of Chaos' },
          { name: 'Bend Luck' },
          { name: 'Controlled Chaos' },
          { name: 'Spell Bombardment' },
        ],
      },
    ],
  },
  {
    name: 'Warlock',
    icon: '📜',
    children: [
      {
        name: 'The Archfey',
        children: [
          { name: 'Fey Presence' },
          { name: 'Misty Escape' },
          { name: 'Beguiling Defenses' },
          { name: 'Dark Delirium' },
        ],
      },
      {
        name: 'The Fiend',
        children: [
          { name: "Dark One's Blessing" },
          { name: "Dark One's Own Luck" },
          { name: 'Fiendish Resilience' },
          { name: 'Hurl Through Hell' },
        ],
      },
      {
        name: 'The Great Old One',
        children: [
          { name: 'Awakened Mind' },
          { name: 'Entropic Ward' },
          { name: 'Thought Shield' },
          { name: 'Create Thrall' },
        ],
      },
    ],
  },
  {
    name: 'Wizard',
    icon: '🔮',
    children: [
      {
        name: 'School of Abjuration',
        children: [
          { name: 'Abjuration Savant' },
          { name: 'Arcane Ward' },
          { name: 'Projected Ward' },
          { name: 'Improved Abjuration' },
          { name: 'Spell Resistance' },
        ],
      },
      {
        name: 'School of Conjuration',
        children: [
          { name: 'Conjuration Savant' },
          { name: 'Minor Conjuration' },
          { name: 'Benign Transposition' },
          { name: 'Focused Conjuration' },
          { name: 'Durable Summons' },
        ],
      },
      {
        name: 'School of Divination',
        children: [
          { name: 'Divination Savant' },
          { name: 'Portent' },
          { name: 'Expert Divination' },
          { name: 'The Third Eye' },
          { name: 'Greater Portent' },
        ],
      },
      {
        name: 'School of Enchantment',
        children: [
          { name: 'Enchantment Savant' },
          { name: 'Hypnotic Gaze' },
          { name: 'Instinctive Charm' },
          { name: 'Split Enchantment' },
          { name: 'Alter Memories' },
        ],
      },
      {
        name: 'School of Evocation',
        children: [
          { name: 'Evocation Savant' },
          { name: 'Sculpt Spells' },
          { name: 'Potent Cantrip' },
          { name: 'Empowered Evocation' },
          { name: 'Overchannel' },
        ],
      },
      {
        name: 'School of Illusion',
        children: [
          { name: 'Illusion Savant' },
          { name: 'Improved Minor Illusion' },
          { name: 'Malleable Illusions' },
          { name: 'Illusory Self' },
          { name: 'Illusory Reality' },
        ],
      },
      {
        name: 'School of Necromancy',
        children: [
          { name: 'Necromancy Savant' },
          { name: 'Grim Harvest' },
          { name: 'Undead Thralls' },
          { name: 'Inured to Undeath' },
          { name: 'Command Undead' },
        ],
      },
      {
        name: 'School of Transmutation',
        children: [
          { name: 'Transmutation Savant' },
          { name: 'Minor Alchemy' },
          { name: "Transmuter's Stone" },
          { name: 'Shapechanger' },
          { name: 'Master Transmuter' },
        ],
      },
    ],
  },
];
