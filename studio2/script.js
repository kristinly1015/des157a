(function(){
    'use strict';
    console.log('reading js');

    //create variables for overlay information and body elements to control color palette
    //using query selector to assign variables to certain elements by name or ID
    const rep = document.querySelector('#bio');
    const name = document.querySelector('#aName');
    const pict = document.querySelector('#pic');
    const backer = document.querySelector('body');
    const head = document.querySelector('h1');
    const foot = document.querySelector('footer');
    const cover = document.querySelector('#card');
    const butt = document.querySelector('button');


   //event listener will make it so that when the mouse is over specific div box, it will replace the main image with a duplicate image but with the hovered stuffed animal outlined
    document.querySelector('#fish').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline1.jpg';
    });

    //when mouse hovers a another animal, an outlined version of the hovered animal will replace the main image
    document.querySelector('#cat').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline2.jpg';
    });

    //code repeats to replace the image for each animal
    document.querySelector('#cow').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline3.jpg';
    });

    document.querySelector('#dog').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline4.jpg';
    });

    document.querySelector('#big').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline5.jpg';
    });

    document.querySelector('#bear').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline6.jpg';
    });

    document.querySelector('#kuma').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline7.jpg';
    });

    document.querySelector('#lambs').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline8.jpg';
    });
    
    document.querySelector('#mel').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline9.jpg';
    });
    
   

    //if mouse is not hovering on any animal/div area, the image will go back to main image
    document.addEventListener('mouseout',function(){
        document.querySelector('#collection').src= './images/main.jpg'; 
    });

    //end of mouse hover image code


    //if mouse clicks on certain animal/div area, an overlay of information will appear 
    document.querySelector('#cat').addEventListener('click',function(event){

        //this prevents the page from refreshing everytime something is clicked
        event.preventDefault();

        //the function switches the overlay from hidden to showing 
        document.querySelector('#overlay').className= 'showing';

        //the picture, name, and description of the clicked animal will appear 
        name.innerHTML="Neko";
        rep.innerHTML="Neko is a cat who is part of a Japanese stuffed animal brand called Sumikko. I won her with my saved tickets at a Round 1 arcade in 2022.";
        pict.src = "./images/cat.jpg";

        //the background, h1, and footer color will change according to the stuffed animal clicked
        //make color palette yellow
        backer.style.background= "rgb(254, 251, 200)";
        head.style.color = "rgb(208, 201, 73)";
        foot.style.color = "rgb(208, 201, 73)";

        //the overlay background and border colors will also change accordingly
        cover.style.background="rgb(255, 251, 181)";
        cover.style.borderColor="rgb(233, 227, 110)";

        //the button will change color to fit the rest of the animal's theme
        butt.style.background="rgb(233, 227, 110)";

        //lower opacity of tape images when overlay pops up
        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        //stop background color change animation when overlay appears
        backer.style.animation = 'none';
    });



    //a new event listener is added per animal so that when each animal is clicked, the overlay information will switch according to the selected animal
    document.querySelector('#fish').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        //new names, descriptions, pictures, and styles will replace overlay info

        //change HTML text of the name and description
        name.innerHTML="Mochi";
        rep.innerHTML="Mochi is part blobfish and part ice cream! She originated from a Miniso store in SF and was the first purchased stuffed animal I bought for my college apartment in 2021.";

        //change picture source 
        pict.src = "./images/blob.jpg";

        //change style colors
        //make color palette light pink
        backer.style.background= "rgb(232, 200, 217)";
        head.style.color = "rgb(220, 151, 188)";
        foot.style.color = "rgb(220, 151, 188)";

        //overlay color changes
        cover.style.background="rgb(255, 231, 244)";
        cover.style.borderColor="rgb(255, 197, 227)";

        //button color change
        butt.style.background="rgb(255, 201, 241)";

        //decrease opacity of tape images
        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        //stop background animation
        backer.style.animation = 'none';
    });


    //repeat code and change colors, pictures, text for the rest of the animals
    document.querySelector('#cow').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Connor the Cow";
        rep.innerHTML="Connor is a cow Squishmallow that I received as a birthday present from a roommate in 2022. He reminds me of Davis and my time living here for college.";

        pict.src = "./images/moo.jpg";

        //make color palette dark blue
        backer.style.background= "rgb(218, 241, 255)";
        head.style.color = "rgb(110, 169, 208)";
        foot.style.color = "rgb(110, 169, 208)";

        cover.style.background="rgb(207, 237, 255)";
        cover.style.borderColor="rgb(131, 205, 255)";

        butt.style.background="rgb(131, 205, 255)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });


    document.querySelector('#dog').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Alan Jr.";
        rep.innerHTML="Alan Jr. was given to me by my partner on Christmas of 2022. He was paired with My Melody, the bunny plush, for the gift. He is a shiba dog and has a secret pocket to store items!";

        pict.src = "./images/junior.jpg";
        
        //make color palette orange
        backer.style.background= "rgb(255, 220, 202)";
        head.style.color = "rgb(244, 151, 105)";
        foot.style.color = "rgb(244, 151, 105)";

        cover.style.background="rgb(255, 220, 202)";
        cover.style.borderColor="rgb(255, 183, 148)";

        butt.style.background="rgb(255, 183, 148)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });


    document.querySelector('#big').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Bighead";
        rep.innerHTML="Bighead is part of the brand, Sugarcubs and was my first won animal from a claw machine ever. I won him with my sister this year of 2023 and named him Bighead because his head is bigger than his body.";

        pict.src = "./images/bighead.jpg";

        //make color palette yellow-brown
        backer.style.background= "rgb(226, 204, 164)";
        head.style.color = "rgb(168, 142, 92)";
        foot.style.color = "rgb(168, 142, 92)";

        cover.style.background="rgb(238, 218, 181)";
        cover.style.borderColor="rgb(214, 187, 135)";

        butt.style.background="rgb(214, 187, 135)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });

    document.querySelector('#bear').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Bear";
        rep.innerHTML="Bear is my favorite from this collection. He's been apart of my life since I was born and was owned by my sister previously. He's around 30 years old! His fur is a bit damaged but I love him regardless.";

        pict.src = "./images/bear.jpg";

        //make color palette red
        backer.style.background= "rgb(255, 215, 214)";
        head.style.color = "rgb(214, 100, 98)";
        foot.style.color = "rgb(214, 100, 98)";

        cover.style.background="rgb(255, 213, 212)";
        cover.style.borderColor="rgb(255, 171, 170)";

        butt.style.background="rgb(255, 171, 170)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });


    document.querySelector('#kuma').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Rilakkuma";
        rep.innerHTML="Rilakkuma is a popular character from Japan and this particular plushie is special to me because it was gifted by my internet best friend of 12 years. They sent it to me as a surprise holiday gift in 2022.";

        pict.src = "./images/rila.jpg";

        //make color palette yellow-orange
        backer.style.background= "rgb(255, 232, 174)";
        head.style.color = "rgb(225, 184, 80)";
        foot.style.color = "rgb(225, 184, 80)";

        cover.style.background="rgb(249, 227, 184)";
        cover.style.borderColor="rgb(255, 214, 111)";

        butt.style.background="rgb(255, 207, 84)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });

    document.querySelector('#lambs').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="Kristin Jr.";
        rep.innerHTML="Kristin Jr. is a small lamb I chose at the arcade and was won for me by my partner in 2023 of this year. It was his first claw machine victory, so it was really exciting.";

        pict.src = "./images/lamb.jpg";
        
        //make color palette light blue
        backer.style.background= "rgb(214, 242, 253)";
        head.style.color = "rgb(105, 187, 219)";
        foot.style.color = "rgb(105, 187, 219)";

        cover.style.background="rgb(208, 242, 255)";
        cover.style.borderColor="rgb(133, 220, 254)";

        butt.style.background="rgb(133, 220, 254)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });

    document.querySelector('#mel').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';

        name.innerHTML="My Melody";
        rep.innerHTML="My Melody was a paired gift with Alan Jr. the shiba dog. She was given to me by my partner for Christmas of 2022. She is a popular Sanrio bunny character and has a removable hood.";

        pict.src = "./images/melody.jpg";

        //make color palette warm pink
        backer.style.background= "rgb(255, 224, 233)";
        head.style.color = "rgb(219, 130, 155)";
        foot.style.color = "rgb(219, 130, 155)";

        cover.style.background="rgb(255, 224, 233)";
        cover.style.borderColor="rgb(255, 183, 205)";

        butt.style.background="rgb(255, 183, 205)";

        document.querySelector('#taper').style.opacity= "0.3";
        document.querySelector('#taper2').style.opacity= "0.3";

        backer.style.animation = 'none';
    });

    //end of event listeners for clicking each individual animal 

    
    //if user clicks the "close" button on the overlay, the event listener will switch the overlay from showing to hidden, redirecting user back to the main page 
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className=
        'hidden';

        //return tape image opacity to normal after closing overlay
        document.querySelector('#taper').style.opacity= "1";
        document.querySelector('#taper2').style.opacity= "1";

    });

    //this function allows users to exit the overlay by also hitting the escape key
    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }

        //return tape image opacity to normal after closing overlay
        document.querySelector('#taper').style.opacity= "1";
        document.querySelector('#taper2').style.opacity= "1";   
             
    });

})();