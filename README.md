# jam-cloud

## Key Features
* Continuous Play Progress Bar
* Three Stage User Creation
* Queue managed by progress bar and dispatch actions

### Continuous Play Progress Bar
![progress bar](https://github.com/jonahlipsky/jam-cloud/blob/master/app/assets/images/progress_bar.png "Progress Bar")
This progress bar tracks the progress of a song through actions dispatch through redux. While technically the progress of a song is managed by a set interval that updates the style of the progress bar element on the DOM every 100th of a second, the intitializing of that interval is managed by the dispatch actions.
