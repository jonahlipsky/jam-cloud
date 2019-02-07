import moment from 'moment';

export const parseDate = (date) => {
  let tIdx = date.indexOf("T");  //T index
  let ymd = date.slice(0,tIdx); //year month day
  let split = ymd.split("-");
  let mdy = [split[1],split[2], split[0]].join("-");
  let parsedDate = moment(mdy, "MM-DD-YYYY");
  return parsedDate;
};