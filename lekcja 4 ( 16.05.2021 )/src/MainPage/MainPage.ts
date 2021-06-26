import "./MainPage.scss";

const avaibleColors = [
  {
    id: "lightsalmon",
    color: "lightsalmon",
  },
  {
    id: "teal",
    color: "teal",
  },
  {
    id: "lightblue",
    color: "lightblue",
  },
  {
    id: "yellow",
    color: "yellow",
  },
  {
    id: "green",
    color: "green",
  },
  {
    id: "lightgrey",
    color: "lightgrey",
  },
];

const dataStructure = [
  {
    id: 1,
    tittle: "Tytuł",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipum has been the industry standard dummy text ever since the 1500s, when a",
    color: "red",
    archived: false,
    favourite: false,
    creationDate: "21-01-2020",
  },
];

let getData: any = JSON.parse(localStorage.getItem("myNotes"));

const newDataStructure: {
  id: string;
  tittle: string;
  content: string;
  color: string;
  archived: boolean;
  favourite: boolean;
  creationDate: string;
}[] = [];

if(getData !== null){
    newDataStructure.push(...getData);

}else{
    localStorage.setItem("myNotes", JSON.stringify([]));
    window.location.reload();
}

export class MainPage {
  constructor() {}
  Main() {
    this.AddNote();
    getData.map(
      (v: {
        id: string;
        tittle: string;
        content: string;
        color: any;
        archived: boolean;
        favourite: boolean;
      }) => {
        this.NoteBox(
          v.id,
          v.tittle,
          v.content,
          v.color,
          v.archived,
          v.favourite
        );
      }
    );
  }
  AddNote() {
    const container: HTMLElement = document.createElement("div");
    const inputTittle: HTMLInputElement = document.createElement("input");
    const inputContent: HTMLTextAreaElement =
      document.createElement("textarea");
    const inputConfirm: HTMLButtonElement = document.createElement("button");

    let colorMemory = "";
    container.className = "addNote";
    inputTittle.className = "inputTittle";
    inputContent.className = "inputContent";
    inputConfirm.className = "inputConfirm";

    container.id = "addNote";
    inputTittle.id = "inputTittle";
    inputContent.id = "inputContent";
    inputConfirm.id = "inputConfirm";

    inputTittle.placeholder = "Create Tittle here..";
    inputContent.placeholder = "Create note here..";
    inputConfirm.innerHTML = "ADD NOTE";

    document.getElementById("globalAddNote").appendChild(container);
    container.appendChild(inputTittle);
    container.appendChild(inputContent);

    avaibleColors.map((d) => {
      const colorPicker: HTMLElement = document.createElement("div");
      colorPicker.className = "colorPicker";
      colorPicker.id = d.id;
      colorPicker.style.backgroundColor = d.color;
      container.appendChild(colorPicker);

      colorPicker.addEventListener("click", function () {
        colorMemory = colorPicker.id;
        inputConfirm.style.color = colorPicker.id;
        inputConfirm.style.border = `1px solid ${colorPicker.id}`;
      });
    });
    container.appendChild(inputConfirm);

    inputConfirm.addEventListener("click", function () {
      newDataStructure.push({
        id: `id_${inputTittle.value}_${colorMemory}_${Math.floor(
          Math.random() * 10000
        )}`,
        tittle: inputTittle.value,
        content: inputContent.value,
        color: colorMemory,
        archived: false,
        favourite: false,
        creationDate: "22-22-22",
      });
      localStorage.setItem("myNotes", JSON.stringify(newDataStructure));
      window.location.reload();
    });
  }
  NoteBox(
    id: string,
    tittle: string,
    contentTxt: string,
    color: any,
    archived: boolean,
    favourite: boolean
  ) {
    const container: HTMLElement = document.createElement("div");
    const titleTools: HTMLElement = document.createElement("div");
    const isFav: HTMLElement = document.createElement("div");
    const delBut: HTMLElement = document.createElement("div");
    const content: HTMLElement = document.createElement("div");

    container.className = "noteBox";
    titleTools.className = "titleTools";
    isFav.className = "isFav";
    delBut.className = "delBut";
    content.className = "noteBoxContent";

    container.id = id;
    titleTools.id = "titleTools";
    isFav.id = "isFav";
    delBut.id = "delBut";
    content.id = "content";

    container.style.backgroundColor = color;
    container.style.borderColor = color;

    titleTools.innerHTML = tittle;
    isFav.innerHTML = "★";
    delBut.innerHTML = "✖";
    content.innerHTML = contentTxt;

    if (favourite) {
      document.getElementById("globalFavourite").appendChild(container);
      isFav.className = "isFav";
      isFav.addEventListener("click", function () {
        newDataStructure.map((v) => {
          if (v.id === container.id) {
            v.favourite = !v.favourite;
            localStorage.setItem("myNotes", JSON.stringify(newDataStructure));
          }
        });
        window.location.reload();
      });
      delBut.addEventListener("click", function () {
        newDataStructure.map((v) => {
          if (v.id === container.id) {
            console.log(newDataStructure.indexOf(v));
            const index: number = newDataStructure.indexOf(v);
            localStorage.setItem(
              "myNotes",
              JSON.stringify(
                newDataStructure.filter(function (deleted) {
                  return deleted != newDataStructure[index];
                })
              )
            );
          }
        });
        window.location.reload();
      });
      container.appendChild(delBut);
      container.appendChild(isFav);
      container.appendChild(titleTools);
      container.appendChild(content);
    } else {
      document.getElementById("globalNotes").appendChild(container);
      isFav.className = "isNoFav";
      isFav.addEventListener("click", function () {
        newDataStructure.map((v) => {
          if (v.id === container.id) {
            v.favourite = !v.favourite;
            localStorage.setItem("myNotes", JSON.stringify(newDataStructure));
          }
        });
        window.location.reload();
      });
      delBut.addEventListener("click", function () {
        newDataStructure.map((v) => {
          if (v.id === container.id) {
            console.log(newDataStructure.indexOf(v));
            const index: number = newDataStructure.indexOf(v);
            localStorage.setItem(
              "myNotes",
              JSON.stringify(
                newDataStructure.filter(function (deleted) {
                  return deleted != newDataStructure[index];
                })
              )
            );
          }
        });
        window.location.reload();
      });
      container.appendChild(delBut);
      container.appendChild(isFav);
      container.appendChild(titleTools);
      container.appendChild(content);
    }
  }

  getDateToday() {
    let today: any = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }
}
