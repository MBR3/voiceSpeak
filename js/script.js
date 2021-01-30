function loadVoices() {
    var voices = window.speechSynthesis
        .getVoices()
        .map(x => [x.name, x.lang].join("\t"))
        .join("\r\n");
    alert(voices)
    };
    

loadVoices();

window.speechSynthesis.onvoiceschanged = function(e) { loadVoices(); }