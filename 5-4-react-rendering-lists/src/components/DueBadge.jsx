export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate);
  let label = "";

  // TASK 3: Label Logic
  if (d < 0) {
    label = "Overdue";
  } else if (d === 0) {
    label = "Due today";
  } else {
    label = `Due in ${d} days`;
  }

  return <span className={`badge ${d < 0 ? 'danger' : ''}`}>{label}</span>;
}