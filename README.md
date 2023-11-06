# name-generator

Библиотека генерирует случайные имена на русском языке.

Добавление в проект:

```bash
bun add Arhimondus/name-generator
pnpm add Arhimondus/name-generator
```

Использование:

```js
import generate from 'name-generator';

// С выбором пола
console.log(generate('male').toFio());
console.log(generate('female').toFio());

// С любым полом
console.log(generate().toFio());

// Вывод в формате "Имя Фамилия"
console.log(generate().toIf());

// Вывод в формате "Фамилия Имя"
console.log(generate().toFi());

// Вывод в произвольном формате (в данном примере "Отчество Фамилия Имя")
console.log(generate().format('%o %f %i'));

// Вывод в произвольном формате первых букв отчества и фамилии (в данном примере "О. Ф. | Имя")
console.log(generate().format('%1o. %1f. %i'));

// Вывод в формате "Фамилия И. О."
console.log(generate().format('%f %1i. %o1.'));

// Вывод в формате "И. О. Фамилия"
console.log(generate().format('%1i. %o1. %f'));
```