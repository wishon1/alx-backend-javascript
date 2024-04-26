export default function guardrail(mathFunction) {
  // Initializing an empty array to store the results and messages
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    // Pushing a message indicating that the guardrail was processed into the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
