export function getStatusColor(status) {
  switch (status) {
    case "todo":
      return "bg-red-500 text-white";
      break;
    case "doing":
      return "bg-yellow-500 text-white";
      break;
    case "done":
      return "bg-green-500 text-white";
    default:
      return;
  }
}

export function getPriorityColor(priority) {
  switch (priority) {
    case "low":
      return "bg-green-500 text-white";
    case "medium":
      return "bg-yellow-500 text-white";
    case "high":
      return "bg-red-500 text-white";
    default:
      return;
  }
}
