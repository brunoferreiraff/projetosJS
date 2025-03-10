let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}; // Este dita sobre a seleção da voz, toda vez que é selecionada uma voz no dropdown, ele de fato seleciona aquela voz. 

voiceSelect.addEventListener("change", () => {
    speech.voice = voices [voiceSelect.value]

});// Este muda a voz após selecionar uma voz no dropdown menu

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}); // Este dita sobre o script que permite que o text do speech funcione. Ou seja, ele seleciona o texto que foi colocado no textarea e transforma ele em áudio. 