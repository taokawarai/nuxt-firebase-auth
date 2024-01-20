<template>
  <h1>Index page</h1>
  <button @click="signIn()">ログイン</button>
</template>

<script setup>
import { useAuth } from '../composables/firebaseAuth';

const signIn = async () => {
  await useAuth().signIn();
  await navigateTo('/mypage');
}
</script>