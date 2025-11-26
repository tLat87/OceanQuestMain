import { Quest, Treasure, Achievement, Story, Scenario, Notification } from '../callocean-types';

export const quests: Quest[] = [
  {
    id: 'coral-kingdom',
    title: 'CORAL KINGDOM',
    description: 'Explore the vibrant coral reefs and discover ancient treasures hidden among the colorful marine life.',
    image: '1',
    treasures: [
      {
        id: 'coral-crown',
        name: 'Coral Crown of the Deep',
        description: 'A magnificent crown made from the rarest coral, said to grant wisdom to its wearer.',
        image: '1',
        rarity: 'legendary',
        value: 1000,
        location: 'Coral Palace',
        isFound: false,
        miniGame: {
          id: 'coral-puzzle',
          type: 'puzzle',
          difficulty: 3,
          instructions: 'Arrange the coral pieces to form the crown pattern',
          solution: 'crown-pattern'
        }
      },
      {
        id: 'pearl-of-wisdom',
        name: 'Pearl of Ancient Wisdom',
        description: 'A glowing pearl that contains the knowledge of the ocean depths.',
        image: '2',
        rarity: 'epic',
        value: 750,
        location: 'Pearl Garden',
        isFound: false,
        miniGame: {
          id: 'pearl-memory',
          type: 'memory',
          difficulty: 2,
          instructions: 'Remember the sequence of pearl colors',
          solution: 'blue-red-green-yellow'
        }
      }
    ],
    isCompleted: false,
    progress: 0,
    rewards: [
      {
        id: 'coral-master',
        type: 'achievement',
        name: 'Coral Master',
        description: 'Master of the Coral Kingdom',
        value: 500
      }
    ]
  },
  {
    id: 'abyssal-depths',
    title: 'ABYSSAL DEPTHS',
    description: 'Dive into the darkest depths where legendary treasures await the bravest explorers.',
    image: '3',
    treasures: [
      {
        id: 'abyssal-triforce',
        name: 'Abyssal Triforce',
        description: 'A mystical artifact that controls the power of the deep ocean currents.',
        image: '3',
        rarity: 'legendary',
        value: 1500,
        location: 'Abyssal Temple',
        isFound: false,
        miniGame: {
          id: 'triforce-timing',
          type: 'timing',
          difficulty: 4,
          instructions: 'Time your clicks to match the ocean rhythm',
          solution: 'rhythm-pattern'
        }
      },
      {
        id: 'deep-sea-crystal',
        name: 'Deep Sea Crystal',
        description: 'A crystal that glows with the light of a thousand stars.',
        image: '4',
        rarity: 'rare',
        value: 600,
        location: 'Crystal Cavern',
        isFound: false,
        miniGame: {
          id: 'crystal-pattern',
          type: 'pattern',
          difficulty: 2,
          instructions: 'Follow the crystal light pattern',
          solution: 'spiral-pattern'
        }
      }
    ],
    isCompleted: false,
    progress: 0,
    rewards: [
      {
        id: 'abyss-explorer',
        type: 'achievement',
        name: 'Abyss Explorer',
        description: 'Brave explorer of the deepest depths',
        value: 800
      }
    ]
  },
  {
    id: 'sunken-city',
    title: 'SUNKEN CITY',
    description: 'Discover the lost city of Atlantis and uncover its ancient secrets and treasures.',
    image: '5',
    treasures: [
      {
        id: 'atlantis-orb',
        name: 'Orb of Atlantis',
        description: 'The legendary orb that once powered the entire city of Atlantis.',
        image: '5',
        rarity: 'legendary',
        value: 2000,
        location: 'Atlantis Palace',
        isFound: false,
        miniGame: {
          id: 'orb-puzzle',
          type: 'puzzle',
          difficulty: 5,
          instructions: 'Solve the ancient Atlantean puzzle',
          solution: 'atlantis-code'
        }
      },
      {
        id: 'merfolk-scales',
        name: 'Merfolk Royal Scales',
        description: 'Scales from the royal merfolk family, said to grant underwater breathing.',
        image: '6',
        rarity: 'epic',
        value: 900,
        location: 'Royal Quarters',
        isFound: false,
        miniGame: {
          id: 'scales-memory',
          type: 'memory',
          difficulty: 3,
          instructions: 'Match the merfolk scale patterns',
          solution: 'scale-sequence'
        }
      }
    ],
    isCompleted: false,
    progress: 0,
    rewards: [
      {
        id: 'atlantis-discoverer',
        type: 'achievement',
        name: 'Atlantis Discoverer',
        description: 'Discoverer of the lost city',
        value: 1000
      }
    ]
  }
];

