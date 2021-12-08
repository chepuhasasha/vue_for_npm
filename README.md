<img src="https://github.com/sashachepuha/for_npm/blob/main/src/assets/stiker.svg" alt="drawing" width="250"/>

![Иллюстрация к проекту](https://github.com/sashachepuha/for_npm/blob/main/src/assets/header.png)

### npm
```
npm install --save @sashachepuha/test
```
### global
```js
// main.js
import Test from '@sashachepuha/test';

Vue.component('test', Test);
```
```vue
// Component.vue
<template>
  <div class='your_compomemt'>
    <Test/>
  </div>
</template>

<script>
export default {
  name: 'Component',
};
</script>
```

### in component
```vue
<template>
  <div class='your_compomemt'>
    <Test/>
  </div>
</template>

<script>
import Test from '@sashachepuha/test';

export default {
  name: 'Editor',
  components: {
    Test,
  },
};
</script>
```
