import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./dark-mode.css";
import "./dark-mode-fixes.css";
import "./dark-mode-unified.css";
import "./ux-fixes.css";
import "./pages/plan-test-fixes.css";
import "./pages/lessons.css";
import Home from "./pages/Home";

const AdminLessons = lazy(() => import("./pages/AdminLessons"));
const BossChallenge = lazy(() => import("./pages/BossChallenge"));
const BusinessPractice = lazy(() => import("./pages/BusinessPractice"));
const DailyPlan = lazy(() => import("./pages/DailyPlan"));
const Diagnostic = lazy(() => import("./pages/Diagnostic"));
const Games = lazy(() => import("./pages/Games"));
const Learn = lazy(() => import("./pages/Learn"));
const LessonPlayer = lazy(() => import("./pages/LessonPlayer"));
const Lessons = lazy(() => import("./pages/Lessons"));
const MistakeLab = lazy(() => import("./pages/MistakeLab"));
const MockTest = lazy(() => import("./pages/MockTest"));
const Modes = lazy(() => import("./pages/Modes"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Practice = lazy(() => import("./pages/Practice"));
const Profile = lazy(() => import("./pages/Profile"));
const ProgressDashboard = lazy(() => import("./pages/ProgressDashboard"));
const Vocabulary = lazy(() => import("./pages/Vocabulary"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<div className="app-route-loading" role="status" aria-live="polite">Đang chuẩn bị trải nghiệm học tập…</div>}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/learn"} component={Learn} />
      <Route path={"/modes"} component={Modes} />
      <Route path={"/vocabulary"} component={Vocabulary} />
      <Route path={"/practice"} component={Practice} />
      <Route path={"/games"} component={Games} />
      <Route path={"/diagnostic"} component={Diagnostic} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/daily-plan"} component={DailyPlan} />
      <Route path={"/mock-test"} component={MockTest} />
      <Route path={"/lessons"} component={Lessons} />
      <Route path={"/lessons/:slug"} component={LessonPlayer} />
      <Route path={"/mistake-lab"} component={MistakeLab} />
      <Route path={"/boss-challenge"} component={BossChallenge} />
      <Route path={"/business-practice"} component={BusinessPractice} />
      <Route path={"/progress-dashboard"} component={ProgressDashboard} />
      <Route path={"/admin/lessons"} component={AdminLessons} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
