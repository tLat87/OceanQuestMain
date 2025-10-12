# Call of the Ocean 🌊

**Discover the secrets that sleep beneath the waves.**

Dive into the mysterious depths of the ocean and uncover ancient legends, forgotten treasures, and the timeless wisdom of the sea. Every choice you make will shape your path — will you follow the calm current or face the storm?

## Features

- 🌊 **Immersive ocean-inspired visuals** with stunning underwater themes
- 📚 **Three unique storylines** filled with mystery and discovery:
  - **STORM SURVIVAL** - Navigate through treacherous storms
  - **RESCUE DUTY** - Save lives in the deep ocean
  - **AFTER THE STORM** - Explore secrets revealed by calm waters
- 🎯 **Interactive choices** that shape your destiny
- 🎨 **Semi-realistic art style** inspired by myth and adventure
- 🎵 **Calming ambient soundtrack** that draws you into the deep
- ⭐ **Save your favorite stories** and revisit them anytime

## Gameplay

Call of the Ocean is an interactive story game where players:

1. **Choose a scenario** from three available storylines
2. **Read immersive stories** with rich ocean-themed narratives
3. **Make crucial decisions** by selecting between two options
4. **Receive feedback** on their choices from the Sea King
5. **Progress through questions** to complete each story
6. **Save favorite stories** for later reading

## Screenshots

The app features:
- 🏠 **Main Menu** with "START MISSION" button
- 📖 **Scenario Selection** with three unique storylines
- 🏝️ **Story Screen** featuring the lighthouse and narrative
- ❓ **Question Screen** with two-choice decisions
- 💭 **Feedback Screen** with Sea King's wisdom
- ⭐ **Saved Stories** collection

## Getting Started

### Prerequisites

- Node.js (>= 18)
- React Native development environment
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CallOcean
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Metro bundler**
   ```bash
   npm start
   ```

4. **Run on iOS**
   ```bash
   npm run ios
   ```

5. **Run on Android**
   ```bash
   npm run android
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.tsx   # Main navigation component
├── screens/            # Screen components
│   ├── MainMenuScreen.tsx
│   ├── ScenarioSelectionScreen.tsx
│   ├── StoryScreen.tsx
│   ├── QuestionScreen.tsx
│   ├── FeedbackScreen.tsx
│   └── SavedStoriesScreen.tsx
├── data/               # Game data and stories
│   └── stories.ts      # Scenario and story definitions
├── types/              # TypeScript type definitions
│   └── index.ts        # Game state and story types
└── utils/              # Utilities and helpers
    ├── GameContext.tsx # Game state management
    └── styles.ts       # Common styles and colors
```

## Game Data

The app includes rich story content:

- **The Light Above the Abyss** - A lighthouse story about navigation and survival
- **The Siren's Call** - A merfolk rescue mission
- **The Sunken Treasure** - Post-storm exploration adventures

Each story contains multiple questions with meaningful choices that affect the narrative outcome.

## Technologies Used

- **React Native** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **React Navigation** - Screen navigation
- **React Context** - State management
- **Custom styling** - Ocean-themed UI design

## Development

### Adding New Stories

1. Edit `src/data/stories.ts`
2. Add new scenarios, stories, and questions
3. Follow the existing TypeScript interfaces

### Customizing Styles

1. Edit `src/utils/styles.ts`
2. Modify colors, fonts, and layout styles
3. Maintain the ocean theme consistency

## The Sea is Calling. Will You Answer? 🌊

Begin your journey now — listen to the Call of the Ocean.