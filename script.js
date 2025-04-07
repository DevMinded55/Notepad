let notesTitle = ["Ba", "Ap", "Pe"];
let notes = ["banana", "apple", "peach"];
let trashNotesTitle = [];
let trashNotes = [];

function renderNotes(){
    getFromLocalStorage();
    getFromLocalTrashStorage();
    renderTrashNotes();

    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let i = 0; i < notes.length; i++){
        contentRef.innerHTML += getNoteTemplate(i);
    }
    
}

function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "";

    for (let iTrashNotes = 0; iTrashNotes < trashNotes.length; iTrashNotes++){
        trashContentRef.innerHTML += getTrashNoteTemplate(iTrashNotes);
    }
}

function addNote(){
let noteInputRef = document.getElementById("note_input");
let noteInput = noteInputRef.value;

if(noteInputRef !=""){
    notes.push(noteInput);
}

saveToLocalStorage();

renderNotes();

noteInputRef.value = "";
}

function saveToLocalStorage(){
    localStorage.setItem("storageData", JSON.stringify(notes));
}

function getFromLocalStorage(){
    let myNotes = JSON.parse(localStorage.getItem("storageData"));

    if(myNotes != null){
        notes = myNotes;
    }
}

function saveToLocalTrashStorage(){
    localStorage.setItem("trashStorageData", JSON.stringify(trashNotes));
}

function getFromLocalTrashStorage(){
    let myTrashNotes = JSON.parse(localStorage.getItem("trashStorageData"));

    if(myTrashNotes != null){
        trashNotes = myTrashNotes;
    }
}

function noteToTrash(i){
    let trashNote = notes.splice(i, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitle.splice(i, 1);
    trashNotesTitle.push(trashNoteTitle[0]);
    saveToLocalStorage();
    saveToLocalTrashStorage();
    renderNotes();
    renderTrashNotes();
}

function deleteNote(i){
    trashNotes.splice(i, 1);
    saveToLocalStorage();
    saveToLocalTrashStorage();
    renderNotes();
    renderTrashNotes();
}

function redoDelete(i){
    let redoNote = trashNotes.splice(i, 1);
    notes.push(redoNote[0]);
    console.log(notes);
    saveToLocalStorage();
    saveToLocalTrashStorage();
    renderNotes();
}