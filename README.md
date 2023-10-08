# jam-cloud

This is a web application built during my time at App Academy, a full-stack Coding Bootcamp. It uses React/Redux, Javascript, Ruby on Rails and SQL. The project is now archived, although many of the features are memorialized below in the description and screenshots.

## What is JamCloud?
JamCloud is App for listening to your favorite jams -- it is modelled on SoundCloud. You can upload songs, discover new music, and engage with other users through comments and likes. 

![Discover Page on JamCloud](https://github.com/jonahlipsky/jam-cloud/blob/master/app/assets/images/jamcloud-discover-page.png "Discover Page")

## Technologies Used
* Ruby on Rails for the backend
* PostgreSQL for the database
* Javascript (ES6) for frontend scripts
* React.js for rendering the frontend
* Redux.js for managing complex state changes on the frontend
* HTML / CSS for structuring and styling the frontend
* ReactSound for rendering Sound
* SoundCloud Widget Api

## Key Features
* Continuous Play Progress Bar
* SoundCloud Widget synced with Progress Bar 
* Likes, Comments, and Recently Played Tracks

### Continuous Play Progress Bar
![progress bar](https://github.com/jonahlipsky/jam-cloud/blob/master/app/assets/images/progress_bar.png "Progress Bar")
This progress bar tracks the progress of a song through actions dispatch through redux. While technically the progress of a song is managed by a set interval that updates the style of the progress bar element on the DOM every 100th of a second, the intitializing of that interval is managed by the dispatch actions. The progress bar handles actions that progress to the next song, go back to the previous song, and pause the current track. 

### SoundCloud Widget synced with Progress Bar 
I used the SoundCloud widget API to display their widget in several places on the site. In order to control it and make the widget reusable, I built a react component around it so that it would get passed the correct information and render as the correct widget. I created callback functions that would be triggered when the play or pause events got triggered by the widget to handle signals being sent from the widget to the Progress Bar, and I used conditions in the ComponentDidUpdate lifecycle method to handle signals beings sent from the progress bar to the widget. Implementing this involved the hardest bug I came across while building this App. Read about it below in "Hardest Bug: The Signal and the Handshake".

![widget and progress bar](https://github.com/jonahlipsky/jam-cloud/blob/master/app/assets/images/widget_and_bar.png "Widget and Progress Bar")


### Likes, Comments, and Recently Played Tracks
I implemented the ability to like and comment on tracks. I also tracked listening history so that I could show stats to a user as well as display some of the tracks that they've listened to recently.

### Hardest Bug: The Signal and the Handshake
The following code snippets represent the solution to the hardest problem I faced while creating this app. Specifically, the issue was syncing the SoundCloud widget, which I implemented on my user profile pages, with my own Continous Play Progress Bar. The reason it was tricky was because hitting play on the Progress Bar would cause a rapid re-updating of the widget which would cause a DOM error. I realized the solution was that I needed to make sure the the widget would only get 'played' exactly one time so that it wouldn't overload as it had been. So my solution was called "The signal and the handshake". I sent a "signal" into props 1/10th of a second before sending the SoundStatus which would trigger the widget to play. 

```javascript
//play_bar_controller.jsx
  togglePlay(){
    if (!(this.state.soundStatus === "PLAYING") && this.props.trackQueue.queue.length ){
      this.props.sendSignal();
      setTimeout(() => {
        this.setState({ soundStatus: "PLAYING" });
        this.setLocalInterval();
        this.props.sendSoundStatus("PLAYING", this.props.trackQueue.queue[0]);
      }, 100);
```

And the signal gets received:

```javascript
//track_queue_reducer.js
case SEND_SIGNAL:
      newState.signal = true;
      return newState;
```

After the "Signal" is set to true in the track queue reducer, and the sound status gets sent, the track queue reducer will look for if there is a signal in the props, and if so, set a 'handshake' to true on the window. I call it the handshake because the signal gets turned off immediately when the handshake gets turned on, so it is kind of like a passing of a torch, or a handshake. 

```javascript
//track_queue_reducer.js
case SEND_SOUND_STATUS:
      if(newState.signal){
        window.handshake = true;
        newState.signal = false;
      }
      ...
```

Now that the handshake is defined on the window, the track widget looks for if the signal was set to true in the previous props and if the handshake is currently set to true on the window. This allows it to verify that the instruction is meant for it to play in this moment. The handshake gets turned off immediately in this condition of the ComponentDidUpdate lifecycle method. This ensures that the widget.play() method will be triggered exactly once. Even if the handshake gets defined as true on the window and doesn't get removed, it won't cause erratic behavior because the signal needs to be in the previous props and the handshake needs to be currently defined on the window. That will only happen immediately following the sending of the signal so there is literally only one update moment when this could possibly trigger the widget.play() method.

```javascript
//track_widget.jsx
else if (this.state.widget && (prevProps.soundStatusArray[0] != this.props.soundStatusArray[0])
      && this.props.soundStatusArray[0] === "PLAYING" && prevProps.signal && window.handshake
      && parseInt(this.props.soundStatusArray[1]) === this.props.track.id ){
        window.handshake = false;
        this.state.widget.play();
    }
```

## Future Directions:
* Create media queries for responsive experience
* Implement playlists feature
* Implement genres
* Implement search bar

