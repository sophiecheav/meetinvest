<template>
  <div class="carte">
      <div class="card">
        <slot name="img"></slot>
        <div class="card-body">
          <slot name="cardinfo"></slot>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
    name: "Carte",
    }
</script>

<style lang="scss">
</style>