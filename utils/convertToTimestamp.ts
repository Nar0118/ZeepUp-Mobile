export const convertToTimestamp = (time: string): number => {
  const date = new Date();

  if (time) {
    const timeParts = time.split(':');

    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);

    // Set the time on the date object
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    // Convert the date to a Unix timestamp in milliseconds
    const timestamp = date.getTime();

    // Convert the timestamp to seconds by dividing it by 1000
    return timestamp / 1000;
  }

  return 0;
};
