import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string, summary:string) {
    setGoals((prevState) => {
      const newState: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevState, newState];
    });
  }

  function handleDeleteGoal(id: number){
    setGoals((prevState)=>prevState.filter(goal=> goal.id !== id))
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "List of goals" }}>
        <h1>Your Goals here</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
