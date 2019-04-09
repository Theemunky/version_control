      /* <![CDATA[ */
// declaration for variables
      var jackhammers = new Array();
      var curJackhammer = 0;
      var direction;
      var begin;
      //array for the jackhammer imgages
      jackhammers[0] = "images/jackhammer0.gif";
      jackhammers[1] = "images/jackhammer1.gif";
      jackhammers[2] = "images/jackhammer2.gif";
      jackhammers[3] = "images/jackhammer3.gif";
      jackhammers[4] = "images/jackhammer4.gif";
      jackhammers[5] = "images/jackhammer5.gif";
      jackhammers[6] = "images/jackhammer6.gif";
      jackhammers[7] = "images/jackhammer7.gif";
      jackhammers[8] = "images/jackhammer8.gif";
      jackhammers[9] = "images/jackhammer9.gif";
      jackhammers[10] = "images/jackhammer10.gif";

//function that cycles through the array of images
      function bounce(begin) {
        if(curJackhammer == 10){
          curJackhammer = 0;
          }
        else 
          curJackhammer ++;
            document.getElementsByTagName('img')[0].src = jackhammers[curJackhammer];
            
        }

      
      //sets the interval on how fast the images cycle.
      begin = setInterval("bounce()", 90);