import { Tlm } from "@typelikeme/tlmjs/src/js/tlm";

let tlm = [];

chrome.storage.local.get(
  ["active", "key", "attachInput", "attachTextarea"],
  function(result) {
    let isActive = result.active;
    let key = result.key;
    let attachToInput = result.attachInput;
    let attachToTextarea = result.attachTextarea;

    if (isActive) {
      let tlm = new Tlm(key);
      if (attachToTextarea) {
        let textareaList = document.getElementsByTagName("textarea");
        for (var i = 0; i < textareaList.length; i++) {
          tlm.attach(textareaList[i]);
        }
      }
      if (attachToInput) {
        let inputList = document.querySelectorAll("input[type=text]");
        for (var i = 0; i < inputList.length; i++) {
          tlm.attach(inputList[i]);
        }
      }
    }
  }
);
