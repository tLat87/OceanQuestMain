export interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  title: string;
  stories: Story[];
}

export interface GameState {
  currentScenario: string | null;
  currentStory: string | null;
  currentQuestionIndex: number;
  answers: Answer[];
  savedStories: string[];
}

export interface Answer {
  questionId: string;
  optionId: string;
  isCorrect: boolean;
}
