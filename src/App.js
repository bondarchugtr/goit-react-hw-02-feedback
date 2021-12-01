import "./App.css";
import s from "./Feedback/Feedback.module.css";
import Feedback from "./Feedback/Feedback";
function App() {
  return (
    <div className={s.container}>
      <Feedback />
    </div>
  );
}

export default App;
