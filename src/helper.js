export const convertEpochToDateTime = (val) => {
  const date = new Date(val);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const format = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}${format}`;
};

export const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
