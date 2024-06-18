import { useRef, type FormEvent } from "react";
type NewGoalProps ={
    onAddGoal: (goal: string, summary:string)=>void;
}

function NewGoal({onAddGoal}: NewGoalProps){
const goal= useRef<HTMLInputElement>(null)
const summary= useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        // e: FormEvent<HTMLFormElement>
        // FormElement available due to this in tsconfig.json
        //   "lib": ["ES2020", "DOM", "DOM.Iterable"],
        //also possible in 
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        e.currentTarget.reset();
        onAddGoal(enteredGoal,enteredSummary)
    }
    
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal"> Your Goal</label>
            <input id="goal" type="text" name="goal" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}

export default NewGoal