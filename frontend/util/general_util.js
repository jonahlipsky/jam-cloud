import moment from 'moment';


export const parseWidgetIdentifier = widgetString => {
  let beginning = widgetString.indexOf("tracks/") + 7;
  let end = widgetString.indexOf("&color");
  let identifier = widgetString.slice(beginning, end);
  return identifier;
};


export const parseDate = (date) => {
  let tIdx = date.indexOf("T");  //T index
  let ymd = date.slice(0,tIdx); //year month day
  let split = ymd.split("-");
  let mdy = [split[1],split[2], split[0]].join("-");
  let parsedDate = moment(mdy, "MM-DD-YYYY");
  return parsedDate;
};


//RANDOM TRACKS METHODS
//these methods are for finding random trackIds from the list of trackIds.

export const randomizeTracks = function(trackIds){
  let randomTracks = [];
  let trackIdsArray = trackIds.slice();
  let trackIdsLength = trackIdsArray.length;
  while (randomTracks.length < 20 && randomTracks.length < trackIdsLength){
    let i = getRandomInt(trackIdsArray.length);
    randomTracks.push(trackIdsArray[i]);
    trackIdsArray.splice(i, 1);
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