import { Formatted } from "../interfaces/format.js";

export class ListTemplete {
    constructor(readonly container: HTMLUListElement) { };


    render = (items: Formatted, header: string, pos: "start" | "end") => {
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        h4.innerHTML = header;
        li.append(h4);
        let p = document.createElement("p");
        p.innerText = items.format();
        li.append(p);

        if (pos == 'end') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

    }
}