
import { PropsWithChildren, type ReactNode } from "react"

interface CourseGoalProps {
    id: number;
    title: string; 
    children: ReactNode;
    onDelete: (id: number)=> void

}

// type CourseGoalProps = PropsWithChildren<{title: string}>

export default function CourseGoal(
    {title, id, children, onDelete}: 
    CourseGoalProps){
    
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={()=>onDelete(id)}>Delete</button> 
    </article>
} 