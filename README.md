# name-generator

Библиотека генерирует случайные имена на русском языке.

Добавление в проект:

```bash
bun add Arhimondus/name-generator
pnpm add Arhimondus/name-generator
```

Использование:

```bash
import generate from 'name-generator';

console.log(generate('male').toFio());
console.log(generate('female').toFio());
```