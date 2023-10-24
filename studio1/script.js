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
    const adverb = document.querySelector('#adverb').value;
    const noun3 = document.querySelector('#noun3').value;


    let myText = '';
    
    if(adjective == ''){
        myText="Please provide an adjective";
        document.querySelector('#adjective').focus();
    }

    else if (place== ''){
        myText="Please provide a place";
        document.querySelector('#place').focus();
    }

    else if (verbing== ''){
        myText="Please provide a verb ending in -ing";
        document.querySelector('#verbing').focus();
    }

    else if (adjective2== ''){
        myText="Please provide a second adjective";
        document.querySelector('#adjective2').focus();
    }

    else if (noun== ''){
        myText="Please provide a noun";
        document.querySelector('#noun').focus();
    }

    else if (verb== ''){
        myText="Please provide a verb";
        document.querySelector('#verb').focus();
    }

    else if (noun2== ''){
        myText="Please provide a second noun";
        document.querySelector('#noun2').focus();
    }

    else if (body== ''){
        myText="Please provide a body part";
        document.querySelector('#body').focus();
    }

    else if (adjective3== ''){
        myText="Please provide a third adjective";
        document.querySelector('#adjective3').focus();
    }

    else if (body2== ''){
        myText="Please provide a second body part";
        document.querySelector('#body2').focus();
    }

    else if (adverb== ''){
        myText="Please provide an adverb";
        document.querySelector('#adverb').focus();
    }

    else if (noun3== ''){
        myText="Please provide a third noun";
        document.querySelector('#noun3').focus();
    }

    else{
        myText= `<p>One late night, you walk into the ${adjective} house that you rented in the old ${place}. You have a competition for ${verbing} and need to rest up somewhere for the evening. The inside of the house looks eerie and you shiver at how ${adjective2} the air feels. When you walk into the bedroom, you suddenly see a strange-looking ${noun} standing in the corner. You shriek on the top of your lungs and decide to leave immediately. You quickly ${verb} towards the front door but it’s blocked off by a giant ${noun2}. 
        You use your ${body} to try and shoo them furiously away, but it’s no use. Their ${adjective3} eyes bear into your soul and you feel a sense of eternal doom in the pit of your ${body2}. You can see their faces laughing ${adverb} at your expressed fear. Your life flashes before you and you think of your ${noun3} before your final breath. It’s all over.</p>`;

       /* document.querySelector('#adjective').value ='';            
        document.querySelector('#place').value ='';            
        document.querySelector('#verbing').value ='';
        document.querySelector('#adjective2').value ='';
        document.querySelector('#noun').value ='';
        document.querySelector('#verb').value ='';
        document.querySelector('#noun2').value ='';
        document.querySelector('#body').value ='';
        document.querySelector('#adjective3').value ='';
        document.querySelector('#body2').value ='';
        document.querySelector('#adverb').value ='';
        document.querySelector('#noun3').value =''; */
    }
    
    madLibs.innerHTML=myText; 


    document.querySelector('.open').addEventListener('click',function(event){
        document.querySelector('#overlay').className= 'showing';
    });
    
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