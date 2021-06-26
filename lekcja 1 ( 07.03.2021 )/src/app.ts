let tab: number[] = [];

export class App {
    constructor(){
    }

    Main() {
        this.inputCreator();
        this.showResult();
    }

    inputCreator() {
        const inputRoot: HTMLInputElement = document.createElement('input');

        inputRoot.type = 'number';
        inputRoot.className = 'root';
        inputRoot.addEventListener('change',() => {
            const value: number = parseInt(inputRoot.value);
            for(let i = 0; i < value ; i++ ){
                this.crateInput()
            }
        })
        document.getElementById("root").appendChild(inputRoot)
        
    }

    crateInput() {
        const input: HTMLInputElement = document.createElement('input');
        let localTab: number[] = [];
        input.type = 'number';
        input.addEventListener('change',() => {
            const value: number = parseInt(input.value);
            localTab = [];
            localTab.push(value)
            tab.push(...localTab)
        });
        input.addEventListener('dblclick',() => {
            const value: number = parseInt(input.value);
            const index = tab.indexOf(value);
            if (index > -1) {
                tab.splice(index, 1);
            }

            input.remove();
        })
        document.getElementById("root").appendChild(input);
    }

    showResult(){
        const result: HTMLDivElement = document.createElement('div');
        let sum: number;
        let avg: number;
        let min : number;
        let max: number;
        
        setInterval(() => {
            sum = tab.reduce((a, b) => a + b)

            var avgSum = 0;
            for(var i = 0; i < tab.length; i++ ){
                avgSum += tab[i];
            }
            avg = avgSum/tab.length;

            min = Math.min( ...tab );

            max = Math.max( ...tab );

            result.innerHTML = `<p><h1>SUMA: ${sum}</h1></p><p><h1>ŚREDNIA: ${avg}</h1></p><p><h1>MIN: ${min}</h1></p><p><h1>MAX: ${max}</h1></p>`
        }, 600);
        document.getElementById("result").appendChild(result)
    }

}


