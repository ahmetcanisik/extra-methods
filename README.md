# Extra methods, functions and classes for Node.js.

This package, added Extra methods, functions and classes for Node.js.
<details>
    <summary>Turkish</summary>
    Bu proje Node.js de varsayılan olarak yer almayan ancak diğer programlama dillerinde (python, rust etc.) bulunan metodlar, fonksiyonlar ve sınıfları dahil etmeyi amaçlamaktadır.
</details>

## title()

from python...
Uppercase the first letter of words.

```js
import { title } from 'extra-methods'; // const { title } = require("extra-methods");

title("    my name is ahmet     "); // My Name İs Ahmet
```

## input()

from python...
Simple stdin read line function.
> [!NOTE]
> [@inquirer/input](https://npmjs.com/package/@inquirer/input) is so much better for this.

```js
import { input } from 'extra-methods'; // const { input } = require("extra-methods");

await input("What's your name? ");
```