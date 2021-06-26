export class App {
    
    Main(){
        //localStorage.clear()
        console.log("FIRST OPEN PAGE localStorage")
        console.log(localStorage)
        this.container();
        this.createInput();
        this.searchInput();
        this.containerWeatherbox()
        for(let i=1 ; i < localStorage.length; i++){
            this.createWeatherBox(`id_${i}`);
            console.log(`id_${i}`)
            console.log(localStorage.length)
        }

        //this.createWeatherBox('RADOM');
    }
    container(){
        const container: HTMLElement = document.createElement("div");
        container.className = "container";
        container.id = "container";
        document.body.appendChild(container);   
    }
    containerWeatherbox(){
        const containerW: HTMLElement = document.createElement("div");
        containerW.className = "containerW";
        containerW.id = "containerW";
        document.body.appendChild(containerW);   
    }
    createInput(){
        const input: HTMLInputElement = document.createElement("input");
        const containerBOx: any = document.getElementById("container")
        input.className = "textInput";
        input.id = "textInput";
        containerBOx.appendChild(input)   
    }
    searchInput(){
        const searchInput: HTMLInputElement = document.createElement("input");
        const containerBOx: any = document.getElementById("container")
        searchInput.className = "searchInput";
        searchInput.type = "button"
        searchInput.value = "+";
        searchInput.addEventListener("click",this.getTownName.bind(this));
        containerBOx.appendChild(searchInput);

    }
    counter:number = localStorage.length > 2 ? localStorage.length-1 : 0;

    getTownName():any{
        var townValue: any = document.getElementById("textInput");
        if (townValue.value !== "")
            this.getCityInfo(townValue.value).then(() => (this.createWeatherBox(`id_${this.counter}`)));
        else alert(".");
        townValue.value = "";        
        this.counter++;
        console.log("after add localStorage")
        console.log(localStorage)
        // setTimeout(() => {
        //     location.reload()
        // }, 222000)
        
    }
    createWeatherBox(dataName:string){
        const containerBoxW: any = document.getElementById("containerW")

        let data:any = localStorage.getItem(dataName);
        data = JSON.parse(data)

        const divBox: HTMLElement = document.createElement("div");
        const temperature: HTMLElement = document.createElement("div");
        const clouds: HTMLElement = document.createElement("div");
        const info: HTMLElement = document.createElement("div");
        const moreinfo: HTMLElement = document.createElement("div");
        divBox.className = "divBox";
        temperature.className = "temperature";
        clouds.className = "clouds";
        info.className = "info";
        moreinfo.className = "moreinfo";

        divBox.innerHTML = data.name;
        temperature.innerHTML = `${Math.floor(data.main.temp)} °C`;
        clouds.innerHTML = data.weather[0].main;
        info.innerHTML = `MORE INFO`;
        info.addEventListener("click",showMore);
        moreinfo.innerHTML = `
        <ul>
         <li> feels like: ${data.main.feels_like}</li> 
         <li> temp min: ${data.main.temp_min}</li> 
         <li> temp max: ${data.main.temp_max}</li> 
         <li> wind speed: ${data.wind.speed}</li>    
        </ul>
        `;

        divBox.appendChild(temperature);
        divBox.appendChild(clouds);
        divBox.appendChild(info);
        divBox.appendChild(moreinfo);
        containerBoxW.appendChild(divBox);

        function showMore(){
            if(moreinfo.style.display !== "none"){
                moreinfo.style.display = "none";
            }else{
                moreinfo.style.display = "block";
            }
            // if(moreinfo.className  !== "moreinfo"){
            //     moreinfo.className = "moreinfo";
            // }else{
            //     moreinfo.className = "moreinfo-open";
            // }
        }
    }
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor(){
        //this.getCityInfo('radom');
    }

    async getCityInfo(city:string){
        const weather = await this.getWeather(city);
        this.saveData(`id_${this.counter}`,weather);
    }
    async getWeather(city: string): Promise<any>{
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&units=metric`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        //console.log(weatherData);
        return weatherData;
    }
    saveData(saveName:string ,data:any){
        localStorage.setItem(saveName, JSON.stringify(data));

    }
    // getData(){
    //     const data = localStorage.getItem('weatherData');
    //     if (data){
    //         return JSON.parse(data);
    //     }else{
    //         return {}
    //     }
    // }
}



