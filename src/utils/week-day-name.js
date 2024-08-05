const weekDayName = () => {
  const dayNum = new Date().getDay();

  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][dayNum];
};

export default weekDayName;
