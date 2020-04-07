import { CONCLUSION } from "../data/conclusion";

export function getConclusion(power: number) {
    let string;
    CONCLUSION.map((conc) => (conc.maxPower >= power && conc.minPower < power ? (string = conc.text) : null));
    return string;
}
