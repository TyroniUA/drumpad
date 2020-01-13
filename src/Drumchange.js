import React from 'react'

const data =[
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3', ref: React.createRef(),
},
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3', ref: React.createRef() },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav', ref: React.createRef()},
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav', ref: React.createRef() },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav', ref: React.createRef() },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav', ref: React.createRef() },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav', ref: React.createRef() },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3', ref: React.createRef() },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav', ref: React.createRef()  },
]

class DrumChange extends React.Component{
   componentDidMount(){
     console.log(this.audio)
     document.addEventListener('keydown', this.handlePress)
   }
componentWillUnmount(){
  document.removeEventListener('keydown', this.handleKeyDown)
}
    handlePress = event => {
      
      if(event.keyCode === 83){
        console.log(event.key)
      }
    }


    handleClick =(e) => {
        console.log('playing')
        const target = e.target.firstChild;
        target.play();
        target.currentTime =0;
        
    }

  render() {
    
    console.log(this.arr);
    
    return (
      <container id='drum-machine' >
        
        <container id='display'>
          Showing string of playable audio
        </container>
       <div >
         {data.map((d, index) => <button className='drum-pad' 
         id={d.id} 
         key={d.id} 
         letter={d.letter}
         onClick={e => this.handleClick(e)}
         >
           <audio className='clip' 
           id={d.letter} 
           src={d.src} 
           ref={d.ref} />
         {d.letter} </button> )}
       </div>

      </container>
    )
  }
}

export default DrumChange;