export const storyLibrary: Story[] = [
  {
    id: 'light-above-abyss',
    title: 'The Light Above the Abyss',
    description: 'Guiding your crew through the superstorm awakens an ancient lighthouse that now answers only to you.',
    image: '1',
    scenarioId: 'storm-survival',
    mood: 'hopeful',
    excerpt: 'Waves like mountains, thunder like war drums — yet the light stayed with us.',
    keyMoments: [
      'Crew rallies behind your calm commands',
      'Ancestral lighthouse reactivates mid-storm',
      'Storm parts as the beam locks on your ship'
    ]
  },
  {
    id: 'guardian-of-waves',
    title: 'Guardian of the Waves',
    description: 'You mediate a fragile truce with the merfolk couriers guarding the tideways.',
    image: '2',
    scenarioId: 'tide-rescue',
    mood: 'heroic',
    excerpt: 'She rose from the foam, eyes like tides, asking if humans could still listen.',
    keyMoments: [
      'Decode bioluminescent distress calls',
      'Navigate tidal mazes without charts',
      'Earn the Guardian’s crest'
    ]
  },
  {
    id: 'path-of-old-turtle',
    title: 'Path of the Old Turtle',
    description: 'Following an ancient turtle spirit unlocks a forgotten trade route beneath the reefs.',
    image: '3',
    scenarioId: 'reef-almanac',
    mood: 'mysterious',
    excerpt: 'The turtle did not rush; neither did the ocean. We learned to move with the current.',
    keyMoments: [
      'Track tidal pulses through coral songs',
      'Translate shell etchings into coordinates',
      'Surface under the aurora of plankton'
    ]
  },
  {
    id: 'ghost-of-horizon',
    title: 'Ghost of the Horizon',
    description: 'A phantom ship agrees to ferry your stories if you honor the secrets of the abyss.',
    image: '4',
    scenarioId: 'storm-survival',
    mood: 'mystic',
    excerpt: 'No sails moved, yet the ship advanced. It demanded tales instead of tolls.',
    keyMoments: [
      'Signal the phantom crew with storm lanterns',
      'Trade memories for safe passage',
      'Return with relic charts etched in light'
    ]
  }
];

