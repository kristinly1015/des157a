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

    //when mouse hovers on each object, a new picture will replace to show an outlined version of the hovered object
   //event listener will make it so that when the mouse is over specific div box, it will replace the main image with a new image of the hovered object outlined
    document.querySelector('#fish').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline1.jpg';
    });

    document.querySelector('#cat').addEventListener('mouseover',function(){        
        document.querySelector('#collection').src= './images/outline2.jpg';
    });

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
    
   

    //if mouse is not hovering on any object/div area, the image will go back to main image
    document.addEventListener('mouseout',function(){
        document.querySelector('#collection').src= './images/main.jpg'; 
    });

    //end of hovered image code


    //if mouse clicks on certain object, overlay will appear and 
    document.querySelector('#cat').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        name.innerHTML="Neko";
        rep.innerHTML="Neko is a cat who is part of a Japanese stuffed animal brand called Sumikko. I won her with my saved tickets at a Round 1 arcade in 2022.";
        pict.src = "./images/cat.jpg";
        backer.style.background= "rgb(0,0,0)";
        head.style.color = "rgb(220, 151, 188)";
        foot.style.color = "rgb(220, 151, 188)";
    });


    document.querySelector('#fish').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        name.innerHTML="Mochi";
        rep.innerHTML="Mochi is part blobfish and part ice cream! She originated from a Miniso store in SF and was the first purchased stuffed animal I bought for my college apartment in 2021.";
        pict.src = "./images/blob.jpg";
        backer.style.background= "rgb(232, 200, 217)";
        head.style.color = "rgb(220, 151, 188)";
        foot.style.color = "rgb(220, 151, 188)";
    });

    
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className=
        'hidden';
    });

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });

})();