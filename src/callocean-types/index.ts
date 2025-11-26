export interface Treasure {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  value: number;
  location: string;
  isFound: boolean;
  miniGame: MiniGame;
}

export interface MiniGame {
  id: string;
  type: 'puzzle' | 'memory' | 'timing' | 'pattern';
  difficulty: number;
  instructions: string;
  solution: any;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  image: string;
  treasures: Treasure[];
  isCompleted: boolean;
  progress: number;
  rewards: Reward[];
}

export interface Reward {
  id: string;
  type: 'treasure' | 'achievement' | 'unlock';
  name: string;
  description: string;
  value: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
  progress: number;
  maxProgress: number;
  reward: Reward;
}

export interface PlayerStats {
  level: number;
  experience: number;
  treasuresFound: number;
  questsCompleted: number;
  achievementsUnlocked: number;
  totalScore: number;
  rank: string;
}

export interface GameState {
  currentQuest: string | null;
  currentTreasure: string | null;
  playerStats: PlayerStats;
  foundTreasures: string[];
  completedQuests: string[];
  unlockedAchievements: string[];
  inventory: Treasure[];
  currentMiniGame: string | null;
  savedStories: string[];
  storyLog: StoryLogEntry[];
  notifications: Notification[];
}

export type ScenarioImpact = 'strategy' | 'morale' | 'speed' | 'mystery';

export interface ScenarioOptionReward {
  experience?: number;
  treasureId?: string;
  achievementId?: string;
  notification?: {
    title: string;
    message: string;
  };
}

export interface ScenarioOption {
  id: string;
  text: string;
  impact: ScenarioImpact;
  log: string;
  reward?: ScenarioOptionReward;
}

export interface ScenarioQuestion {
  id: string;
  text: string;
  options: ScenarioOption[];
}

export interface ScenarioEnding {
  id: string;
  title: string;
  focus: ScenarioImpact;
  storyId: string;
  summary: string;
  rewards: Reward[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  questRewardId: string;
  questions: ScenarioQuestion[];
  endings: ScenarioEnding[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
  scenarioId: string;
  mood: string;
  excerpt: string;
  keyMoments: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'story' | 'treasure' | 'system';
  relatedStoryId?: string;
  isRead: boolean;
}

export interface StoryLogEntry {
  id: string;
  storyId: string;
  scenarioId: string;
  endingId: string;
  timestamp: string;
}
