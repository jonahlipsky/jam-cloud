import moment from 'moment';

export const parseDate = (date) => {
  let tIdx = date.indexOf("T");  //T index
  let ymd = date.slice(0,tIdx); //year month day
  let split = ymd.split("-");
  let mdy = [split[1],split[2], split[0]].join("-");
  let parsedDate = moment(mdy, "MM-DD-YYYY");
  return parsedDate;
};

export const randomizeTracks = function(trackIds){
  let randomTracks = [];
  let trackIdsLength = trackIds.length;
  while (randomTracks.length < 20 && randomTracks.length < trackIdsLength){
    let i = getRandomInt(trackIdsLength);
    randomTracks.push(trackIds[i]);
  }
  let randomized = randomTracks.filter( onlyUnique );
  return randomized;
};

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}