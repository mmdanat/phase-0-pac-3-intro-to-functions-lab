function shout(string) {
return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(dinner){
    if (dinner == dinner.toLowerCase()){
      return "I can't hear you!"
    } else if ( dinner == dinner.toUpperCase()){
      return "YES INDEED!"
    } else if ( dinner == "Let's have dinner together!"){ 
      return "I would love to!"}
       
    }
    console.log(sayHiToHeadphonedRoommate("hey"))
    
    console.log(sayHiToHeadphonedRoommate("HEY"))
    
    console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
  
  
  
  