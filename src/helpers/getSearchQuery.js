export default function (history) {
  const hashArray = history.location.hash.split("/?text=");
  let query;
  if (Array.isArray(hashArray)) {
    if (hashArray.length > 1) {
      query = hashArray.slice(1).join();
    } else {
      query = hashArray[0];
    }
  }
  return query;
}
