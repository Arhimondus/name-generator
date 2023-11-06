import assert from 'assert';
import generate, { generateFromDefined } from './index.ts';

assert.equal(
	generateFromDefined('male', 'Николай', 'Рамиль', 'Спартак').toFio(),
	'Рамильев Николай Спартакович'
);

assert.equal(
	generateFromDefined('female', 'Агния', 'Рамиль', 'Иван').toFio(),
	'Рамильева Агния Ивановна'
);

assert.equal(
	generateFromDefined('female', 'Ольга', 'Петр', 'Василий').toFio(),
	'Петрова Ольга Васильевна'
);

assert.equal(
	generateFromDefined('female', 'Агния', 'Игорь', 'Григорий').toFio(),
	'Игорева Агния Григорьевна'
);

assert.equal(
	generateFromDefined('female', 'Галина', 'Матвей', 'Викентий').toFio(),
	'Матвеева Галина Викентьевна'
);

assert.equal(
	generateFromDefined('male', 'Демид', 'Милан', 'Ионас').toFio(),
	'Миланов Демид Ионасович'
);