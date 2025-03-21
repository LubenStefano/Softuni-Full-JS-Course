function songs(arr){
    let songs = []
    let songAmount = arr.shift()
    let playlistWanted = arr.pop()

    class Song {
        constructor(playlist, singer, time){
            this.playlist = playlist;
            this.singer = singer;
            this.time = time;
        }
    }

    for(let i = 0; i < songAmount; i++){
        let songLine = arr.shift()
        let [playlist, singer, time] = songLine.split("_")
        let song = new Song(playlist, singer, time)
        songs.push(song)
    }

    if (playlistWanted === "all") {
        songs.forEach( i => console.log(i.singer))
    } else {
        let filtered = songs.filter((i) => i.playlist === playlistWanted)
        filtered.forEach( i => console.log(i.singer))
    }
}

songs[4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater']