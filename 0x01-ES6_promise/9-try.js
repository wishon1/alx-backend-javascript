export default function guardrail(mathFunction) {
  // Initializing an empty array to store the results and messages
  const arr = [];

  try {
    arr.push(mathFunction());
  } catch (err) {
    arr.push(String(err));
  } finally {
    // Pushing a message indicating that the guardrail was processed into the 'arr'
    arr.push('Guardrail was processed');
  }

  return arr;
}
