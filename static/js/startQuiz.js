var redirect_button=document.getElementsByClassName('btn')[0];
redirect_button.addEventListener("click",redirect);


function redirect(){
    window.open("main");
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

        // Perform actions based on recognized command
        if (transcript.includes('start quiz')) {
            
            const utterance = new SpeechSynthesisUtterance('Quiz is Starting');
            synth.speak(utterance);
            redirect();
        } 

    };

    // Error handling
    recognition.onerror = function (event) {
        console.error('Speech recognition error detected: ' + event.error);
    };

    // Start/Stop speech recognition when the button is clicked

    /*
    document.getElementById('startVoice').addEventListener('click', () => {
        if (recognition.recognizing) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });*/
    window.onload=fun();
    function fun()
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