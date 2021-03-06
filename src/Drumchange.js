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

class DrumChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Click to play'
    }
  }

  handleDisplay = display => this.setState({display})

  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handlePress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown')
  }
  handlePress = e => {

    const audio = document.getElementById(e.key.toUpperCase());
    if (audio) {
      
      audio.play();
      audio.currentTime = 0;
      this.handleDisplay(audio.parentElement.id)
    }
  }


  handleClick = (e) => {
    console.log('playing')
    const target = e.target.firstChild;
    target.play();
    target.currentTime = 0;
    this.handleDisplay(e.target.id)

  }

  render() {

    console.log(this.arr);

    return (
      <div id='drum-machine' >

        <div id='display'>
          <h1>DRUM-MACHINE v.1.0</h1>
          <div id='state'>{this.state.display}</div>
        </div>
        <div >
          {data.map((d, index) => <button className='drum-pad'
            id={d.id}
            key={d.id}
            letter={d.letter}
            onClick={e => this.handleClick(e)}
          >
            <audio className='clip'
              id={d.letter}
              tag={d.id}
              src={d.src}
              ref={d.ref} />
              
            {d.letter} </button>)}
        </div>

      </div>
    )
  }
}

export default DrumChange;