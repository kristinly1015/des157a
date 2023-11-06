(function(){
    'use strict';
    console.log('reading js');

    const rep = document.querySelector('#bio');
    const name = document.querySelector('#aName');
    const pict = document.querySelector('#pic');
    const backer = document.querySelector('body');
    const head = document.querySelector('h1');
    const foot = document.querySelector('footer');

    /*hover effect*/
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
    
    /*hover effect*/
    

    document.addEventListener('mouseout',function(){
        document.querySelector('#collection').src= './images/main.jpg'; 
    });



    document.querySelector('#fish').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        name.innerHTML="Mochi";
        rep.innerHTML="Mochi is part blobfish and part ice cream! She originated from a Miniso store in SF and was the first purchased stuffed animal I bought for my college apartment in 2021."
        pict.src = './images/blob.jpg'
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