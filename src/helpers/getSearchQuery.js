export default function (history) {
  if (history.location.hash.indexOf("/?text=") > 0) {
    const hashArray = history.location.hash.split("/?text=");
    let query;
    if (Array.isArray(hashArray)) {
      if (hashArray.length > 1) {
        query = hashArray.slice(1).join();
      } else {
        query = hashArray[0];
      }
    }
    return decodeURI(query);
  }
}
