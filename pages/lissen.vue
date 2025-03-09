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
</body>
</template>

<script setup>
import { onMounted } from "vue";
import { nextTick } from "vue"; 


// Функция отправки в API
const fetchUrok = async () => {
    const response = await useFetch('/api/callback_urok', {
        method: 'POST',
    });
    return response;
};
const session = await fetchUrok();
const uroki = session.data;

console.log(uroki.value[0].den);



onMounted(() => {
    if (typeof window === "undefined") return;

    console.log("1")



    async function fillScheduleTable(scheduleData) {
        const days = document.querySelectorAll("#lessonsTable tbody tr"); // Берем все строки

        let rowIndex = 0; // Индекс строки в массиве данных

        days.forEach(row => {
            let cells = row.querySelectorAll("td");
            const lessonKeys = ["urokA", "urokB", "urokV", "urokG"];
            let lessonIndex = 0;

            // Если строка относится к дню недели (проверяем по первому столбцу)
            if (cells.length === 1) {
                return; // Пропускаем строки с днями недели
            }

            cells.forEach((cell, colIndex) => {
                if (lessonIndex < lessonKeys.length && scheduleData[rowIndex]) {
                    cell.textContent = scheduleData[rowIndex][lessonKeys[lessonIndex]];
                }
                lessonIndex++;
            });

            rowIndex++; // Переход к следующей строке в массиве
        });
    }

    fillScheduleTable(uroki.value);






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

    document.getElementById("randomizeSchedule").onclick = async () => {
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
        const rows = document.querySelectorAll("tr"); 
        let currentDay = ""; // Для хранения текущего дня недели
        let lessonsData = []; // Массив для хранения всех данных

        rows.forEach((tr) => {
            let firstTd = tr.querySelector("td");

            if (firstTd && firstTd.getAttribute("rowspan") === "8") { 
                currentDay = firstTd.textContent.trim(); // Запоминаем день
            }

            let lessons = [...tr.querySelectorAll("td")]
                .filter(td => td.getAttribute("rowspan") !== "8")
                .map(td => td.textContent.trim());

            if (lessons.length > 0 & currentDay !== "") { 
                lessonsData.push({
                    den: currentDay,
                    urokA: lessons[0] || "",
                    urokB: lessons[1] || "",
                    urokV: lessons[2] || "",
                    urokG: lessons[3] || "",
                });
                // console.log("Обнаружен день:", currentDay);
                // console.log("Данные строки:", lessons);
                // console.log("Формируемый объект:", {
                // den: currentDay,
                // urokA: lessons[0] || "",
                // urokB: lessons[1] || "",
                // urokV: lessons[2] || "",
                // urokG: lessons[3] || "",
                // });
            }
            
            
        });

        // Функция отправки в API
        const sendLessonsToDB = async () => { 
            try {
                const response = await $fetch('/api/clear_ur', {
                        method: 'POST'
                    });
                    console.log('очистка1', response);
                for (const lesson of lessonsData) {
                            
                    const response = await $fetch('/api/add_urok', {
                            method: 'POST',
                            body: {
                                den: lesson.den,
                                urokA: lesson.urokA,
                                urokB: lesson.urokB,
                                urokV: lesson.urokV,
                                urokG: lesson.urokG
                            }
                        });
                        console.log('Успешно отправлено:', response);
                }
            } catch (error) {
                console.error('Ошибка при отправке:', error);
            }

            let sohr = document.getElementById("addSubject");

            sohr.textContent = "сохранилось";
        };
        // Запускаем отправку
        sendLessonsToDB();


        // const updateTable = async () => {
        //     for (const les of uroki) {
        //         if (firstTd && firstTd.getAttribute("rowspan") === "8") { 
        //             currentDay = firstTd.textContent.trim(); // Запоминаем день
        //         }

        //         if (currentDay == les )
        //     }
        // };
        // updateTable();



        

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