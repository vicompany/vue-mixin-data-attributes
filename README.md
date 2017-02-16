# vue-mixin-data-attributes

Reads `data-` attributes from the element and assigns them to the Vue instance/component.

You can use the mixin on components and as global mixin. See [mixin documentation](https://vuejs.org/v2/guide/mixins.html).

```html
<my-message data-message="This is OK"></my-message>
```

```js
import dataAttributes from 'vue-mixin-data-attributes';

Vue.component('my-message', {
    mixins: [dataAttributes],

    data: () => {
        return {
            message: 'Default message',
        },
    },

    mounted() {
        console.log(this.message); // Logs: This is OK
    }
});
```

## Installation

`npm install vue-mixin-data-attributes`