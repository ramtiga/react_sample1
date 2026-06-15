# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- 常に日本語で会話する

## ロール定義

あなたは react,typescript のエキスパートエンジニアとして対応してください。

# プロジェクト設定

## 技術スタック

- React 19
- TypeScript 6
- Tailwind CSS
- Vite
- Vitest

## コーディング規約

- 2スペースインデント
- シングルクォート優先
- セミコロン省略
- 関数コンポーネントはアロー関数で定義
- propsの型定義は必須

## Development Commands

**Start development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

- Runs TypeScript compilation (`tsc -b`) followed by Vite build

**Lint code:**

```bash
npm run lint
```

**Preview production build:**

```bash
npm run preview
```

## Architecture & Technology Stack

**Frontend Framework:** React 19.1.1 with TypeScript
**Build Tool:** Vite 7 with Hot Module Replacement (HMR)
**Bundler Mode:** ESNext modules with bundler resolution

### TypeScript Configuration

- **Strict mode enabled** with comprehensive linting rules
- **Project references:** Split configuration between app (`tsconfig.app.json`) and build tools (`tsconfig.node.json`)
- **Target:** ES2022 with DOM libraries
- **JSX:** react-jsx transform (no React import needed in components)

### ESLint Configuration

- **Modern setup:** Uses new ESLint config format with `defineConfig`
- **React-specific rules:** Includes react-hooks and react-refresh plugins
- **TypeScript integration:** typescript-eslint for TypeScript-specific linting
- **Ignores:** `dist` folder is globally ignored

### Key Development Notes

- **React 19:** Uses new createRoot API from react-dom/client
- **Module type:** ESM modules (type: "module" in package.json)
- **No test framework:** Currently no testing setup configured
- **Standard Vite template:** Based on React + TypeScript + Vite template without React Compiler

## React Development Guidelines

### Library Requirements

- **Data fetching:** Use `@tanstack/react-query` for all data fetching operations
- **UI components:** Material UI component library
- **Architecture:** Atomic Design pattern (atoms, molecules, organisms)

### Folder Structure

```
src/
├── components/         # 再利用可能なUIコンポーネント
│   ├── atoms/          # 基本的な構成要素
│   ├── molecules/      # シンプルなコンポーネントの組み合わせ
│   └── organisms/      # 複雑なコンポーネントの組み合わせ
├── pages/              # ページレベルコンポーネント
├── router/             # ルーティング設定
├── hooks/              # カスタムReactフック
├── utils/              # ユーティリティ関数
├── api/                # API呼び出し専用
├── types/              # TypeScript型定義
└── assets/             # 静的アセット
```

### Development Rules

- **Type safety:** Define types for all props and API responses in `types/` folder
- **API access:** Use custom hooks in `hooks/` folder for external API calls
- **Loading states:** Use Suspense component with fallback for async operations
- **Error handling:** Create 404 page for route errors
- **Performance:** Apply memoization only after React DevTools Profiler analysis

### useEffect Guidelines

- **Usage scope:** Only for external system/API synchronization
- **Computation:** Calculate values during render when possible
- **User actions:** Handle in event handlers, not useEffect
- **Documentation:** Add clear comments explaining synchronization targets

### Code Example

```jsx
<Suspense fallback={<LoadingSpinner />}>
  <YourComponent />
</Suspense>
```
