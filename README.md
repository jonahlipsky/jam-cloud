# jam-cloud

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
