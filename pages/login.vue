<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Pangolin&display=swap" rel="stylesheet">
    <title>Вход</title>
</head>
<body>
    
    <form>
        <header id="form-header">
            <h1>Войти</h1>
        </header>

        <section id="form-data">
            <div class="form-field">
                <label>Код учителя</label>
                <input id="code" type="text" name="code" placeholder="код">
            </div>
        </section>

        <label id="not"></label>

        <div class="sign">
            <button id="sign-btn" type="submit">
                <h2>Продолжить</h2>
            </button> 
        </div>

        <div class="back">
            <a href="/" class="link-back">Вернуться назад</a>
        </div>
           
    </form>


</body>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    let code = document.getElementById('code');
    let btn = document.getElementById('sign-btn');
    let nottext = document.getElementById('not');

    let correct = false;

    let users = [111];

    btn.onclick = function (event) {
        event.preventDefault();
        const codeUser = code.value;

        for(let i = 0; i < users.length; i++){
            if(codeUser != users[i]){
                correct = false;
                continue;
            }
            else{
                correct = true;
                break;
            }
        }
        if(correct){
            location.replace("/")
        }
        else {
            nottext.textContent = "Неверный код доступа";
        }
    }
    correct = false;
})


</script>

<style scoped>
/* assets/styles/signup.css */
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

/* Оставляем ваши стили для body */
body {
    background-color: #45509d;
    margin: 0;
    padding: 0;
    font-family: "Balsamiq Sans";
    height: 100vh;
    display: flex;
    justify-content: center; /* Центрирует по горизонтали */
    align-items: center;     /* Центрирует по вертикали */
}

/* Убедитесь, что форма имеет нужные размеры и расположение */
form {
    background-color: white;
    border-radius: 10px;
    width: 500px;
    height: 300px;
    padding-top: 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    line-height: 1px;
}

/* Стили для остальных элементов */
#form-header {
    justify-items: center;
}

.form-field {
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
}

input, button {
    font-family: inherit;
}

label {
    line-height: 24px;
}

input {
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #CCC;
    box-shadow: 0px 2px 2px 2px rgba(204, 204, 204, 0.10);
    padding: 5px;
}

#sign-btn {
    margin-top: 30px;
    background-color: white;
    border: none;
    margin-left: 190px;
    transition: 0.5s;
}

#sign-btn:hover {
    color: #848ab1;
    transform: scale(1.2);
}

#not {
    margin-left: 150px;
    color: red;
    font-size: 20px;
}

.link-back {
    position: absolute;
    text-decoration: none;
    color: rgb(90, 88, 87);
    font-size: 16px;
    margin-top: 30px;
    margin-left: 190px;
    transition: 0.5s;
}

.link-back:hover {
    transform: scale(1.2);
}


</style>
