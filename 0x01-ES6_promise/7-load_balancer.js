/**
  * Write and export a function named loadBalancer. It should accept two
  * arguments chinaDownload (Promise) and USDownload (Promise). The function
  * should return the value returned by the promise that resolved the first.
  *
  * export default function loadBalancer(chinaDownload, USDownload) {
  * }
  *
  * @return(promise): Return the value returned by the promise
  */
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to return a promise that resolves or rejects as soon as
  // one of the promises in the iterable (chinaDownload, USDownload) resolves or rejects
  return Promise
    .race([chinaDownload, USDownload])
    // When the fastest promise settles (either resolves or rejects),
    // the then method will be called with the result of that promise
    .then((res) => res);
}
