## icon

### 我是导航

### 我是导航

<slot></slot>

## 具名插槽

<slot name="icon"></slot>

<slot name="pre"></slot>

```
  ComontRouters[1].children.forEach((vm, index) => {
        if (vm.path === 'icon') {
          vm.component = () => import(`../md/demo.vue`)
        } else {
          vm.component = () => import(`../md/${vm.path}.md`)
        }
      })
      export default new Router({
        routes: ComontRouters
      });
```
