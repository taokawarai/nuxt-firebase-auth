<template>
  <h1>My page</h1>
  <div>
    <p>uid :{{ signInUser?.uid }}</p>
    <p>email : {{ signInUser?.email }}</p>
    <p>displayName : {{ signInUser?.displayName }}</p>
    <button @click="signOut">ログアウト</button>
  </div>
</template>

<script setup>
import { useAuth, signInUser } from '../composables/firebaseAuth';

definePageMeta({
  middleware: ["auth"]
})

const signOut = async () => {
  await useAuth().signOut();
  await navigateTo('/')
}
</script>