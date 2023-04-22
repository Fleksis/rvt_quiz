<template>
  <nav class="navbar" style="background-color: #0D6EFD; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
    <div class="container-fluid">
      <p class="h1 mb-0" @click="$router.push('/')" style="cursor:pointer;color: white">Gudrais grāmatvedis</p>
    </div>
  </nav>
  <RouterView :key="$route.fullPath"/>
</template>
