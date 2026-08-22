import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./dark-mode.css";
import "./dark-mode-fixes.css";
import "./ux-fixes.css";
import "./pages/plan-test-fixes.css";
import Games from "./pages/Games";
import Diagnostic from "./pages/Diagnostic";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Modes from "./pages/Modes";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import Vocabulary from "./pages/Vocabulary";
import DailyPlan from "./pages/DailyPlan";
import MockTest from "./pages/MockTest";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
