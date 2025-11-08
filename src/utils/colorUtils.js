export function getStatusColor(status) {
  switch (status) {
    case "todo":
      return "bg-red-500 text-white rounded-full font-bold";
    case "doing":
      return "bg-yellow-500 text-black rounded-full font-bold";
    case "done":
      return "bg-green-500 text-white rounded-full font-bold";
    default:
      return;
  }
}

export function getPriorityColor(priority) {
  switch (priority) {
    case "low":
      return "bg-green-500 text-white rounded-full font-bold";
    case "medium":
      return "bg-yellow-500 text-black rounded-full font-bold";
    case "high":
      return "bg-red-500 text-white rounded-full font-bold";
    default:
      return;
  }
}
