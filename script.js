const formList = document.querySelector("#form-list");
const tulisList = document.querySelector("#tulis-list");
const listKegiatan = document.querySelector("#list-kegiatan");

formList.addEventListener("submit", createList);
listKegiatan.addEventListener("click", deleteList);

function createList(e) {
    e.preventDefault();

    if (tulisList.value) {
        // Memebuat Elemetn Li
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(tulisList.value));

        // Membuat Element Delete
        const deleteList = document.createElement("a");
        deleteList.style = "margin-top: -20px;";
        deleteList.className = "d-flex justify-content-end text-decoration-none mb-2 ";
        deleteList.href = "#";

        const spanDelete = document.createElement("span");
        spanDelete.className = "badge bg-danger delete-list";
        spanDelete.innerHTML = "delete";

        deleteList.appendChild(spanDelete);

        // Menambahkan Element Edit
        const editList = document.createElement("a");
        editList.className = "d-flex justify-content-end text-decoration-none ";
        editList.href = "#";

        const spanEdit = document.createElement("span");
        spanEdit.className = "badge bg-primary selesai-list";
        spanEdit.innerHTML = "selesai";

        editList.appendChild(spanEdit)

        // Mengganbungkan semua element
        li.appendChild(deleteList);
        li.appendChild(editList);

        // Menambahkan elemen Li ke UL
        listKegiatan.appendChild(li);
        tulisList.value = "";

    } else {
        alert("Anda belum memasukan list")
    }


}

function deleteList(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-list")) {
        if (confirm("Anda yakin mau menghapus list ini?")) {
            const element = e.target.parentElement;
            const deleteElement = element.parentElement;
            deleteElement.remove();
        }

    } else if (e.target.classList.contains("selesai-list")) {
        if (confirm("Anda yakin list ini sudah selesai?")) {
            const element = e.target.parentElement;
            const selesaiElement = element.parentElement;
            selesaiElement.className = "list-group-item selesai"
            element.remove();
        }
    }
}