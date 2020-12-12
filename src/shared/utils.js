// gets the current date using timezone
const currentDate = (timeZone = 'America/Los_Angeles') => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // hour12: false,
    timeZone
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

module.exports = { periodPerYearFunction, currentDate };
