<template>
    <button @click="pen">
        Отправить
    </button>
</template>

<script setup lang="ts">

const pen = async () => {
  try {
    const response = await $fetch('/api/add_urok', {
      method: 'POST',
      body: {
        den: '1',
        class: 'Г',
        urok: 'angl'
      }
    });
    console.log('Успешно отправлено:', response);
  } catch (error) {
    console.error('Ошибка при отправке:', error);
  }
};
</script>