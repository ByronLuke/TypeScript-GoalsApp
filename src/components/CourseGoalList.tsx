import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if(goals.length >=2){
    warningBox = (<InfoBox mode="warning" severity="low">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>)
  }
  if(goals.length >=4){
    warningBox = (<InfoBox mode="warning" severity="medium">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>)
  }
  if(goals.length >=6){
    warningBox = (<InfoBox mode="warning" severity="high">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>)
  }

  return (
    <>
    {warningBox}
      {goals.map((goal) => (
        <ul>
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p> {goal.description}</p>
            </CourseGoal>
          </li>
        </ul>
      ))}
    </>
  );
}

export default CourseGoalList;
