import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  
  // TASK 4: Implementation
  function toggleTask(id) {
    onMutateCourse(index, (tasks) => 
      tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t)
    );
  }

  function deleteTask(id) {
    onMutateCourse(index, (tasks) => 
      tasks.filter(t => t.id !== id)
    );
  }

  // TASK 3: Logic helpers
  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
        {/* TASK 3: "All caught up" Badge */}
        {allDone && <span className="badge success">All caught up</span>}
      </header>

      <section className="tasksSection">
        {/* TASK 3: "No tasks yet" Message */}
        {!hasTasks && <p className="muted">No tasks yet.</p>}
        
        <ul className="tasks">
          {/* TASK 2: Rendering TaskItem list */}
          {course.tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))}
        </ul>
      </section>
    </article>
  );
}