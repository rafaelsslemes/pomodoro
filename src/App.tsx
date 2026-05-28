import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Heading text="Pomodoro Timer">
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}

// export { App };
