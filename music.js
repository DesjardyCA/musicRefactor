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
  },
  printPlaylists: function () {
    for (const passthrough in this.playlists) {
      var list = this.playlists[passthrough];
      console.log(list.id, ":", list.name, "-", list.tracks.length, "tracks");
    }
  },
  printTracks: function () {
    for (const passthrough in this.tracks) {
      var track = this.tracks[passthrough];

      console.log(track.id, ":", track.name, "by", track.artist, "(", track.album, ")");
    }
  },
  printPlaylist: function (playlistId) {
    var list = this.playlists[playlistId];
    console.log(list.id, ":", list.name, "-", list.tracks.length, "tracks");
    for (const passthrough in list.tracks) {
      var track = this.tracks[list.tracks[passthrough]];

      console.log(track.id, ":", track.name, "by", track.artist, "(", track.album, ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var list = this.playlists[playlistId];

    list.tracks.push(trackId);
  },
  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var track = this.tracks;
    var newID = "t" + this.uid();

    track[newID] = {
      id: newID,
      name: name,
      artist: artist,
      album: album
    };

    console.log(track[newID]);
  },
  addPlaylist: function (name) {
    var list = this.tracks;
    var newID = "p" + this.uid();

    list[newID] = {
      id: newID,
      name: name,
      track: "t01"
    };

    console.log(list[newID]);
  }
}

// library.printPlaylists();

// library.printTracks();

// library.printPlaylist("p01");

// library.printPlaylist("p01");
// library.addTrackToPlaylist('t03', 'p01');
// library.printPlaylist("p01");

// library.addTrack('west', 'kanye', 'dunno');

// library.addPlaylist('woop');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {}