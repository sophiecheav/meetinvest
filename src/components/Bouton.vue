<template lang="html">
  <div class="bouton">
    <button class="btn btn-outline-dark btn-lg" type="button" name="button">
      {{ title }}
    </button>
  </div>

</template>

<script>
export default {
  name: "Bouton",
  props: {
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="css" scoped>
</style>