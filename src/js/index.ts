import { predictor } from "@typelikeme/tlmjs/src/js/index.ts";

export function getPredictor() {
    document.head.classList.add("tlmjs-predictor-loaded");
    return predictor;
};
