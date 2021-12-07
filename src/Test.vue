<template lang='pug'>
.test
  h1 {{ count }}
  button(@click='click') test
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
};
</script>

<style lang='less'>
.test {
}
</style>
