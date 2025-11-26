import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, Treasure, Achievement, Notification, StoryLogEntry } from '../callocean-types';
import { allTreasures, notificationFeed } from '../callocean-data/stories';

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

type GameAction =
  | { type: 'START_QUEST'; questId: string }
  | { type: 'START_TREASURE_HUNT'; treasureId: string }
  | { type: 'FIND_TREASURE'; treasureId: string }
  | { type: 'COMPLETE_QUEST'; questId: string }
  | { type: 'UNLOCK_ACHIEVEMENT'; achievementId: string }
  | { type: 'START_MINI_GAME'; miniGameId: string }
  | { type: 'COMPLETE_MINI_GAME'; miniGameId: string; success: boolean }
  | { type: 'ADD_EXPERIENCE'; amount: number }
  | { type: 'SAVE_STORY'; storyId: string }
  | { type: 'UNSAVE_STORY'; storyId: string }
  | { type: 'LOG_STORY'; entry: StoryLogEntry }
  | { type: 'PUSH_NOTIFICATION'; notification: Notification }
  | { type: 'MARK_NOTIFICATION_READ'; notificationId: string }
  | { type: 'RESET_GAME' };

const cloneTreasures = () => allTreasures.map(treasure => ({ ...treasure }));
const cloneNotifications = () => notificationFeed.map(notification => ({ ...notification }));

const createInitialState = (): GameState => ({
  currentQuest: null,
  currentTreasure: null,
  playerStats: {
    level: 1,
    experience: 0,
    treasuresFound: 0,
    questsCompleted: 0,
    achievementsUnlocked: 0,
    totalScore: 0,
    rank: 'Novice Explorer'
  },
  foundTreasures: [],
  completedQuests: [],
  unlockedAchievements: [],
  inventory: cloneTreasures(),
  currentMiniGame: null,
  savedStories: [],
  storyLog: [],
  notifications: cloneNotifications(),
});

const initialState: GameState = createInitialState();

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_QUEST':
      return {
        ...state,
        currentQuest: action.questId,
        currentTreasure: null,
      };
    case 'START_TREASURE_HUNT':
      return {
        ...state,
        currentTreasure: action.treasureId,
      };
    case 'FIND_TREASURE':
      const treasureHit = state.inventory.find(t => t.id === action.treasureId);
      const treasureValue = treasureHit?.value || 0;
      const treasureAlreadyFound = state.foundTreasures.includes(action.treasureId);
      const updatedInventory = state.inventory.map(t =>
        t.id === action.treasureId ? { ...t, isFound: true } : t
      );
      return {
        ...state,
        inventory: updatedInventory,
        foundTreasures: treasureAlreadyFound
          ? state.foundTreasures
          : [...state.foundTreasures, action.treasureId],
        playerStats: {
          ...state.playerStats,
          treasuresFound: treasureAlreadyFound
            ? state.playerStats.treasuresFound
            : state.playerStats.treasuresFound + 1,
          totalScore: treasureAlreadyFound
            ? state.playerStats.totalScore
            : state.playerStats.totalScore + treasureValue,
        },
      };
    case 'COMPLETE_QUEST':
      return {
        ...state,
        completedQuests: state.completedQuests.includes(action.questId)
          ? state.completedQuests
          : [...state.completedQuests, action.questId],
        playerStats: {
          ...state.playerStats,
          questsCompleted: state.playerStats.questsCompleted + 1,
        },
      };
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        unlockedAchievements: state.unlockedAchievements.includes(action.achievementId)
          ? state.unlockedAchievements
          : [...state.unlockedAchievements, action.achievementId],
        playerStats: {
          ...state.playerStats,
          achievementsUnlocked: state.playerStats.achievementsUnlocked + 1,
        },
      };
    case 'START_MINI_GAME':
      return {
        ...state,
        currentMiniGame: action.miniGameId,
      };
    case 'COMPLETE_MINI_GAME':
      return {
        ...state,
        currentMiniGame: null,
        playerStats: {
          ...state.playerStats,
          experience: state.playerStats.experience + (action.success ? 50 : 10),
        },
      };
    case 'ADD_EXPERIENCE':
      const newExperience = state.playerStats.experience + action.amount;
      const newLevel = Math.floor(newExperience / 100) + 1;
      const newRank = newLevel >= 10 ? 'Ocean Master' : 
                     newLevel >= 5 ? 'Deep Explorer' : 
                     newLevel >= 3 ? 'Sea Adventurer' : 'Novice Explorer';
      
      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          experience: newExperience,
          level: newLevel,
          rank: newRank,
        },
      };
    case 'SAVE_STORY':
      if (state.savedStories.includes(action.storyId)) {
        return state;
      }
      return {
        ...state,
        savedStories: [...state.savedStories, action.storyId],
      };
    case 'UNSAVE_STORY':
      return {
        ...state,
        savedStories: state.savedStories.filter(id => id !== action.storyId),
      };
    case 'LOG_STORY':
      return {
        ...state,
        storyLog: [...state.storyLog, action.entry],
      };
    case 'PUSH_NOTIFICATION':
      return {
        ...state,
        notifications: [action.notification, ...state.notifications],
      };
    case 'MARK_NOTIFICATION_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.notificationId
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    case 'RESET_GAME':
      return createInitialState();
    default:
      return state;
  }
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}