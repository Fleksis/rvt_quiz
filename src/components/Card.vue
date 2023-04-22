<template>
  <div class="card text-center d-flex justify-content-between" style="height: 230px;width: 300px;">
    <div class="d-flex justify-content-center align-items-center flex-grow-1">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <button class="btn btn-primary" style="font-size: 24px" @click="$router.push('questions/' + index)" role="button">Sākt</button>
  </div>
</template>
<script>
export default {
  props: ['title', 'index']
};
</script>

<style scoped>
.card {
  padding: 15px;
}
.btn {
  padding: 10px 15px;
}
</style>