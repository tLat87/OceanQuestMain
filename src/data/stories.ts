import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'storm-survival',
    title: 'STORM SURVIVAL',
    stories: [
      {
        id: 'storm-survival-story',
        title: 'Storm Survival Adventure',
        description: 'Navigate through treacherous storm conditions and make critical decisions to survive the raging ocean. Your choices will determine whether you make it to safety or become another tale lost to the depths.',
        image: 'storm',
        questions: [
          {
            id: 'q1',
            text: 'Waves are crashing over the deck. What should you do?',
            options: [
              {
                id: 'a1',
                text: 'Go below deck',
                isCorrect: false,
                feedback: 'Going below deck during heavy waves can be dangerous as the hull might be compromised. This answer is not true.'
              },
              {
                id: 'a2',
                text: 'Stay on deck and hold onto a fixed point',
                isCorrect: true,
                feedback: 'Excellent! Staying on deck and securing yourself to a fixed point keeps you visible and safe from potential hull damage.'
              }
            ]
          },
          {
            id: 'q2',
            text: 'You see lightning striking nearby.',
            options: [
              {
                id: 'b1',
                text: 'Lie low and avoid metal',
                isCorrect: true,
                feedback: 'Perfect! Lying low and avoiding metal objects reduces the risk of being struck by lightning.'
              },
              {
                id: 'b2',
                text: 'Stand up to see better',
                isCorrect: false,
                feedback: 'Standing up during lightning makes you a target and puts you at greater risk. This answer is not true.'
              }
            ]
          },
          {
            id: 'q3',
            text: 'The mast is breaking.',
            options: [
              {
                id: 'c1',
                text: 'Cut the sails loose',
                isCorrect: true,
                feedback: 'Smart decision! Cutting the sails loose prevents them from causing further damage and helps stabilize the ship.'
              },
              {
                id: 'c2',
                text: 'Try to tie them',
                isCorrect: false,
                feedback: 'Trying to tie broken sails in a storm is extremely dangerous and could cause more damage. This answer is not true.'
              }
            ]
          },
          {
            id: 'q4',
            text: 'Someone is injured on deck.',
            options: [
              {
                id: 'd1',
                text: 'Help them immediately',
                isCorrect: false,
                feedback: 'While helping is noble, rushing to help without securing yourself first could result in two casualties. This answer is not true.'
              },
              {
                id: 'd2',
                text: 'Secure yourself and the person first',
                isCorrect: true,
                feedback: 'Wise choice! Securing both yourself and the injured person ensures you can help without becoming another victim.'
              }
            ]
          },
          {
            id: 'q5',
            text: 'The radio isn\'t working.',
            options: [
              {
                id: 'e1',
                text: 'Use signal flares',
                isCorrect: true,
                feedback: 'Excellent! Signal flares are a reliable backup communication method when radio fails.'
              },
              {
                id: 'e2',
                text: 'Try to repair it mid-storm',
                isCorrect: false,
                feedback: 'Attempting repairs during a storm is dangerous and could cause electrical hazards. This answer is not true.'
              }
            ]
          },
          {
            id: 'q6',
            text: 'The ship is sinking.',
            options: [
              {
                id: 'f1',
                text: 'Jump right away',
                isCorrect: false,
                feedback: 'Jumping without proper preparation could lead to injury or drowning. This answer is not true.'
              },
              {
                id: 'f2',
                text: 'Take a life vest and go down calmly',
                isCorrect: true,
                feedback: 'Perfect! Taking a life vest and descending calmly ensures you\'re prepared for survival in the water.'
              }
            ]
          },
          {
            id: 'q7',
            text: 'The water is freezing cold.',
            options: [
              {
                id: 'g1',
                text: 'Swim actively to stay warm',
                isCorrect: false,
                feedback: 'Active swimming in cold water can lead to rapid exhaustion and hypothermia. This answer is not true.'
              },
              {
                id: 'g2',
                text: 'Float calmly to save energy',
                isCorrect: true,
                feedback: 'Smart! Floating calmly conserves energy and body heat, increasing your chances of survival.'
              }
            ]
          },
          {
            id: 'q8',
            text: 'The boat flips over.',
            options: [
              {
                id: 'h1',
                text: 'Stay near the wreckage',
                isCorrect: true,
                feedback: 'Excellent! Staying near wreckage provides flotation support and makes you more visible to rescuers.'
              },
              {
                id: 'h2',
                text: 'Swim away quickly',
                isCorrect: false,
                feedback: 'Swimming away from wreckage removes your flotation support and makes rescue harder. This answer is not true.'
              }
            ]
          },
          {
            id: 'q9',
            text: 'A strong current pulls you off course.',
            options: [
              {
                id: 'i1',
                text: 'Swim directly to shore',
                isCorrect: false,
                feedback: 'Swimming directly against a strong current will exhaust you quickly. This answer is not true.'
              },
              {
                id: 'i2',
                text: 'Swim diagonally with the current',
                isCorrect: true,
                feedback: 'Brilliant! Swimming diagonally with the current conserves energy while gradually moving toward shore.'
              }
            ]
          },
          {
            id: 'q10',
            text: 'Someone on the shore is shouting for you.',
            options: [
              {
                id: 'j1',
                text: 'Swim straight to them',
                isCorrect: false,
                feedback: 'Swimming straight toward someone without assessing the situation could lead to dangerous conditions. This answer is not true.'
              },
              {
                id: 'j2',
                text: 'Assess the situation first',
                isCorrect: true,
                feedback: 'Perfect! Assessing the situation first ensures you understand the safest approach to reach help.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rescue-duty',
    title: 'RESCUE DUTY',
    stories: [
      {
        id: 'merfolk-rescue',
        title: 'The Siren\'s Call',
        description: 'Deep beneath the waves, where the sunlight dares not reach, lies the ancient city of the Merfolk. When storms rage above, they rise to save those who respect the ocean\'s power. But beware - not all who call from the depths are friends.',
        image: 'merfolk',
        questions: [
          {
            id: 'd1',
            text: 'You hear beautiful singing coming from the water. What do you do?',
            options: [
              {
                id: 'e1',
                text: 'Follow the sound immediately.',
                isCorrect: false,
                feedback: 'The sea\'s beauty can be deceptive. This answer is not true.'
              },
              {
                id: 'e2',
                text: 'Listen carefully but maintain your course.',
                isCorrect: true,
                feedback: 'Wisdom lies in discernment. The ocean rewards the cautious.'
              }
            ]
          },
          {
            id: 'd2',
            text: 'A mermaid appears and asks for help. How do you respond?',
            options: [
              {
                id: 'f1',
                text: 'Immediately offer assistance.',
                isCorrect: false,
                feedback: 'Trust must be earned, even in the depths. This answer is not true.'
              },
              {
                id: 'f2',
                text: 'Ask what kind of help she needs first.',
                isCorrect: true,
                feedback: 'Understanding before action is the way of the wise sailor.'
              }
            ]
          },
          {
            id: 'd3',
            text: 'The mermaid leads you to a sunken ship. What do you do?',
            options: [
              {
                id: 'g1',
                text: 'Dive down immediately to explore.',
                isCorrect: false,
                feedback: 'The depths hold many dangers. This answer is not true.'
              },
              {
                id: 'g2',
                text: 'Survey the area first and prepare properly.',
                isCorrect: true,
                feedback: 'The ocean rewards those who respect its power and prepare accordingly.'
              }
            ]
          },
          {
            id: 'd4',
            text: 'You discover survivors trapped in the ship. How do you help?',
            options: [
              {
                id: 'h1',
                text: 'Break through the hull immediately.',
                isCorrect: false,
                feedback: 'Hasty actions can cause more harm than good. This answer is not true.'
              },
              {
                id: 'h2',
                text: 'Find a safe way to reach them without causing damage.',
                isCorrect: true,
                feedback: 'The sea teaches us that rescue requires both courage and wisdom.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'after-storm',
    title: 'AFTER THE STORM',
    stories: [
      {
        id: 'treasure-hunt',
        title: 'The Sunken Treasure',
        description: 'When the storm passes and the waters calm, the ocean reveals its secrets. Ancient treasures, lost civilizations, and forgotten wisdom lie waiting for those brave enough to explore the depths.',
        image: 'treasure',
        questions: [
          {
            id: 'f1',
            text: 'You discover a sunken ship with treasure. What is your first priority?',
            options: [
              {
                id: 'g1',
                text: 'Gather as much treasure as possible.',
                isCorrect: false,
                feedback: 'Greed leads to destruction in the depths. This answer is not true.'
              },
              {
                id: 'g2',
                text: 'Document the find and ensure safe exploration.',
                isCorrect: true,
                feedback: 'The sea respects those who honor its mysteries with care.'
              }
            ]
          },
          {
            id: 'f2',
            text: 'You find an ancient map leading to more treasure. What do you do?',
            options: [
              {
                id: 'h1',
                text: 'Follow the map immediately.',
                isCorrect: false,
                feedback: 'Ancient maps can lead to ancient dangers. This answer is not true.'
              },
              {
                id: 'h2',
                text: 'Study the map carefully and plan your route.',
                isCorrect: true,
                feedback: 'The ocean rewards those who take time to understand its secrets.'
              }
            ]
          },
          {
            id: 'f3',
            text: 'You encounter a guardian spirit protecting the treasure. How do you proceed?',
            options: [
              {
                id: 'i1',
                text: 'Try to fight or outsmart the spirit.',
                isCorrect: false,
                feedback: 'Ancient spirits are not to be trifled with. This answer is not true.'
              },
              {
                id: 'i2',
                text: 'Show respect and explain your honorable intentions.',
                isCorrect: true,
                feedback: 'The sea\'s guardians respect those who approach with pure hearts.'
              }
            ]
          },
          {
            id: 'f4',
            text: 'The spirit offers you a choice: treasure or wisdom. What do you choose?',
            options: [
              {
                id: 'j1',
                text: 'Choose the treasure - it\'s what you came for.',
                isCorrect: false,
                feedback: 'Material wealth fades, but wisdom endures. This answer is not true.'
              },
              {
                id: 'j2',
                text: 'Choose wisdom - knowledge is the greatest treasure.',
                isCorrect: true,
                feedback: 'The ocean has chosen wisely. True treasure lies in understanding.'
              }
            ]
          },
          {
            id: 'f5',
            text: 'You return to the surface with your reward. How do you use it?',
            options: [
              {
                id: 'k1',
                text: 'Keep it all for yourself.',
                isCorrect: false,
                feedback: 'The sea\'s gifts are meant to be shared. This answer is not true.'
              },
              {
                id: 'k2',
                text: 'Share your knowledge with other sailors.',
                isCorrect: true,
                feedback: 'The ocean\'s greatest gift is the wisdom to help others navigate its mysteries.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'stories',
    title: 'STORIES',
    stories: [
      {
        id: 'light-above-abyss',
        title: '🌊 The Light Above the Abyss',
        description: 'In the heart of endless storms, where waves devour the sun, stands a lone lighthouse — silent, ancient, and unyielding. Sailors say its light isn\'t fueled by flame, but by the spirit of the sea itself. When the ocean rages, the beacon burns brighter, guiding lost souls home and warning all who dare to challenge the deep that the ocean never forgets.',
        image: '1',
        questions: []
      },
      {
        id: 'guardian-of-waves',
        title: '🧜‍♀️ Guardian of the Waves',
        description: 'She was born from the ocean\'s whisper, her hair the color of deep tides, her eyes holding the calm before the storm. Some call her a goddess, others — a memory of love the sea once lost. Wherever she appears, the waters still and the winds grow gentle. Those who meet her gaze feel the pulse of the sea within their hearts — and know they are safe beneath her watch.',
        image: '2',
        questions: []
      },
      {
        id: 'path-of-old-turtle',
        title: '🐢 Path of the Old Turtle',
        description: 'Long before ships sailed and kingdoms rose, the Old Turtle swam through the blue abyss, carrying the wisdom of the ages on her shell. She has seen stars fall into the ocean and new worlds rise from the sand. Many believe that following her path leads not to treasure, but to understanding — a moment where time, sea, and soul become one endless current.',
        image: '3',
        questions: []
      },
      {
        id: 'lord-of-depths',
        title: '⚔️ Lord of the Depths',
        description: 'Once, he was a man — a sailor who defied the storm to save his crew. The ocean claimed him, but instead of drowning, he was reborn beneath its surface. Now he rules the deep as its guardian, half legend, half god. With his golden crown and a twin-pronged spear, he commands the tides and the silence of the abyss, forever watching over those who brave the sea.',
        image: '4',
        questions: []
      },
      {
        id: 'treasure-forgotten-age',
        title: '💰 Treasure of the Forgotten Age',
        description: 'Beneath coral ruins and sleeping shipwrecks rests a chest no diver has ever opened. Time has covered it with salt and secrets, but it hums softly, as if alive. They say it holds not gold, but something far greater — the memories of sailors who once loved the sea more than their own lives. Whoever finds it will hear their voices and understand what it truly means to belong to the ocean.',
        image: '5',
        questions: []
      },
      {
        id: 'ghost-of-horizon',
        title: '🚢 Ghost of the Horizon',
        description: 'On misty nights, when the sea turns silver and the horizon disappears, a phantom ship sails silently across the waves. Its crew are shadows, its sails whisper like lost prayers. Some say it guides those who are lost back to shore. Others claim it lures them into eternity. No one knows which fate awaits — until the ghostly bell tolls and the ship passes through the fog once more.',
        image: '6',
        questions: []
      }
    ]
  }
];