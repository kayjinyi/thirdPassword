//There should be 16 choices which the user could make, It's four on-and-off switches，so 2^4= 16 situation. use y/n to show on or off
if((lowerOrNot===false) && (upperOrNot===false)&& (numericOrNot===false) &&(specialOrNot===false)){
    alert("Wrong choice");
    //return;//
  }else if((lowerOrNot===true) && (upperOrNot===false)&& (numericOrNot===false) &&(specialOrNot===false)){
     p=ynnn(len) ;
    //1
  }else if((lowerOrNot===false) && (upperOrNot===true)&& (numericOrNot===false) &&(specialOrNot===false)){
    p=nynn(len); 
       //2
  }else if((lowerOrNot===false) && (upperOrNot===false)&& (numericOrNot===true) &&(specialOrNot===false)){
    p=nynn(len) 
       //3
  }else if((lowerOrNot===false) && (upperOrNot===false)&& (numericOrNot===false) &&(specialOrNot)){
    p=nnny(len)
       //4
  }else if((lowerOrNot===true) && (upperOrNot===true)&& (numericOrNot===false) &&(specialOrNot===false)){
    p=yynn(len)
       //5
  }else if((lowerOrNot===true) && (upperOrNot===false)&& (numericOrNot===true) &&(specialOrNot===false)){
        p=ynyn(len)
       //6
  }else if((lowerOrNot===true) && (upperOrNot===false)&& (numericOrNot===false) &&(specialOrNot===true)){
        p=ynny(len)
       //7
  }else if((lowerOrNot===false) && (upperOrNot===true)&& (numericOrNot===true) &&(specialOrNot===false)){
        p=nyyn(len)
       //8
  }else if((lowerOrNot===false) && (upperOrNot===true)&& (numericOrNot===false) &&(specialOrNot)){
        p=nyny(len)
       //9
  }else if((lowerOrNot===false) && (upperOrNot===false)&& (numericOrNot===true) &&(specialOrNot)){
        p=nnyy(len)
       //10
  }else if((lowerOrNot===false) && (upperOrNot===true)&& (numericOrNot===true) &&(specialOrNot)){
        p=nyyy(len)
       //11
  }else if((lowerOrNot===true) && (upperOrNot===true)&& (numericOrNot===true) &&(specialOrNot===false)){
        p=yyyn(len)
       //12
  }else if((lowerOrNot===true) && (upperOrNot===false)&& (numericOrNot===true) &&(specialOrNot===true)){
        p=ynyy(len)
       //13
  }else if((lowerOrNot===true) && (upperOrNot===true)&& (numericOrNot===false) &&(specialOrNot===true)){
        p=yyny(len)
       //14
  }else{
        p=yyyy(len)
       //15
  }
  
    function ynnn(length) {
      var result           = '';
      var characters       = 'abcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
  }
  //2
  function nynn(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //3
  function nynn(length) {
    var result           = '';
    var characters       = '!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //4
  function nnny(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //5
  function yynn(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //6
  function ynyn(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  
  //7
  function ynny(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //8
  function nyyn(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //9
  function nyny(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //10
  function nnyy(length) {
    var result           = '';
    var characters       = '!\"§$%&/()=?\u{20ac}0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //11
  function nyyy(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"§$%&/()=?\u{20ac}0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //12
  function yyyn(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //13
  function ynyy(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //14
  function yyny(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  //15
  function yyyy(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"§$%&/()=?\u{20ac}';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }