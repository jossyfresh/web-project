export function convertMinutesToHoursAndMinutes(
  minutes: number,
  fullTimeValue = false
) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (fullTimeValue) {
    if (hours === 0) return `${remainingMinutes} minuts`;
    else return `${hours} hours ${remainingMinutes} minuts`;
  } else {
    if (hours === 0) return `${remainingMinutes}m`;
    else return `${hours}h ${remainingMinutes}m`;
  }
}
