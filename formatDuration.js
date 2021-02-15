function formatDuration(totalSecs) {
  if (totalSecs === 0) return "now";

  let counts = [];
  let remainingSecs = totalSecs;

  function countUnit(oneUnit, unitName) {
    const count = Math.floor(remainingSecs / oneUnit);
    if (count > 0) {
      counts.push(`${count} ${unitName}${count === 1 ? "" : "s"}`);
    }
    remainingSecs = remainingSecs % oneUnit;
  }

  countUnit(31536000, "year"); // 1 year = 31536000 secs
  countUnit(86400, "day"); // 1 day = 86400 secs
  countUnit(3600, "hour"); // 1 hour = 3600 secs
  countUnit(60, "minute");
  countUnit(1, "second");

  if (counts.length === 1) {
    return counts[0];
  } else if (counts.length === 2) {
    return counts[0] + " and " + counts[1];
  } else {
    let formatted = "";
    for (let i = 0; i < counts.length - 2; i++) {
      formatted += counts[i] + ", ";
    }
    formatted +=
      counts[counts.length - 2] + " and " + counts[counts.length - 1];
    return formatted;
  }
}
