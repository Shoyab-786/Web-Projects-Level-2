// Function to create a new note
function createNote() {
    // Create a new note element
    const note = document.createElement("div");
    note.classList.add("note");

    // HTML structure for the note
    note.innerHTML = `
            <input type="text" class="title" placeholder="Enter Title (Non-Editable)">
            <textarea class="description" placeholder="Type Here..." focus=""></textarea>
            <div class="btns">
                <button class="save btn">Save</button>
                <button class="delete btn">Delete</button>
            </div>
        `;

    // Append the note to the notes container
    notesContainer.appendChild(note);
}


// Select necessary elements
const createButton = document.querySelector(".create");
const notesContainer = document.querySelector(".notesContainer");

// Event listener for create button
createButton.addEventListener("click", createNote);

// Function to save note to local storage
function saveNote() {
    // Get title and description from the note
    const title = this.parentNode.parentNode.querySelector(".title").value;
    const description = this.parentNode.parentNode.querySelector(".description").value;

    // Check if title and description are not empty
    if (title.trim() !== "" && description.trim() !== "") {
        // Get existing notes from local storage or initialize an empty array
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const existingNoteIndex = notes.findIndex(note => note.title === title);

        if (existingNoteIndex !== -1) {
            // Update the existing note with new description
            notes[existingNoteIndex].description = description;
        } else {
            // Push new note to the notes array
            notes.push({ title, description });
        }

        // Save the notes array to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}

// Function to delete note
function deleteNote() {
    // Remove the parent note element
    this.parentNode.parentNode.remove();

    // Get the index of the note in the notes array
    const index = Array.from(notesContainer.children).indexOf(this.parentNode.parentNode);

    // Get notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes"));

    // Remove the note from the notes array
    notes.splice(index, 1);

    // Save the updated notes array to local storage
    localStorage.setItem("notes", JSON.stringify(notes));
}


// Event delegation for save and delete buttons
notesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("save")) {
        saveNote.call(event.target);
    } else if (event.target.classList.contains("delete")) {
        deleteNote.call(event.target);
    }
});

// Load notes from local storage when the page loads
window.addEventListener("load", function () {
    // Get notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes"));

    // Check if notes exist
    if (notes) {
        // Loop through notes and create note elements
        notes.forEach(function (note) {
            const newNote = document.createElement("div");
            newNote.classList.add("note");
            newNote.innerHTML = `
                    <input type="text" class="title" value="${note.title}" readonly>
                    <textarea class="description">${note.description}</textarea>
                    <div class="btns">
                        <button class="save btn">Save</button>
                        <button class="delete btn">Delete</button>
                    </div>
                `;
            notesContainer.appendChild(newNote);
        });
    }
});