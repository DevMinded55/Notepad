function getNoteTemplate(i){
    return `<p>+ Titel: ${notesTitle[i]} -> ${notes[i]} <button onclick="noteToTrash(${i})">x</button></p> `;
}

function getTrashNoteTemplate(iTrashNotes){
    return `<p>+ Titel: ${trashNotesTitle[iTrashNotes]} -> ${trashNotes[iTrashNotes]} <button onclick="redoDelete(${iTrashNotes})">n</button></p> <button onclick="deleteNote(${iTrashNotes})">x</button></p> `;
}