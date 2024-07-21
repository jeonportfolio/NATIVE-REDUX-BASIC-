import { selector } from "recoil";
import { counterState } from "../states/counter";

export const counterMultipiler = selector({
    key: 'MAIN/CounterMultipiler',
    get:({get}) => {
        const result = get(counterState);

        return result * 5;
    }
}) 