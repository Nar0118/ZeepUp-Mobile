export const convertToAmOrPm = (time: string | undefined): string => {
  if (time) {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Make 0 hours "12"

    return (
      hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + amPm
    );
  }

  return '';
};
