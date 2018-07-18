const States = [
    [
      // State 0
      ['state-i','maintext','text',"In Traditional Western Music, there are 12 notes:"],
      ['state-d','maintext','opacity',1, 400],
      ['autonext',1,3000],
    ],
    [
      // State 1
      ['state-d','maintext','text','made up of these...',600],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','opacity',1,600],
      ['autonext',1,1200],
    ],
    [
      //State 2
      ['sound'],
      ['state-i','object2','display',true],
      ['state-d','object2','opacity',1, 50],
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
      ['state-d','maintext','text','and these.',600],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','opacity',1,600],
      ['autonext',1,1200],
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
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','opacity',1,600],
      ['state-d','maintext','color','blue',600],
      ['state-d','maintext','text',"", 600],
      ['state-d','maintext','animation','float 0.2s infinite',1200],
      ['type','That happens to be my favourite number',40,1000],
      ['state-d','maintext','opacity',0,3000],
      ['state-d','maintext','animation','',4500],
      ['autonext',2,5000]
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
      ['type','What... Just Twelve!?',80,1000],
      ['state-d','maintext','opacity',0,3000],
      ['state-d','maintext','animation','',3600],
      ['autonext',2, 4000]
    ],
    [
      //State 8
      ['state-i','maintext','opacity', 0],
      ['state-d','maintext','opacity', 1, 400],
      ['state-d','maintext','color','black',400],
      ['type',"Hopefully that'll make it easier to rememeber!", 10, 410],
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
      ['state-i','maintext','opacity', 0],
      ['state-d','maintext','opacity', 1, 400],
      ['state-d','maintext','color','black',400],
      ['state-d','maintext','text','Well yes there are just twelve...', 400],
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
      ['sound-d',1800],
      ['state-d','maintext','animation','gitter 0.2s infinite',1800],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','text','',800],
      ['state-d','maintext','opacity',1,1000],
      ['state-d','maintext','color','red',1050],
      ['type',"Oi mate, what's that thing on the right?", 40, 1800],
      ['state-d','maintext','animation','',4500],
      ['autonext',2,5000]
    ],
    [
      // State 13
      ['sound-change','HighVoice3'],
      ['sound-d',1800],
      ['state-d','maintext','animation','float 0.2s infinite',1800],
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','text','',800],
      ['state-d','maintext','opacity',1,1000],
      ['state-d','maintext','color','purple',1050],
      ['type',"Got it! Think we've pretty much covered this music stuff now", 30, 1800],
      ['state-d','maintext','animation','',4500],
      ['autonext',1,6000]
    ],
    [
      // State 14
      ['state-i','maintext','opacity',0],
      ['state-i','object1',''],
      ['state-i','object2','transition', 'all 1s'],
      ['state-d','object2','opacity',0,1000],
      ['state-d','object2','translate',['-25vw',0,0],1050],
      ['state-d','object2','transition','',1800],
      ['state-d','object1','transition','',1800],
    ],
];
export { States };
