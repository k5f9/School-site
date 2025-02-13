export function setupSchedule() {
    if (typeof window === "undefined") return;

    window.onload = () => {
        const cells = document.querySelectorAll("td[draggable='true']");
        let draggedCell = null;
        
    function updateDragHandlers() {
        const newCells = document.querySelectorAll("td[draggable='true']");
        newCells.forEach(cell => {
            cell.ondragstart = (e) => {
                draggedCell = cell;
                cell.classList.add("dragging");
                e.dataTransfer.effectAllowed = "move";
            };

            cell.ondragend = () => {
                cell.classList.remove("dragging");
                draggedCell = null;
            };

            cell.ondragover = (e) => {
                e.preventDefault();
            };

            cell.ondrop = (e) => {
                e.preventDefault();
                if (draggedCell !== cell) {
                    const draggedParent = draggedCell.parentNode;
                    const targetParent = cell.parentNode;

                    const draggedClone = draggedCell.cloneNode(true);
                    const targetClone = cell.cloneNode(true);

                    draggedParent.replaceChild(targetClone, draggedCell);
                    targetParent.replaceChild(draggedClone, cell);

                    draggedClone.classList.remove("dragging");
                    targetClone.classList.remove("dragging");

                    updateDragHandlers();
                }
            };
        });
    }

    updateDragHandlers();

    function saveTable() {
        const table = document.querySelector("#lessonsTable tbody");
        const rows = table.querySelectorAll("tr");
        const data = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            const rowData = [];
            cells.forEach(cell => {
                rowData.push(cell.textContent.trim());
            });
            data.push(rowData);
        });

        localStorage.setItem("scheduleData", JSON.stringify(data));
        alert("Данные сохранены!");
    }

    function loadTable() {
    const table = document.querySelector("#lessonsTable tbody");
    const savedData = JSON.parse(localStorage.getItem("scheduleData"));

    if (!savedData) return;

    // Очищаем таблицу перед загрузкой
    table.innerHTML = "";

    savedData.forEach(rowData => {
        const newRow = document.createElement("tr");

        rowData.forEach(cellData => {
            const newCell = document.createElement("td");
            newCell.textContent = cellData;
            newCell.setAttribute("draggable", "true");
            newRow.appendChild(newCell);
        });

        table.appendChild(newRow);
    });

    updateDragHandlers(); // Пересоздаем обработчики после загрузки
    }


    document.getElementById("saveButton").onclick = saveTable;
    loadTable();

    function createLissen() {
        const letter = document.querySelector("#letter").value.trim();
        const lishour = document.querySelector("#lissen-hour").value.trim();

        if (!letter || !lishour) {
            alert("Не все поля заполнены!");
            return;
        }

        const table = document.querySelector("#lessonsTable");

        let colIndex;
        switch (letter) {
            case "А":
                colIndex = 1;
                break;
            case "Б":
                colIndex = 2;
                break;
            case "В":
                colIndex = 3;
                break;
            case "Г":
                colIndex = 4;
                break;
            default:
                alert("Некорректная буква класса!");
                return;
        }

        const rowIndex = 2;
        const cell = table.rows[rowIndex]?.cells[colIndex];
        if (cell) {
            cell.textContent = lishour;
        } else {
            alert("Ячейка не найдена!");
        }
    }

    document.getElementById("saveLissen").onclick = createLissen;

    const originalData = [
        { day: "Понедельник", class1: "Математика", class2: "Русский язык" },
        { day: "Вторник", class1: "Физика", class2: "Литература" },
    ];

    function resetTable() {
        const tableBody = document.querySelector("#lessonsTable tbody");
        tableBody.innerHTML = "";

        originalData.forEach(rowData => {
            const newRow = document.createElement("tr");
            const dayCell = document.createElement("td");
            const class1Cell = document.createElement("td");
            const class2Cell = document.createElement("td");

            dayCell.textContent = rowData.day;
            class1Cell.textContent = rowData.class1;
            class2Cell.textContent = rowData.class2;

            newRow.appendChild(dayCell);
            newRow.appendChild(class1Cell);
            newRow.appendChild(class2Cell);
            tableBody.appendChild(newRow);
        });

        localStorage.removeItem("scheduleData");
        alert("Данные сброшены!");
    }

    document.getElementById("resetButton").onclick = resetTable;

    document.getElementById("randomizeSchedule").onclick = () => {
        const subjects = ["Математика", "Физика", "Химия", "История", "География", "Биология", "Информатика", "Литература", "Иностранный язык", "Физкультура"];
        const table = document.querySelector("#lessonsTable tbody").querySelectorAll("tr");

        table.forEach(row => {
            const cells = row.querySelectorAll("td:not(:first-child)");
            cells.forEach(cell => {
                cell.textContent = subjects[Math.floor(Math.random() * subjects.length)];
            });
        });
    };
};
}