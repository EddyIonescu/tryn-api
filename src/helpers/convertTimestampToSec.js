module.exports = timestamp => {
  if (timestamp > 2147483647) {
    // This is the epoch for January 1, 2038, after which 32-bit integers will no longer work for timestmaps.
    // Needed as some timestamps in files saved by Orion might be using milliseconds instead (the default for JS).
    return Math.round(timestamp / 1000);
  }
  return timestamp;
}