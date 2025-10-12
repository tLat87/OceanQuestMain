import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, Answer } from '../types';

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

type GameAction =
  | { type: 'START_SCENARIO'; scenarioId: string }
  | { type: 'START_STORY'; storyId: string }
  | { type: 'ANSWER_QUESTION'; answer: Answer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'SAVE_STORY'; storyId: string }
  | { type: 'RESET_GAME' };

const initialState: GameState = {
  currentScenario: null,
  currentStory: null,
  currentQuestionIndex: 0,
  answers: [],
  savedStories: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_SCENARIO':
      return {
        ...state,
        currentScenario: action.scenarioId,
        currentStory: null,
        currentQuestionIndex: 0,
        answers: [],
      };
    case 'START_STORY':
      return {
        ...state,
        currentStory: action.storyId,
        currentQuestionIndex: 0,
        answers: [],
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: [...state.answers, action.answer],
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'SAVE_STORY':
      return {
        ...state,
        savedStories: state.savedStories.includes(action.storyId)
          ? state.savedStories
          : [...state.savedStories, action.storyId],
      };
    case 'RESET_GAME':
      return initialState;
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
