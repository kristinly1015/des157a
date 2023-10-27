(function () {

    'use strict';
    console.log('reading js');


    const myForm = document.querySelector('#myform');
    const madLibs = document.querySelector('#madlib p');

    myForm.addEventListener('submit', function(event){
    event.preventDefault();
    const adjective = document.querySelector('#adjective').value;
    const place = document.querySelector('#place').value;
    const verbing = document.querySelector('#verbing').value;
    const adjective2 = document.querySelector('#adjective2').value;
    const noun = document.querySelector('#noun').value;
    const verb = document.querySelector('#verb').value;
    const noun2 = document.querySelector('#noun2').value;
    const body = document.querySelector('#body').value;
    const adjective3 = document.querySelector('#adjective3').value;
    const body2 = document.querySelector('#body2').value;



    let myText = '';
    const para = document.querySelector('#errors');
    
    if (adjective == ''){
        para.innerHTML="Please provide an adjective!";
        document.querySelector('#adjective').focus();
    }

    else if (place== ''){
        para.innerHTML="Please provide a place!";
        document.querySelector('#place').focus();
    }

    else if (verbing== ''){
        para.innerHTML="Please provide a verb ending in -ing!";
        document.querySelector('#verbing').focus();
    }

    else if (adjective2== ''){
        para.innerHTML="Please provide a second adjective!";
        document.querySelector('#adjective2').focus();
    }

    else if (noun== ''){
        para.innerHTML="Please provide a noun!";
        document.querySelector('#noun').focus();
    }

    else if (verb== ''){
        para.innerHTML="Please provide a verb!";
        document.querySelector('#verb').focus();
    }

    else if (noun2== ''){
        para.innerHTML="Please provide a second noun!";
        document.querySelector('#noun2').focus();
    }

    else if (body== ''){
        para.innerHTML="Please provide a body part!";
        document.querySelector('#body').focus();
    }

    else if (adjective3== ''){
        para.innerHTML="Please provide a third adjective!";
        document.querySelector('#adjective3').focus();
    }

    else if (body2== ''){
        para.innerHTML="Please provide a second body part!";
        document.querySelector('#body2').focus();
    }

    else{
        myText = `<p>One night, you walk into the ${adjective} house that you rented in ${place}. You have a competition for ${verbing} and need to rest somewhere for the night. The inside of the house is eerie and you shiver at how ${adjective2} the air feels. When you walk to the bedroom, you suddenly see a strange-looking ${noun} standing in the corner. You shriek on the top of your lungs and decide to leave immediately. You quickly ${verb} towards the door but it’s blocked off by a giant ${noun2}. 
        You use your ${body} to fight them off but it’s no use. Their ${adjective3} eyes bear into your soul and you feel a sense of doom in the pit of your ${body2}. Your life flashes before you as you take your last breath. It’s all over.</p>`;

        para.innerHTML='';
        document.querySelector('#adjective').value ='';            
        document.querySelector('#place').value ='';            
        document.querySelector('#verbing').value ='';
        document.querySelector('#adjective2').value ='';
        document.querySelector('#noun').value ='';
        document.querySelector('#verb').value ='';
        document.querySelector('#noun2').value ='';
        document.querySelector('#body').value =''; 
        document.querySelector('#adjective3').value ='';
        document.querySelector('#body2').value ='';
        
        document.querySelector('#overlay').className= 'showing';
    }
    
    madLibs.innerHTML=myText; 
    
    document.querySelector('.close').addEventListener('click',function(event){
        document.querySelector('#overlay').className=
        'hidden';
    });

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });

    });

})();