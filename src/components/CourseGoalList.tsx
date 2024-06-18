import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from '../App.tsx' 

type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number)=> void
}

function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps){

return(
    <>
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
)
}

export default CourseGoalList
