const formList = document.querySelector("#form-list");
const tulisList = document.querySelector("#tulis-list");
const listKegiatan = document.querySelector("#list-kegiatan");
const cariList = document.querySelector("#cari-list");
const hapusSemuaList = document.querySelector("#hapus-semua-list");


document.addEventListener("DOMContentLoaded", getTodos);
formList.addEventListener("submit", createList);
listKegiatan.addEventListener("click", deleteList);
cariList.addEventListener("keyup", pencarianList);
hapusSemuaList.addEventListener("click", hapusList);


function getTodos() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) => {
        // Memebuat Elemetn Li
        const li = document.createElement("li");
        if (todo.status == 0) {

            li.className = "list-group-item todo-item";
        } else {
            li.className = "list-group-item selesai";
        }
        li.appendChild(document.createTextNode(todo.isi));

        // Membuat Element Delete
        const deleteList = document.createElement("a");
        deleteList.style = "margin-top: -20px;";
        deleteList.className = "d-flex justify-content-end text-decoration-none mb-2 ";
        deleteList.href = "#";

        const spanDelete = document.createElement("span");
        spanDelete.className = "badge bg-danger delete-list";
        spanDelete.innerHTML = "delete";

        deleteList.appendChild(spanDelete);
        li.appendChild(deleteList);

        if (todo.status == 0) {
            // Menambahkan Element Edit
            const editList = document.createElement("a");
            editList.className = "d-flex justify-content-end text-decoration-none ";
            editList.href = "#";

            const spanEdit = document.createElement("span");
            spanEdit.className = "badge bg-primary selesai-list";
            spanEdit.innerHTML = "selesai";

            editList.appendChild(spanEdit)
            li.appendChild(editList);
        } else {
            ""
        }


        // Menambahkan elemen Li ke UL
        listKegiatan.appendChild(li);
    })
}

function createList(e) {
    e.preventDefault();

    if (tulisList.value) {
        // Memebuat Elemetn Li
        const li = document.createElement("li");
        li.className = "list-group-item todo-item";
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
        addTodoLocalStorage(tulisList.value);
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

function pencarianList(e) {
    const filterText = e.target.value.toLowerCase();
    let todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) != -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important");
        }

    });
}

function hapusList() {
    listKegiatan.innerHTML = "";
}

function getElementFromLocalStorage() {

    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}

function addTodoLocalStorage(todoInputValue) {

    let todos = getElementFromLocalStorage();

    todos.push({
        status: "0",
        isi: todoInputValue
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}
// function addTodoLocalStorage(todoInputValue) {

//     let todos = getElementFromLocalStorage();

//     todos.push(todoInputValue);

//     localStorage.setItem("todos", JSON.stringify(todos));

// }