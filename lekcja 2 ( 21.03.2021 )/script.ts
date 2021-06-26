class Buttons {
  buttonCreator(){
    const root = document.getElementById("root");
    const button: HTMLButtonElement = document.createElement("button");
    root.appendChild(button)
  }
}
const button = new Buttons();