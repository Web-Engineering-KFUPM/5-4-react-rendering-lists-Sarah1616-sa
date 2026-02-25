import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* TASK 4: Checkbox Interaction */}
        <input 
          type="checkbox" 
          checked={task.isDone} 
          onChange={() => onToggle(task.id)} 
        />

        {/* TASK 3: Conditional DueBadge */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* TASK 2: Title Display */}
        <span className="title">{task.title}</span>
      </label>

      {/* TASK 4: Delete Interaction */}
      <button 
        className="ghost" 
        aria-label="Delete task" 
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}