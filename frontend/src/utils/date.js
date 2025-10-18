import dayjs from "dayjs";

export const dateDisplay = (value) => {
  if (value) {
    return dayjs(value).format("YYYY-MM-DD");
  }
  return "";
};

export const detailDateDisplay = (value) => {
  if (value) {
    return dayjs(value).format("YYYY-MM-DD HH:mm");
  }
  return "";
};