export const scenarios: Scenario[] = [
  {
    id: 'storm-survival',
    title: 'STORM SURVIVAL',
    description: 'Hold your ship together while a superstorm tears open the sky.',
    difficulty: 'hard',
    image: '1',
    questRewardId: 'coral-kingdom',
    questions: [
      {
        id: 'storm-q1',
        text: 'Winds slam the deck sideways. What is your first order?',
        options: [
          {
            id: 'storm-q1-a',
            text: 'Secure the crew and redistribute weight.',
            impact: 'morale',
            log: 'You keep fear from spreading.',
            reward: { experience: 40 }
          },
          {
            id: 'storm-q1-b',
            text: 'Force engines to full to outrun the wave.',
            impact: 'speed',
            log: 'You bet on raw momentum.',
            reward: { experience: 25 }
          }
        ]
      },
      {
        id: 'storm-q2',
        text: 'Lightning fries your sensors. How do you navigate?',
        options: [
          {
            id: 'storm-q2-a',
            text: 'Trust the old star charts etched into the helm.',
            impact: 'mystery',
            log: 'Ancient knowledge guides you.',
            reward: { experience: 30 }
          },
          {
            id: 'storm-q2-b',
            text: 'Use crew intuition and short manual pulses.',
            impact: 'strategy',
            log: 'Every sailor becomes a sensor.',
            reward: { experience: 35 }
          }
        ]
      },
      {
        id: 'storm-q3',
        text: 'The hull groans. You can save only one system.',
        options: [
          {
            id: 'storm-q3-a',
            text: 'Shield core engines for a burst through the wall of rain.',
            impact: 'speed',
            log: 'Power surges roar under your command.',
            reward: { experience: 50, treasureId: 'pearl-of-wisdom' }
          },
          {
            id: 'storm-q3-b',
            text: 'Divert power to signal flares, calling the lighthouse.',
            impact: 'morale',
            log: 'Hope becomes your strongest weapon.',
            reward: { experience: 50, achievementId: 'first-treasure' }
          }
        ]
      }
    ],
    endings: [
      {
        id: 'storm-ending-light',
        title: 'Beacon Commander',
        focus: 'morale',
        storyId: 'light-above-abyss',
        summary: 'You reignite the silent lighthouse and the storm bends around you.',
        rewards: [
          {
            id: 'storm-beacon',
            type: 'achievement',
            name: 'Beacon Commander',
            description: 'Tamed the abyssal storm with courage.',
            value: 400
          }
        ]
      },
      {
        id: 'storm-ending-dash',
        title: 'Wavebreaker',
        focus: 'speed',
        storyId: 'guardian-of-waves',
        summary: 'Raw speed shreds the storm wall and reveals merfolk reinforcements.',
        rewards: [
          {
            id: 'storm-wavebreaker',
            type: 'treasure',
            name: 'Wavebreaker Keel',
            description: 'Reinforced keel plating from the Guardian.',
            value: 350
          }
        ]
      },
      {
        id: 'storm-ending-seer',
        title: 'Storm Seer',
        focus: 'mystery',
        storyId: 'ghost-of-horizon',
        summary: 'You navigate by forgotten constellations and attract a spectral fleet.',
        rewards: [
          {
            id: 'storm-seer',
            type: 'achievement',
            name: 'Storm Seer',
            description: 'Read the sky when no instruments could.',
            value: 500
          }
        ]
      },
      {
        id: 'storm-ending-strategy',
        title: 'Deck Architect',
        focus: 'strategy',
        storyId: 'path-of-old-turtle',
        summary: 'Crew coordination turns chaos into choreography.',
        rewards: [
          {
            id: 'storm-architect',
            type: 'achievement',
            name: 'Deck Architect',
            description: 'Orchestrated the perfect counter-storm formation.',
            value: 300
          }
        ]
      }
    ]
  },
  {
    id: 'tide-rescue',
    title: 'TIDE RESCUE',
    description: 'Free a convoy of tide-drones trapped inside a whirlpool maze.',
    difficulty: 'medium',
    image: '2',
    questRewardId: 'sunken-city',
    questions: [
      {
        id: 'tide-q1',
        text: 'The whirlpool splits into glowing channels.',
        options: [
          {
            id: 'tide-q1-a',
            text: 'Send drones into every channel at once.',
            impact: 'strategy',
            log: 'You bet on distributed scouting.',
            reward: { experience: 25 }
          },
          {
            id: 'tide-q1-b',
            text: 'Tune to the loudest hum and follow it.',
            impact: 'mystery',
            log: 'Sound becomes your compass.',
            reward: { experience: 25 }
          }
        ]
      },
      {
        id: 'tide-q2',
        text: 'Merfolk envoys appear, protective of the maze.',
        options: [
          {
            id: 'tide-q2-a',
            text: 'Offer to repair their tide anchors.',
            impact: 'morale',
            log: 'Trust is forged through service.',
            reward: { experience: 35, treasureId: 'merfolk-scales' }
          },
          {
            id: 'tide-q2-b',
            text: 'Challenge them to a current-tracing duel.',
            impact: 'speed',
            log: 'Agility earns their respect.',
            reward: { experience: 35 }
          }
        ]
      },
      {
        id: 'tide-q3',
        text: 'The trapped convoy begins to sink.',
        options: [
          {
            id: 'tide-q3-a',
            text: 'Chain the drones to your hull and reverse thrust.',
            impact: 'strategy',
            log: 'Engineering over brute force.',
            reward: { experience: 40 }
          },
          {
            id: 'tide-q3-b',
            text: 'Teach the convoy to ride the rising bubbles.',
            impact: 'morale',
            log: 'You coach them through fear.',
            reward: { experience: 40 }
          }
        ]
      }
    ],
    endings: [
      {
        id: 'tide-ending-guardian',
        title: 'Signed by the Guardian',
        focus: 'morale',
        storyId: 'guardian-of-waves',
        summary: 'Empathy turns the merfolk Guardian into an ally.',
        rewards: [
          {
            id: 'tide-crest',
            type: 'achievement',
            name: 'Guardian’s Crest',
            description: 'Recognized by the tide guardians.',
            value: 450
          }
        ]
      },
      {
        id: 'tide-ending-strategist',
        title: 'Master of Currents',
        focus: 'strategy',
        storyId: 'path-of-old-turtle',
        summary: 'You decode the entire whirlpool matrix.',
        rewards: [
          {
            id: 'tide-matrix',
            type: 'treasure',
            name: 'Current Matrix',
            description: 'Blueprint of moving tides.',
            value: 420
          }
        ]
      },
      {
        id: 'tide-ending-velocity',
        title: 'Velocity Pact',
        focus: 'speed',
        storyId: 'ghost-of-horizon',
        summary: 'Speed negotiations impress the phantom convoy.',
        rewards: [
          {
            id: 'tide-velocity',
            type: 'achievement',
            name: 'Velocity Pact',
            description: 'Forged a racing truce under pressure.',
            value: 380
          }
        ]
      },
      {
        id: 'tide-ending-secrets',
        title: 'Song of the Deep',
        focus: 'mystery',
        storyId: 'light-above-abyss',
        summary: 'Secret melodies reveal a hidden exit.',
        rewards: [
          {
            id: 'tide-song',
            type: 'treasure',
            name: 'Whirlpool Lyre',
            description: 'Instrument carved from tide-song shells.',
            value: 390
          }
        ]
      }
    ]
  },
  {
    id: 'reef-almanac',
    title: 'REEF ALMANAC',
    description: 'Follow the Old Turtle through memory currents to chart new safe routes.',
    difficulty: 'easy',
    image: '3',
    questRewardId: 'abyssal-depths',
    questions: [
      {
        id: 'reef-q1',
        text: 'The turtle pauses over glowing coral.',
        options: [
          {
            id: 'reef-q1-a',
            text: 'Document every pattern patiently.',
            impact: 'strategy',
            log: 'Patience reveals sequences.',
            reward: { experience: 20 }
          },
          {
            id: 'reef-q1-b',
            text: 'Let the turtle set the rhythm and mirror it.',
            impact: 'mystery',
            log: 'Intuition over notation.',
            reward: { experience: 25 }
          }
        ]
      },
      {
        id: 'reef-q2',
        text: 'Currents split around volcanic vents.',
        options: [
          {
            id: 'reef-q2-a',
            text: 'Deploy temperature buoys and calculate vectors.',
            impact: 'strategy',
            log: 'Science guides the path.',
            reward: { experience: 30 }
          },
          {
            id: 'reef-q2-b',
            text: 'Ask the turtle to share a memory of the safe lane.',
            impact: 'morale',
            log: 'Respect earns guidance.',
            reward: { experience: 30 }
          }
        ]
      },
      {
        id: 'reef-q3',
        text: 'Night falls; bioluminescent predators swarm.',
        options: [
          {
            id: 'reef-q3-a',
            text: 'Shield lights and glide silently.',
            impact: 'speed',
            log: 'Low profile saves energy.',
            reward: { experience: 35 }
          },
          {
            id: 'reef-q3-b',
            text: 'Project calming harmonics through the hull.',
            impact: 'morale',
            log: 'Music pacifies the swarm.',
            reward: { experience: 35, treasureId: 'deep-sea-crystal' }
          }
        ]
      }
    ],
    endings: [
      {
        id: 'reef-ending-cartographer',
        title: 'Cartographer of Shells',
        focus: 'strategy',
        storyId: 'path-of-old-turtle',
        summary: 'Your notes become the next generation of charts.',
        rewards: [
          {
            id: 'reef-map',
            type: 'achievement',
            name: 'Shell Cartographer',
            description: 'Mapped the turtle’s migration.',
            value: 320
          }
        ]
      },
      {
        id: 'reef-ending-harmonic',
        title: 'Harmony Keeper',
        focus: 'morale',
        storyId: 'guardian-of-waves',
        summary: 'Songs turn predators into escorts.',
        rewards: [
          {
            id: 'reef-harmony',
            type: 'achievement',
            name: 'Harmony Keeper',
            description: 'Soothed the abyss with music.',
            value: 340
          }
        ]
      },
      {
        id: 'reef-ending-glide',
        title: 'Silent Glide',
        focus: 'speed',
        storyId: 'ghost-of-horizon',
        summary: 'Stealth earns the phantom fleet’s admiration.',
        rewards: [
          {
            id: 'reef-glide',
            type: 'treasure',
            name: 'Glide Fins',
            description: 'Fins engraved with silent runes.',
            value: 310
          }
        ]
      },
      {
        id: 'reef-ending-intuition',
        title: 'Pulse Listener',
        focus: 'mystery',
        storyId: 'light-above-abyss',
        summary: 'You feel the current before it forms.',
        rewards: [
          {
            id: 'reef-pulse',
            type: 'achievement',
            name: 'Pulse Listener',
            description: 'Moved with the tide oracle.',
            value: 360
          }
        ]
      }
    ]
  }
];

