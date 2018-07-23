const States = [
    [
      // State 0
      ['maintext',"In Traditional Western Music, there are 12 notes",0],
      ['autonext',1,3000],
    ],
    [
      // State 1
      ['maintext','made up of these...',0],
      ['autonext',1,3000],
    ],
    [
      //State 2
      ['sound'],
      ['state-i','object2','display',true],
      ['setState','opacities',[1,0,1,1,0,1,0,1,1,0,1,0]],
      ['textpush','G#/Ab',0],
      ['textpush','G',5],
      ['textpush','F#/Gb',10],
      ['textpush','F',15],
      ['textpush','E',20],
      ['textpush','D#/Eb',25],
      ['textpush','D',30],
      ['textpush','C#/Db',35],
      ['textpush','C',40],
      ['textpush','B',45],
      ['textpush','A#/Bb',50],
      ['textpush','A',55],
      ['autonext',1, 700],
    ],
    [
      //State 3
      ['maintext','...and these.',0],
      ['autonext',1,2000],
    ],
    [
      //State 4
      ['setState-d','opacities',[1,1,1,1,0,1,0,1,1,0,1,0],0],
      ['setState-d','opacities',[1,1,1,1,1,1,0,1,1,0,1,0],20],
      ['setState-d','opacities',[1,1,1,1,1,1,1,1,1,0,1,0],40],
      ['setState-d','opacities',[1,1,1,1,1,1,1,1,1,1,1,0],60],
      ['setState-d','opacities',[1,1,1,1,1,1,1,1,1,1,1,1],80],
      ['sound'],
      ['autonext',1,500],
    ],
    [
      //State 5
      ['state-i','panel','replies',['Incredible','Just Twelve?!']],
      ['repliesIn'],
    ],
    [
      //State 6
      ['sound-change','HighVoice1'],
      ['sound-d',1000],
      ['sound-vol',0.1],
      ['state-i','forward','opacity', 0],
      ['state-d','forward','opacity', 1, 400],
      ['state-d','panel','text','', 400],
      ['state-d','maintext','color','blue',1000],
      ['state-d','maintext','animation','float 1s infinite',1200],
      ['type','That happens to be my favourite number',1500,400],
      ['state-d','maintext','opacity',0,3400],
      ['state-d','maintext','animation','',4000],
      ['autonext',2,4000]
    ],
    [
      //State 7
      ['sound-change','LowVoice1'],
      ['sound-d',1000],
      ['sound-vol',0.1],
      ['state-i','forward','opacity', 0],
      ['state-d','forward','opacity', 1, 400],
      ['state-d','panel','text','', 400],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','opacity',1,600],
      ['state-d','maintext','color','red',600],
      ['state-d','maintext','text',"", 600],
      ['state-d','maintext','animation','gitter 0.2s infinite',1200],
      ['type','What... Just Twelve!?',1500,1000],
      ['state-d','maintext','opacity',0,3400],
      ['state-d','maintext','animation','',4000],
      ['autonext',2, 4000]
    ],
    [
      //State 8
      ['maintext',"Hopefully that'll make it easier to rememeber!", 0],
      ['state-d','maintext','color','black',0],
      ['state-i','object2','liTransition','all 1.5s'],
      ['state-d','object2','width','50%',200],
      ['state-d','object1','width','50%',200],
      ['state-d','maintext','opacity',0,2000],
      ['state-d','maintext','text','Every twelve notes you cycle over the note names like so...', 2600],
      ['state-d','maintext','opacity',1,2600],
      ['state-d','object1','display',true,500],
      ['state-d','object1','opacity',1,510],
      ['autonext',2,2100]
    ],
    [
      //State 9
      ['maintext','Well yes there are just twelve...', 0],
      ['state-d','maintext','color','black',0],
      ['state-i','object2','liTransition','all 1.5s'],
      ['state-d','object1','display',true,150],
      ['state-d','object2','width','50%',200],
      ['state-d','object1','width','50%',200],
      ['state-d','maintext','opacity',0,2000],
      ['state-d','maintext','text','..But! the note names are reused as you continue', 2600],
      ['state-d','maintext','opacity',1,2600],
      ['state-d','object1','display',true,500],
      ['state-d','object1','opacity',1,510],
      ['autonext',1,2100]
    ],
    [
      //State 10
      ['sound-change','ChromRun1'],
      ['sound'],
      ['state-i','object2','liTransition', 'all 0s'],
      ['startIterator',12,2,300,1],
      ['autonext',1,5000],
    ],
    [
      //State 11
      ['state-i','panel','replies',["What's that thing on the right?",'Got it!']],
      ['repliesIn'],
    ],
    [
      // State 12
      ['sound-change','LowVoice2'],
      ['maintext','',0],
      ['state-d','maintext','animation','gitter 0.2s infinite',1800],
      ['state-d','maintext','color','red',600],
      ['sound-d',2200],
      ['type',"Oi mate, what's that thing on the right?", 1500, 1800],
      ['state-d','maintext','animation','',5000],
      ['autonext',4,5000]
    ],
    [
      // State 13
      ['sound-change','HighVoice3'],
      ['state-d','maintext','animation','float 1s infinite',1800],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','text','',800],
      ['state-d','maintext','opacity',1,1000],
      ['state-d','maintext','color','blue',1050],
      ['type',"Got it! What's next?", 2500, 1800],
      ['sound-d',2200],
      ['state-d','maintext','animation','',6000],
      ['autonext',1,6000]
    ],
    [
      // State 14
      ['state-i','maintext','opacity',0],
      ['state-i','object2','transition', 'all 1s'],
      ['state-d','object2','opacity',0,1000],
      ['state-d','object2','translate',['-25vw',0,0],1050],
      ['state-d','object1','translate',[0,0,0],1050],
      ['state-d','object2','transition','',1800],
      ['state-d','object1','transition','',1800],
      ['note-clear'],
      ['autonext',1,3000],
    ],
    [
      // State 15
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','color','black',600],
      ['state-d','maintext','text','Well.. you should probably learn what this thing is',620],
      ['state-d','maintext','opacity',1,630],
      ['state-d','pointer','translate',[0,'-100px',0],2000],
      ['state-d','pointer','opacity',1,2000],
      ['autonext',3,5000]
    ],
    [
      // State 16
      ['state-i','maintext','opacity',0],
      ['state-i','object2','transition', 'all 1s'],
      ['state-d','object2','opacity',0,1000],
      ['state-d','object2','translate',['-25vw',0,0],1050],
      ['state-d','object1','translate',[0,0,0],1050],
      ['state-d','object2','transition','',1800],
      ['state-d','object1','transition','',1800],
      ['note-clear'],
      ['autonext',1,3000],
    ],
    [
      // State 17
      ['state-i','maintext','text','Oh this thing?'],
      ['state-d','maintext','color','black',25],
      ['state-d','maintext','opacity',1,50],
      ['state-d','pointer','translate',[0,'-100px',0],2000],
      ['state-d','pointer','opacity',1,2000],
      ['autonext',1,3000]
    ],
    [
      ['maintext','The horizontal lines are called the STAVE',0],
      ['maintext','This is where you write musical notes',3500],
      ['state-d','maintext','opacity',1,2620],
      ['autonext',1,7000],
    ],
    [
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','text','In order to know what the notes written on the stave mean, you need a clef!',600],
      ['state-d','maintext','opacity',1,620],
      ['state-d','pointer','translate',[16-((window.innerWidth/3-100)/2)+'px','-100px',0],700],
      ['state-d','maintext','opacity',0,5000],
      ['state-d','maintext','text',"This curvy one we've got is called a Treble Clef", 5600],
      ['state-d','maintext','opacity',1,5620],
      ['autonext',1,9000],
    ],
    [
      ['reset'],
    ]
];
export { States };
