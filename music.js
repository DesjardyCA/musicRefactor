var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (const passthrough in library.playlists) {
    var list = library.playlists[passthrough];
    console.log(list.id, ":", list.name, "-", list.tracks.length, "tracks");
  }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (const passthrough in library.tracks) {
    var track = library.tracks[passthrough];

    console.log(track.id, ":", track.name, "by", track.artist, "(", track.album, ")");
  }
}

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var list = library.playlists[playlistId];
  console.log(list.id, ":", list.name, "-", list.tracks.length, "tracks");
  for (const passthrough in list.tracks) {
    var track = library.tracks[list.tracks[passthrough]];

    console.log(track.id, ":", track.name, "by", track.artist, "(", track.album, ")");
  }
}

// printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var list = library.playlists[playlistId];

  list.tracks.push(trackId);
}

// printPlaylist("p01");
// addTrackToPlaylist('t03', 'p01');
// printPlaylist("p01");

// generates a unique id
// (use this for addTrack and addPlaylist) 

var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var track = library.tracks;
  var newID = "t" + uid();

  track[newID] = {
    id: newID,
    name: name,
    artist: artist,
    album: album
  };

  console.log(track[newID]);
}

// addTrack('west', 'kanye', 'dunno');


// adds a playlist to the library

var addPlaylist = function (name) {
  var list = library.tracks;
  var newID = "p" + uid();

  list[newID] = {
    id: newID,
    name: name,
    track: "t01"
  };

  console.log(list[newID]);
}

addPlaylist('woop');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {}