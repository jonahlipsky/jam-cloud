# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed         |
| `email`           | string    | not null, indexed, unique |         
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `session_token, unique: true`
  
## `tracks`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `track_title`        | string    | not null                       |
| `artist_id`          | string    | not null                       |
| `album_id`           | string    | not null                       |
| `track_length`       | float     | not null                       |
| `track_db_location`  | string    | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `artist_id` references `users`
+ `album_id` references `albums`
+ index on `artist_id`
  
## `albums`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `album_title`        | string    | not null                       |
| `artist_id`          | string    | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `artist_id` references `users`
+ index on `artist_id`

## `comments`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `body`               | string    | not null                       |
| `author_id`          | string    | not null, indexed, foreign key |
| `track_id`           | integer   | not null, indexed, foreign key |
| `parent_comment_id`  | integer   | not null, indexed, foreign key |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `author_id` references `users`
+ `track_id` references `tracks`
+ `parent_comment_id` references `comments`
+ index on `author_id, track_id, parent_comment_id`

## `playlists`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `playlist_title`     | string    | not null                       |
| `creator_id`         | integer   | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `creator_id` references `users`
+ index on `creator_id`


## `tracks_playlists`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `track_id`           | integer   | not null                       |
| `playlist_id`        | integer   | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `song_id` references `songs`
+ `playlist_id` references `playlists`
+ index on `song_id, playlist_id`


## `likes`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `user_id`         | integer   | not null, indexed, foreign key |
| `imageable_id`    | integer   | not null, indexed, foreign key |                        
| `imageable_type`  | string    | not null, indexed, foreign key |                        
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`  
+ `imageable_id` is a polymorphic association that will be connected to `tracks, albums, comments, playlists`
+ index on `imageable_id`
+ index on `user_id`

## `genres`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `genre_name`      | integer   | not null, indexed, foreign key |
| `imageable_id`    | integer   | not null, indexed, foreign key |                        
| `imageable_type`  | string    | not null, indexed, foreign key |                        
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`  
+ `imageable_id` is a polymorphic association that will be connected to `tracks, albums, playlists`
+ index on `imageable_id`
