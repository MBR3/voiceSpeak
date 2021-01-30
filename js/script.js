document.getElementById("exec").onclick = function() {
    let uttearnce = new SpeechSynthesisUtterance();
    uttearnce.text = document.getElementById("text").value;
    console.log(uttearnce.text)
    uttearnce.volume = 1;
    uttearnce.rate = 1;
    uttearnce.pitch = 1;
    uttearnce.lang = 'ja-JP'
    window.speechSynthesis.speak(uttearnce);
}