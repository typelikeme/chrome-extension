chrome.storage.local.get(["key", "attachInput", "attachTextarea", "attachContenteditable"], function(
    result
  ) {
    let predictor = Tlm.getPredictor();
    let tlm = predictor(result.key);
  
    if (result.attachTextarea) {
      let textareaList = document.getElementsByTagName("textarea");
      for (var i = 0; i < textareaList.length; i++) {
        if (!textareaList[i].hasOwnProperty("data-autosuggest_is-input")) {
          tlm.attach(textareaList[i]);
        }
      }
    }
    if (result.attachInput) {
      let inputList = document.querySelectorAll("input[type=text]");
      for (var i = 0; i < inputList.length; i++) {
        if (!inputList[i].hasOwnProperty("data-autosuggest_is-input")) {
          tlm.attach(inputList[i]);
        }
      }
    }
    if (false) {
      let inputList = document.querySelectorAll("div[contenteditable]");
      for (var i = 0; i < inputList.length; i++) {
        if (!inputList[i].hasOwnProperty("data-autosuggest_is-input")) {
          tlm.attach(inputList[i]);
        }
      }
    }
  });