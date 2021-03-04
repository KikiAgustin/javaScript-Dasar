const formList = document.querySelector("#form-list");
const tulisList = document.querySelector("#tulis-list");
const listKegiatan = document.querySelector("#list-kegiatan");

formList.addEventListener("submit", createList);

function createList(e) {
    e.preventDefault();

    // Memebuat Elemetn Li
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(tulisList.value));

    // Membuat Element Delete
    const deleteList = document.createElement("a");
    deleteList.style = "margin-top: -20px;";
    deleteList.className = "d-flex justify-content-end text-decoration-none mb-2";
    deleteList.href = "#";

    const spanDelete = document.createElement("span");
    spanDelete.className = "badge bg-danger";
    spanDelete.innerHTML = "delete";

    deleteList.appendChild(spanDelete);

    // Menambahkan Element Edit
    const editList = document.createElement("a");
    editList.className = "d-flex justify-content-end text-decoration-none mb-2";
    editList.href = "#";

    const spanEdit = document.createElement("span");
    spanEdit.className = "badge bg-primary";
    spanEdit.innerHTML = "selesai";

    editList.appendChild(spanEdit)

    // Mengganbungkan semua element
    li.appendChild(deleteList);
    li.appendChild(editList);

    // Menambahkan elemen Li ke UL
    listKegiatan.appendChild(li);

}