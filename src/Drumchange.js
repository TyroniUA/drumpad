import React from 'react'

const data =[
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]

class DrumChange extends React.Component{
   componentDidMount(){
     console.log(this.audio)
     
   }

    handleClick =() => {
        console.log('playing')
        this.audio.play()
        this.audio.currenTime=0;
        
    }

  render() {
    
    return (
      <container id='drum-machine'>
        <container id='display'>
          Showing string of playable audio
        </container>
       <div>
         {data.map(d => <button className='drum-pad' 
         id={d.id} 
         key={d.id} 
         letter={d.letter}
         onClick={this.handleClick}>
           <audio className='clip' 
           id={d.letter} 
           src={d.src} 
           ref={ref => this.audio = ref} />
         <p>{d.letter}</p> </button> )}
       </div>

      </container>
    )
  }
}

export default DrumChange;