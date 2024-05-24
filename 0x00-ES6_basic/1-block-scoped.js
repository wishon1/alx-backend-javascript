/**
 * Modifies the variables inside the function taskBlock so that they
 * aren't overwritten inside the conditional block.
 *
 * @param {boolean} trueOrFalse - A boolean value determining which branch
 * of the conditional block to execute.
 * 
 * @returns {Array<boolean>} An array containing the modified values of task
 * and task2.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInner = true;
    const task2Inner = false;
    return [taskInner, task2Inner];
  }
  return [task, task2];
}