// Tab Navigation Functionality
function openTab(evt, tabName) {
    // Hide all elements with class="tabcontent" by default 
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the class "active" from all tab links 
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab and add an "active" class to the button that opened the tab 
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Spoiler Toggle Functionality
function toggleSpoiler(spoilerId) {
    var spoiler = document.getElementById(spoilerId);
    if (spoiler.style.display === "none") {
        spoiler.style.display = "block";
    } else {
        spoiler.style.display = "none";
    }
}

// Search Functionality
function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Notes Management Functionality
let notes = [];
function addNote() {
    var noteInput = document.getElementById('noteInput').value;
    if(noteInput) {
        notes.push(noteInput);
        document.getElementById('noteInput').value = ''; // Clear input box
        displayNotes();
    }
}

function displayNotes() {
    var notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    notes.forEach(function(note, index) {
        notesList.innerHTML += '<li>' + note + ' <button onclick="deleteNote(' + index + ')">Delete</button></li>';
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}