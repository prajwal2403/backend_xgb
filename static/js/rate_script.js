//var slider=document.getElementById("customRange1");
var output=document.getElementsByClassName("range_display");
var last_button=document.getElementById('last_button');
const ratings=[];
var arr=document.getElementsByClassName('r');
n=arr.length;

var mic_check=document.getElementById('check');

for(var i=0;i<n;i++)
    ratings[i]=3;

for(let i=0;i<n;i++)
{
    arr[i].addEventListener('input', function () {
        ratings[i] = arr[i].value; // Update the array with the current slider value
        output[i]=arr[i].value;
        output[i].innerHTML = this.value;

        //document.getElementById('range_display' + (i + 1)).innerHTML = 'Value: ' + arr[i].value; // Update display
    });
}

function fun()
{
    fetch('/send_array', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: ratings }), // Sending as JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
       // alert(JSON.stringify(data, null, 2));
        // alert(data["array"]);
        last_button.textContent=data["array"];
        last_button.disabled="true";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}






//Speech Recognition

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window && 'speechSynthesis' in window) {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;  // Keep recognizing continuously
    recognition.interimResults = false;  // Only return final results
    const synth = window.speechSynthesis;  
    //utterance.lang = 'mr-IN';

  

    // Function to handle recognized speech and perform actions
    recognition.onresult = function (event) {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        mic_check.textContent = `You said: ${transcript}`;
        // Perform actions based on recognized command
        if (transcript.includes('increase a')) {   
            arr[0].value++;
            output[0].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value of openness increased');
            synth.speak(utterance);
        } 

        else if(transcript.includes('decrease a'))
        {
            arr[0].value--;
            output[0].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess decreased');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase b'))
            {
                arr[1].value++;
                output[1].textContent++;
                const utterance = new SpeechSynthesisUtterance('value for consientouss increased');
                synth.speak(utterance);
            }

        else if(transcript.includes('decrease b'))
        {
            arr[1].value--;
            output[1].textContent--;
            const utterance = new SpeechSynthesisUtterance('value for conscientouss decreased');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase c') || transcript.includes("increase see"))
        {
            arr[2].value++;
            output[2].textContent++;
            const utterance = new SpeechSynthesisUtterance('asdsad ');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease c') || (transcript.includes('decrease see') ) )
        {
            arr[2].value--;
            output[2].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase d'))
        {
            arr[3].value++;
            output[3].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease d'))
        {
            arr[3].value--;
            output[3].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase eye'))  //For Incrementing I
        {
            arr[8].value++;
            output[8].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease eye'))
        {
            arr[8].value--;
            output[8].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        
        }



        else if(transcript.includes('increase e'))
        {
            arr[4].value++;
            output[4].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }
        

        else if(transcript.includes('decrease e'))
        {
            arr[4].value--;
            output[4].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase f'))
        {
            arr[5].value++;
            output[5].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease f'))
        {
            arr[5].value--;
            output[5].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase g') ||  transcript.includes("increase ji"))
        {
            arr[6].value++;
            output[6].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease g') || transcript.includes("decrease ji"))
        {
            arr[6].value--;
            output[6].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('increase h'))
        {
            arr[7].value++;
            output[7].textContent++;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }

        else if(transcript.includes('decrease h'))
        {
            arr[7].value--;
            output[7].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }
        else if(transcript.includes('increase i') || transcript.includes("increase eye"))
        {
                arr[8].value++;
                output[8].textContent++;
                const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
                synth.speak(utterance);
        }
        else if(transcript.includes('decrease i') || transcript.includes("decrease eye"))
        {
                    arr[8].value--;
                    output[8].textContent--;
                    const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
                    synth.speak(utterance);
        }

        else if(transcript.includes('increase j'))
        {
                arr[9].value++;
                output[9].textContent++;
                const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
                synth.speak(utterance);
        }
        else if(transcript.includes('decrease j'))
        {
            arr[9].value--;
            output[9].textContent--;
            const utterance = new SpeechSynthesisUtterance('Value For Openess Set to 2');
            synth.speak(utterance);
        }
        
        else if (transcript.includes('scroll down')) {
            const utterance = new SpeechSynthesisUtterance('Scrolled Down');
            window.scrollBy(0, window.innerHeight);
        } else if (transcript.includes('scroll up')) {
            const utterance = new SpeechSynthesisUtterance('Scrolled Up');
            window.scrollBy(0, -window.innerHeight);
        
        }

        else if(transcript.includes('submit'))
        {
            fun();
        }


    };

    // Error handling
    recognition.onerror = function (event) {
        console.error('Speech recognition error detected: ' + event.error);
    };
    
    recognition.onend = function () {
        recognition.start();  // Restart recognition when it stops
    };


    window.onload=fun1;
    function fun1()
    {
        if (recognition.recognizing) {
            recognition.stop();
        } else {
            recognition.start();
        }
    }

} else {
    alert('Sorry, your browser does not support Speech Recognition.');
}