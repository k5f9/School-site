<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Расписание уроков</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Pangolin&display=swap" rel="stylesheet">
</head>
<body>
    <header class="up-stairs">
        <div class="logo">
          <a href="https://gymn42.gosuslugi.ru/"><img src="/img/logo0.png" class="logo-img"></a>
        </div>
    
        <div class="text-up">
    
          <div class="glavnaya">
    
          <li class="li-glavnaya"><a href="/" class="link-glavnaya">Главная</a></li>
    
          </div>
          <div class="raspisanie-zvonki">
    
          <li class="li-raspisanie-zvonki"><a href="/lissen" class="link-raspisanie-zvonki">Расписание звонков</a></li>
    
          </div>
          <div class="raspisanie-merop">
    
          <li class="li-raspisanie-merop"><a href="" class="link-raspisanie-merop">Расписание мероприятий</a></li>
    
          </div> 
        
    
        </div>
        <div class="r-voiti-kak-uchitel">
            
          <li><a href="/" class="log-out">Выйти</a></li>
    
        </div>
    </header>
    <div>
        <h3>Настройка количества уроков:</h3>
        <div id="subjectConfig">
            <div>
                <input type="text" placeholder="Название предмета" class="subject-name">
                <input type="number" placeholder="Количество" class="subject-count" min="1">
            </div>
        </div>
        <button id="addSubject">Добавить предмет</button>
    </div>
    <button id="randomizeSchedule">Заполнить расписание</button>
    

    <table id="lessonsTable">
        <thead>
            <tr>
                <th rowspan="2">День недели</th>
                <th colspan="1">10А</th>
                <th colspan="1">10Б</th>
                <th colspan="1">10В</th>
                <th colspan="1">10Г</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="8" id="pon">Понедельник</td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td rowspan="8">Вторник</td>
                
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td rowspan="8">Среда</td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td rowspan="8">Четверг</td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td rowspan="8">Пятница</td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td rowspan="8">Суббота</td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
            <tr>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
                <td rowspan="1" draggable="true"></td>
            </tr>
        </tbody>
    </table>


    <button id="resetButton">Сбросить</button>
    <button id="saveButton">Сохранить</button>
</body>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    if (typeof window === "undefined") return;

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
        const days = document.querySelectorAll("#lessonsTable tbody");
        const maxLessonsPerDay = 7;
        const minLessonsPerDay = 6;
        const maxRepeatsPerSubject = 2;

        // Вспомогательная функция для перемешивания массива
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Сбросить таблицу перед рандомизацией
        days.forEach(day => {
            day.querySelectorAll("td:not(:first-child)").forEach(cell => {
                cell.textContent = ""; // Очистить предыдущие данные, кроме названия дня
            });
        });

        // Обработать каждый день
        days.forEach(day => {
            const rows = day.querySelectorAll("tr");

            // Подготовить расписание для каждого урока
            rows.forEach((row, rowIndex) => {// Пропустить строку с названием дня
                const cells = row.querySelectorAll("td");

                cells.forEach((cell, colIndex) => {
                    let schedule = [];

                    // Заполняем расписание, соблюдая минимальное и максимальное количество уроков в день
                    while (
                        schedule.length < minLessonsPerDay ||
                        (schedule.length < maxLessonsPerDay && Math.random() > 0.5)
                    ) {
                        let subject = subjects[Math.floor(Math.random() * subjects.length)];

                        // Убедиться, что предмет не повторяется больше установленного максимума
                        if (schedule.filter(item => item === subject).length < maxRepeatsPerSubject) {
                            schedule.push(subject);
                        }
                    }

                    shuffle(schedule); // Перемешать расписание для случайности

                    // Присвоить предмет для текущей ячейки
                    const subject = schedule[rowIndex-1] || ""; // Избежать переполнения
                    if (subject) {
                        cell.textContent = subject;
                    }
                });
            });
        });
    };
});
</script>


<style>
body {
    font-family: Arial, sans-serif;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

td {
    cursor: move;
}

td.dragging {
    background-color: #e0e0e0;
    opacity: 0.5;
}

td:hover {
    background-color: #f9f9f9;
}

.balsamiq-sans-regular {
    font-family: "Balsamiq Sans", serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .balsamiq-sans-bold {
    font-family: "Balsamiq Sans", serif;
    font-weight: 700;
    font-style: normal;
  }
  
  .balsamiq-sans-regular-italic {
    font-family: "Balsamiq Sans", serif;
    font-weight: 400;
    font-style: italic;
  }
  
  .balsamiq-sans-bold-italic {
    font-family: "Balsamiq Sans", serif;
    font-weight: 700;
    font-style: italic;
  }
  
  .pangolin-regular {
    font-family: "Pangolin", serif;
    font-weight: 400;
    font-style: normal;
  }
  
  
  *{
    margin: 0;
    padding: 0;
  }
  
  .logo-img{
    width: 50px;
  }
  
  .logo{
    position: relative;
    left: 0;
  }
  
  .up-stairs{
    position: relative;
    display: flex;
    text-align: center;
  }
  
  .glavnaya{
    position: absolute;
    right: 70%;
    font-family: "Pangolin";
    font-size: 20px;
  }
  
  .link-glavnaya{
    transition: 0.3s;
  }
  
  .link-glavnaya:hover {
    color: #848ab1;
  }
  
  .raspisanie-zvonki{
    position: absolute;
    right: 50%;
    font-family: "Pangolin";
    font-size: 20px;
  }
  
  .link-raspisanie-zvonki{
    transition: 0.3s;
  }
  
  .link-raspisanie-zvonki:hover {
    color: #848ab1;
  }
  
  .raspisanie-merop{
    position: absolute;
    right: 30%;
    font-family: "Pangolin";
    font-size: 20px;
  }
  
  .link-raspisanie-merop{
    transition: 0.3s;
  }
  
  .link-raspisanie-merop:hover {
    color: #848ab1;
  }
  
  .r-voiti-kak-uchitel{
    position: absolute;
    right: 0;
    width: 120px;
    height: 40px;
    margin-top: 0.25%;
    margin-right: 0.5%;
    border: none; /* Без границы */
    padding: 5px;
    font-size: 20px;
    border-radius: 20px;
    font-family: 'Balsamiq Sans';
  }
  
  .text-up{
    margin-top: 0.5%;
  }
  
  li{
    list-style-type: none;
  }
  
  a{
    text-decoration: none;
    color: black;
  }
  td {
    color: black;
}

</style>