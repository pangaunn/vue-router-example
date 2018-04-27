<template>
  <div>
    {{ name }} {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
