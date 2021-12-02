import "./App.css";
import s from "./Components/Feedback.module.css";
import Feedback from "./Components/Feedback";
function App() {
  return (
    <div className={s.container}>
      <Feedback />
    </div>
  );
}

export default App;