export const notificationFeed: Notification[] = [
  {
    id: 'notif-story-1',
    title: 'Story unlocked',
    message: '“The Light Above the Abyss” is now in your chronicle.',
    timestamp: new Date().toISOString(),
    type: 'story',
    relatedStoryId: 'light-above-abyss',
    isRead: false
  },
  {
    id: 'notif-treasure-1',
    title: 'Treasure recovered',
    message: 'Pearl of Ancient Wisdom added to inventory.',
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    type: 'treasure',
    relatedStoryId: undefined,
    isRead: false
  },
  {
    id: 'notif-system-1',
    title: 'Daily challenge ready',
    message: 'Replay any scenario to boost leaderboard score.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    type: 'system',
    relatedStoryId: undefined,
    isRead: true
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first-treasure',
    title: 'First Discovery',
    description: 'Find your first treasure',
    icon: 'star',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    reward: {
      id: 'discovery-badge',
      type: 'achievement',
      name: 'Discovery Badge',
      description: 'Your first treasure hunting badge',
      value: 100
    }
  },
  {
    id: 'coral-master',
    title: 'Coral Master',
    description: 'Complete the Coral Kingdom quest',
    icon: 'coral',
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    reward: {
      id: 'coral-crown',
      type: 'treasure',
      name: 'Coral Crown',
      description: 'Legendary crown from the coral kingdom',
      value: 1000
    }
  },
  {
    id: 'treasure-hunter',
    title: 'Treasure Hunter',
    description: 'Find 10 treasures',
    icon: 'treasure',
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    reward: {
      id: 'hunter-badge',
      type: 'achievement',
      name: 'Hunter Badge',
      description: 'Elite treasure hunter recognition',
      value: 500
    }
  },
  {
    id: 'ocean-master',
    title: 'Ocean Master',
    description: 'Complete all quests',
    icon: 'crown',
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    reward: {
      id: 'master-crown',
      type: 'achievement',
      name: 'Master Crown',
      description: 'Ultimate ocean explorer crown',
      value: 2000
    }
  }
];

export const allTreasures: Treasure[] = quests.flatMap(quest => quest.treasures);