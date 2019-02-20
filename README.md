# jam-cloud

## Live Link!
[jam-cloud.herokuapp.com](https://jam-cloud.herokuapp.com)

## What is JamCloud?
JamCloud is App for listening to your favorite jams -- it is modelled on SoundCloud. You can upload songs, discover new music, and engage with other users through comments and likes. JamCloud runs on a Ruby on Rails backend with a Javascript / React.js frontend. The Redux library is used on the frontend to manage the complex state interactions and changes that the app employs. 

## Code Highlights
This code represents the final step of the solution to the hardest problem I faced while creating this app. Specifically, the issue was syncing the SoundCloud widget, which I implemented on my user profile pages, with my own Continous Play Progress Bar. The reason it was tricky was because hitting play on the Progress Bar would cause a rapid re-updating of the widget which would cause a DOM error. I realized the solution was that I needed to make sure the the widget would only get 'played' exactly one time so that it wouldn't overload as it had been. So my solution was called "The signal and the handshake" which you can see here. I sent a "signal" into props 1/10th of a second before sending the SoundStatus which would trigger the widget to play. Then in the component did update section, I 

```javascript
else if (this.state.widget && (prevProps.soundStatusArray[0] != this.props.soundStatusArray[0])
      && this.props.soundStatusArray[0] === "PLAYING" && prevProps.signal && window.handshake
      && parseInt(this.props.soundStatusArray[1]) === this.props.track.id ){
        window.handshake = false;
        this.state.widget.play();
    }
```

## Key Features
* Continuous Play Progress Bar
* Queue managed by progress bar and dispatched actions
* Three Stage User Creation

### Continuous Play Progress Bar
![progress bar](https://github.com/jonahlipsky/jam-cloud/blob/master/app/assets/images/progress_bar.png "Progress Bar")
This progress bar tracks the progress of a song through actions dispatch through redux. While technically the progress of a song is managed by a set interval that updates the style of the progress bar element on the DOM every 100th of a second, the intitializing of that interval is managed by the dispatch actions. The progress bar handles actions that progress to the next song, go back to the previous song, and pause the current track. 

### Queue managed by progress bar and dispatched actions
The queue allows for immediate play of a song as well as pushing songs to the end of the queue. An immediately played song will be inserted into the front of the queue and a property "immediate" will be passed down to the sound element which informs it to restart from the beginning of a song. The interval that manages the progress bar is reset. One of several play icons throughout the site allow for the immediately play tracks.

### Three Stage User Creation
Account creation is managed through a three stage form. Each form progresses to the next through an action dispatched through redux which causes a re-render in the form component. This allows each piece of information to be verified before moving on to the next.
