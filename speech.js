window.startSpeechRecognition = function () {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    console.log("Recognized:", transcript);
    SendMessage('WebAIManager', 'OnSpeechRecognized', transcript);
  };

  recognition.onerror = function (event) {
    console.error("Speech error:", event.error);
  };

  recognition.start();
};

window.speakText = function (text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'en-US';
  window.speechSynthesis.speak(msg);
};
