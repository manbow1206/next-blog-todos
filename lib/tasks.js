import fetch from 'node-fetch';

export async function getAllTaskData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-tasks/`)
  );
  const tasks = await res.json();
  const staticfilterdTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return staticfilterdTasks;
}
