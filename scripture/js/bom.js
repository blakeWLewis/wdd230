var topten = {
    chapters : [],
    cform : null,
    citem: null,
    addbutton: null,
    clist : null,
    setup : () => {
        topten.cform = document.getElementById("chapter-form");
        topten.citem = document.getElementById("chapter");
        topten.addbutton = document.getElementById("chapter-add-button");
        topten.clist = document.getElementById("chapters");

        topten.cform.onsubmit = topten.addChapter;
        topten.createlist();
    },

    addChapter: (e) => {
        e.preventDefault();
        topten.chapters.push({
            chapter : topten.citem.value,
        });
        topten.citem.value = "";
        topten.createlist();
    },

    deleteChapter : (i) => {
        topten.chapters.splice(i,1);
        topten.createlist();
    },

    createlist: () => {
        topten.clist.innerHTML = "";
        if (topten.chapters.length == 0) {
            topten.clist.innerHTML = "<div class='row'>No Chapters</div>"
        } else {
            for (let c in topten.chapters) {
                let row = document.createElement("div");
                row.className = "row";
                topten.clist.appendChild(row);

                let chapter = document.createElement("div");
                chapter.className = "chapter-text";
                chapter.innerHTML = topten.chapters[c].chapter;
                row.appendChild(chapter);

                let deleteButton = document.createElement("input");
                deleteButton.className = "delete-button";
                deleteButton.type = "button";
                deleteButton.value = "X";
                deleteButton.onclick = () => { topten.deleteChapter(c); };
                row.appendChild(deleteButton);
            }
        }
    }

};
window.addEventListener("load", topten.setup);