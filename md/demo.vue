<template>
  <slots>
    我是插槽
    <template v-slot:icon>
      <button>按钮</button>
    </template>
    <template v-slot:pre>
      显示代码
    </template>
  </slots>
</template>
<script>
import slots from './icon.md'
export default {
  data() {
    return {
      show:false
    }
  },
  components: {
    slots,
  },
}
</script>
