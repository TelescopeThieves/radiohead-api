const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 2000
app.use(cors())

let radioheadAlbums = {
    'ok computer':{
        'title': 'Ok Computer',
        'release_year': '1997',
        'tracklisting': {
            'track_01': 'Airbag',
            'track_02': 'Paranoid Android',
            'track_03': 'The National Anthem',
            'track_04': 'Exit Music (For a Film)',
            'track_05': 'Let Down',
            'track_06': 'Karma Police',
            'track_07': 'Fitter Happier',
            'track_08': 'Electioneering',
            'track_09': 'Climbing Up the Walls',
            'track_10': 'No Surprises',
            'track_11': 'Lucky',
            'track_12': 'The Tourist'
        }
    },
    'kid a':{
        'title': 'Kid A',
        'release_year': '2000',
        'tracklisting': {
            'track_01': 'Everything in Its Right Place',
            'track_02': 'Kid A',
            'track_03': 'The National Anthem',
            'track_04': 'How to Disappear Completely',
            'track_05': 'Treefingers',
            'track_06': 'Optimistic',
            'track_07': 'In Limbo',
            'track_08': 'Idioteque',
            'track_09': 'Morning Bell',
            'track_10': 'Motion Picture Soundtrack'
        }
    },
    'in rainbows':{
        'title': 'In Rainbows',
        'release_year': '2007',
        'tracklisting': {
            'track_01': '15 step',
            'track_02': 'Bodysnatchers',
            'track_03': 'Nude',
            'track_04': 'Weird fishes(arpeggi)',
            'track_05': 'All I need',
            'track_06': 'Reckoner',
            'track_07': 'House of Cards',
            'track_08': 'Jigsaw falling into place',
            'track_09': 'Videotape'
        }   
    },
    'unknown': {
        'title': 'title unknown'
    }
}
app.get('/',(request, response) =>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:album',(request, response) =>{
    const album = request.params.album.toLowerCase()
    if(radioheadAlbums[album]){
        response.json(radioheadAlbums[album])
    } else{
        response.json(radioheadAlbums[`unknown`])
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on PORT ${PORT}`)
})




// 8.	"Idioteque" (Radiohead, Paul Lansky, Arthur Kreiger)	5:09
// 9.	""	4:35
// 10.	""