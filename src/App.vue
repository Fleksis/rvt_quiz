<template>
  <div class="p-2" style="background-color: #0D6EFD; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
    <span class="h1 font-weight-bold m-lg-5 mb-0" style="font-size: 36px;cursor:pointer;color: white">Gudrais grāmatvedis</span>
  </div>
  <RouterView :key="$route.fullPath"/>
</template>
