const replyGreen = 'rgba(100,220,100,0.7)';
const replyRed = 'rgba(220,100,100,0.7)';
const replyBlue = 'rgba(100,100,220,0.7)';
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
      ['state-i','panel','replyColor',[replyBlue,replyRed]],
      ['state-d','panel','replies',["Wow!",'Just Twelve?!'],10],
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
      ['type',"Incredible, I'm learning already!",1500,400],
      ['state-d','maintext','opacity',0,3400],
      ['state-d','maintext','animation','',4000],
      ['autonext',2,4000]
    ],
    [
      //State 7
      ['sound-change','LowVoice1'],
      ['sound-d',1400],
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
      ['sound-change','ChromRun1'],
      ['maintext',"Well there's more where that came from...",'black',0],
      ['state-i','object2','liTransition','all 1.5s'],
      ['state-d','object2','width','50%',200],
      ['state-d','object1','width','50%',200],
      ['state-d','maintext','opacity',0,2000],
      ['state-d','maintext','text','every twelve notes you cycle over the note names like so...', 2600],
      ['state-d','maintext','opacity',1,2600],
      ['state-d','object1','display',true,500],
      ['state-d','object1','opacity',1,510],
      ['autonext',2,2100]
    ],
    [
      //State 9
      ['sound-change','ChromRun1'],
      ['maintext','Well yes there are just twelve...','black', 0],
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
      ['sound'],
      ['state-i','object2','liTransition', 'all 0s'],
      ['startIterator',12,2,300,1],
      ['autonext',1,5000],
    ],
    [
      //State 11
      ['state-i','panel','replyColor',[replyRed,replyBlue]],
      ['state-d','panel','replies',["What's that thing on the right?",'Got it!'], 10],
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
    [ // State 18
      ['maintext','The horizontal lines are called the STAVE',0],
      ['maintext','This is where you write musical notes',3500],
      ['state-d','maintext','opacity',1,2620],
      ['autonext',1,7000],
    ],
    [ // State 19
      ['state-i','maintext','opacity',0],
      ['state-d','maintext','text','In order to know what the notes written on the stave mean, you need a clef!',600],
      ['state-d','maintext','opacity',1,620],
      ['state-d','pointer','translate',[16-((window.innerWidth/3-60)/2)+'px','-100px',0],700],
      ['state-d','maintext','opacity',0,5000],
      ['state-d','maintext','text',"This curvy one we've got is called a Treble Clef", 5600],
      ['state-d','maintext','opacity',1,5620],
      ['autonext',1,9000],
    ],
    [ // State 20
      ['reset'],
      ['autonext',1,2000],
    ],
    [ // State 21
      ['maintext','not sure if you knew this was coming up...',0],
      ['sound-change','Tadaa'],
      ['maintext',"but i think it's...",2500],
      ['maintext',"QUIZ TIME!",5000],
      ['sound-d',5600],
      ['autonext',1,9000],
      ['state-i','object2','translate',['-25vw',0,0]],
    ],
    [ // State 22
      ['quiz','How many note names are there in Traditional Western Music?',['Thrifty-Five','Seventeen','Twelve']],
    ],
    [ // State 23
      ['sound-change','Wrong'],
      ['maintext','Ah... Unfortunately thrifty-Five is neither the correct answer, nor a real number.',1000],
      ['sound-d',1500],
      ['maintext',"I'm sure it was just an honest mistake",'brown',5000],
      ['autonext',3,8000],
    ],
    [ // State 24
      ['sound-change','Wrong'],
      ['maintext','Oops! there are actually only twelve,',1000],
      ['sound-d',1500],
      ['maintext',"I'm sure it was just an honest mistake",'brown',5000],
      ['autonext',2,8000],
    ],
    [ // State 25
      ['sound-change','Right'],
      ['maintext','Yes, Correct!',1000],
      ['sound-d',1500],
      ['autonext',1,5000],
    ],
    [
      ['quiz','What is the name of the horizontal lines upon which you place musical notes?',['Richard','The Stave','The Clef']],
      ['state-i','object2','display',true],
      ['state-i','object1','display',true],
      ['state-d','object2','opacity',1, 20],
      ['state-d','object1','opacity',1, 20],
    ],
    [
      ['sound-change','Wrong'],
      ['state-i','object1','opacity',0],
      ['maintext','As nice a name as Richard is, the real name of the lines is the Stave',1000],
      ['sound-d',1500],
      ['maintext',"I'm sure it was just an honest mistake",'brown',5000],
      ['autonext',3,8000]
    ],
    [
      ['sound-change','Right'],
      ['state-i','object1','opacity',0],
      ['maintext','Yeah! ',1000],
      ['sound-d',1500],
      ['maintext',"I'm sure it was just an honest mistake",'brown',5000],
      ['autonext',3,8000]
    ],
    [
      ['sound-change','Wrong'],
      ['state-i','object1','opacity',0],
      ['maintext','Ooh nope, but very close!',1000],
      ['sound-d',1500],
      ['maintext',"The Stave is the name of the lines, and a Clef is something you put on the Stave",'green',5000],
      ['autonext',3,8000]
    ]
];
export { States };
