import Chance from 'chance';
const chance = new Chance();
const males = ['Аввакум', 'Аваз', 'Агап', 'Агафон', 'Август', 'Августин', 'Аггей', 'Авраам', 'Абрам', 'Аарон', 'Автандил', 'Авдей', 'Авдей', 'Азарий', 'Арам', 'Аркадий', 'Арий', 'Аристарх', 'Арно', 'Арон', 'Арнольд', 'Арсен, Арсений', 'Архип', 'Артур', 'Артем', 'Артемий', 'Акакий', 'Алан', 'Ален', 'Аким', 'Альберт', 'Альфред', 'Александр', 'Алексей', 'Амвросий', 'Анатолий', 'Амадей', 'Амадеус', 'Амаяк', 'Анисим', 'Апполинарий', 'Антон', 'Ануфрий', 'Ануфрий', 'Андрей', 'Аскольд', 'Афанасий', 'Ахмет', 'Адам', 'Адриан', 'Адольф', 'Ашот', 'Бронислав', 'Богдан', 'Борис', 'Борислав', 'Болеслав', 'Бонифаций', 'Бернар', 'Бенедикт', 'Варлаам', 'Варфоломей', 'Вальтер', 'Валерий', 'Валентин', 'Василий', 'Вадим', 'Вацлав', 'Владимир', 'Владислав', 'Владлен', 'Виктор', 'Вильгельм', 'Вилен', 'Викентий', 'Виссарион', 'Виталий', 'Витольд', 'Володар', 'Вольдемар', 'Всеволод', 'Велизар', 'Вениамин', 'Венедикт', 'Вячеслав', 'Гавриил', 'Гастон', 'Градимир', 'Григорий', 'Глеб', 'Горислав', 'Гордон', 'Гордей', 'Густав', 'Гевор', 'Геральд', 'Герасим', 'Герман', 'Георгий', 'Генрих', 'Геннадий', 'Давид', 'Дамир', 'Даниил', 'Динасий', 'Дорофей', 'Дмитрий', 'Дональд', 'Донат', 'Денис', 'Демид', 'Демьян', 'Джордан', 'Евграф', 'Евгений', 'Егор', 'Евстафий', 'Евсей', 'Евдоким', 'Ермолай', 'Ерофей', 'Еремей', 'Елизар', 'Елисей', 'Емельян', 'Ефрем', 'Ефим', 'Ефимий', 'Жан', 'Жорж', 'Ждан', 'Захар', 'Захария', 'Зигмунд', 'Зиновий', 'Зосима', 'Иван', 'Ибрагим', 'Игнат', 'Игнатий', 'Игорь', 'Израиль', 'Измаил', 'Изяслав', 'Ираклий', 'Иржи', 'Иларион', 'Илларион', 'Илиан', 'Ион', 'Ипполит', 'Иннокентий', 'Ионос', 'Ионас', 'Иосиф', 'Исаак', 'Исаакий', 'Исидор', 'Иероним', 'Казимир', 'Карл', 'Карен', 'Клавдий', 'Кирилл', 'Клим', 'Климент', 'Ким', 'Клод', 'Клемент', 'Корнилий', 'Корней', 'Конрад', 'Конкордий', 'Константин', 'Кондрат', 'Ксаннф', 'Кузьма', 'Лаврентий', 'Лазарь', 'Лука', 'Лукьян', 'Лев', 'Леван', 'Леон', 'Леонард', 'Леонид', 'Леопольд', 'Леонтий', 'Любомир', 'Люсьен', 'Людвиг', 'Марат', 'Марк', 'Мариан', 'Мартин', 'Мартын', 'Май', 'Макар', 'Максим', 'Максимилиан', 'Мануил', 'Матвей', 'Мадлен', 'Мирон', 'Мирослав', 'Милан', 'Мисаил', 'Михаил', 'Митрофан', 'Мичлов', 'Моисей', 'Модест', 'Мстислав', 'Мурат', 'Муслим', 'Мефодий', 'Мечислав', 'Мечеслав', 'Назар', 'Назарий', 'Натан', 'Наум', 'Никанор', 'Никита', 'Никифор', 'Николай', 'Никон', 'Нисон', 'Нифонт', 'Норман', 'Нестор', 'Овидий', 'Олан', 'Олег', 'Онисим', 'Оскар', 'Осип', 'Павел', 'Парамон', 'Панкрат', 'Памфил', 'Прокофий', 'Прохор', 'Платон', 'Пимен', 'Порфирий', 'Петр', 'Равиль', 'Раймонд', 'Рафаил', 'Рафик', 'Ратмир', 'Радий', 'Радий', 'Радомир', 'Рашид', 'Ринат', 'Рихард', 'Рифат', 'Ричард', 'Роберт', 'Ролан', 'Роман', 'Ростислав', 'Родион', 'Рубен', 'Руслан', 'Рустам', 'Рудольф', 'Рем', 'Ренольд', 'Савва', 'Савел', 'Савелий', 'Самсон', 'Самуил', 'Святослав', 'Спартак', 'Сократ', 'Соломон', 'Стакрат', 'Станимир', 'Станислав', 'Стивен', 'Стоян', 'Степан', 'Севастьян', 'Северин', 'Серафим', 'Сергей', 'Семен', 'Тарас', 'Талик', 'Таис', 'Тамаз', 'Трифон', 'Трофим', 'Тигран', 'Тимон', 'Тимофей', 'Тимур', 'Тит', 'Тихон', 'Терентий', 'Тельман', 'Теодор', 'Ульманас', 'Устин', 'Франц', 'Фридрих', 'Филипп', 'Филимон', 'Флорентий', 'Фидель', 'Фома', 'Фердинанд', 'Феликс', 'Феодосий', 'Федор', 'Федот', 'Харитон', 'Христиан', 'Христос', 'Христофор', 'Эраст', 'Эрик', 'Эрнест', 'Эльдар', 'Эмиль', 'Эммануил', 'Эдвард', 'Эдмунд', 'Эдуард', 'Юрий', 'Юлиан', 'Юлий', 'Юхим', 'Яромир', 'Ярослав', 'Яким', 'Яков', 'Ян', 'Януарий', 'Ясон'];
const females = ['Августа', 'Аврора', 'Агата', 'Агнесса', 'Агния', 'Ада', 'Азиза', 'Алевтина', 'Александра', 'Алёна', 'Алина', 'Алиса', 'Алла', 'Альбина', 'Амелия', 'Анастасия', 'Ангелина', 'Анжела', 'Анисья', 'Анна', 'Антонина', 'Анфиса', 'Ариадна', 'Арина', 'Астра', 'Ася', 'Беатриса', 'Белла', 'Берта', 'Божена', 'Борислава', 'Бронислава', 'Валентина', 'Валерия', 'Ванда', 'Варвара', 'Василиса', 'Венера', 'Вера', 'Вероника', 'Веста', 'Вета', 'Виктория', 'Виолетта', 'Виталина', 'Владислава', 'Галина', 'Гаянэ', 'Гелла', 'Генриетта', 'Георгина', 'Гертруда', 'Глафира', 'Грета', 'Гюзель', 'Дана', 'Даниэла', 'Дарина', 'Дарья', 'Дебора', 'Диана', 'Дина', 'Динара', 'Дионисия', 'Доминика', 'Ева', 'Евгения', 'Евдокия', 'Екатерина', 'Елена', 'Елизавета', 'Жанна', 'Земфира', 'Зинаида', 'Злата', 'Зоя', 'Изабелла', 'Изольда', 'Инга', 'Инесса', 'Инна', 'Иоанна', 'Иоланта', 'Ираида', 'Ирина', 'Ирма', 'Ия', 'Калерия', 'Камилла', 'Капитолина', 'Карина', 'Каролина', 'Кира', 'Клавдия', 'Клара', 'Констанция', 'Кристина', 'Ксения', 'Лада', 'Лариса', 'Лаура', 'Лейла', 'Леся', 'Лидия', 'Лилия', 'Лина', 'Лия', 'Любовь', 'Людмила', 'Люсьена', 'Майя', 'Маргарита', 'Марианна', 'Марина', 'Мария', 'Марта', 'Марьяна', 'Медея', 'Милена', 'Милица', 'Милослава', 'Мирослава', 'Моника', 'Муза', 'Надежда', 'Наталья', 'Нелли', 'Ника', 'Нина', 'Нонна', 'Оксана', 'Октябрина', 'Олеся', 'Ольга', 'Полина', 'Прасковья', 'Рада', 'Раиса', 'Ревекка', 'Регина', 'Рената', 'Римма', 'Роза', 'Роксана', 'Ростислава', 'Рузана', 'Руслана', 'Руфина', 'Сабина', 'Сарра', 'Светлана', 'Серафима', 'Сильва', 'Симона', 'Снежана', 'Софья', 'Станислава', 'Стелла', 'Стефания', 'Сусанна', 'Таисия', 'Тамара', 'Татьяна', 'Тереза', 'Ульяна', 'Устина', 'Фаина', 'Фаня', 'Фая', 'Фелиция', 'Флора', 'Франсуаза', 'Фрида', 'Хильда', 'Христина', 'Чеслава', 'Эдита', 'Элеонора', 'Элина', 'Элла', 'Элоиза', 'Эльвира', 'Эльза', 'Эльмира', 'Эмилия', 'Эмма', 'Эрика', 'Юлия', 'Юна', 'Юнона', 'Юстина', 'Ядвига', 'Яна', 'Ярослава'];
function fixName(baseName) {
    // Смотрим окончание имени отца
    let baseNameEnd = baseName.slice(baseName.length - 2, baseName.length);
    let baseNameRoot = baseName.slice(0, baseName.length - 2);
    // Проверяем случаи имён, исправляем в зависимости отчества.
    switch (baseNameEnd) {
        case 'ий':
            return baseNameRoot + 'ьев';
        case 'ов':
            return baseNameRoot + 'ов';
        case 'ль':
            return baseNameRoot + 'льев';
        case 'ма':
            return baseNameRoot + 'мов';
        case 'ей':
            return baseNameRoot + 'еев';
        case 'ва':
            return baseNameRoot + 'вов';
        case 'ья':
            return baseNameRoot + 'ь';
        case 'ай':
            return baseNameRoot + 'ев';
        case 'ел':
            return baseNameRoot + 'ельев';
        case 'рь':
            return baseNameRoot + 'рев';
        default:
            return baseName + 'ов';
    }
}
class GeneratedName {
    constructor(imya, familiya, otchestvo) {
        this.imya = imya;
        this.familiya = familiya;
        this.otchestvo = otchestvo;
    }
    /**
    * Возвращает имя в виде "Имя Фамилия".
    *
    * @returns Возвращает форматированную строку
    */
    toIf() {
        return this.format('%i %f');
    }
    /**
    * Возвращает имя в виде "Фамилия Имя".
    *
    * @returns Возвращает форматированную строку
    */
    toFi() {
        return this.format('%f %i');
    }
    /**
    * Возвращает имя в виде "Фамилия Имя Отчество".
    *
    * @returns Возвращает форматированную строку
    */
    toFio() {
        return this.format('%f %i %o');
    }
    toString() {
        return this.format(GeneratedName.defaultFormat);
    }
    /**
    * Форматирование имени по шаблону.
    *
    * @param tempalte - %i - для имени, %f - для фамилии, %o - для отчества, %1i - первая буква имени, %2i - две буквы имени и т.д.
    * @returns Возвращает форматированную строку
    */
    format(template) {
        return template
            .replace(/%(\d*)i/, (match, count) => {
            if (count) {
                return this.imya.slice(0, +count);
            }
            else {
                return this.imya;
            }
        })
            .replace(/%(\d*)f/, (match, count) => {
            if (count) {
                return this.familiya.slice(0, +count);
            }
            else {
                return this.familiya;
            }
        })
            .replace(/%(\d*)o/, (match, count) => {
            if (count) {
                return this.otchestvo.slice(0, +count);
            }
            else {
                return this.otchestvo;
            }
        });
    }
}
GeneratedName.defaultFormat = '%1f %1i. %1o.';
export function setDefaultFormat(template) {
    GeneratedName.defaultFormat = template;
}
export function generateFromDefined(gender, imya, familiya, otchestvo) {
    familiya = fixName(familiya) + (gender == 'female' ? 'а' : '');
    otchestvo = fixName(otchestvo) + (gender == 'female' ? 'на' : 'ич');
    return new GeneratedName(imya, familiya, otchestvo);
}
/**
* Генерирует имя, фамилию, отчество на русском языке.
* @remarks
* Можно отформатировать методом format в строку.
*
* @param gender - Выбранный пол (male или female)
* @returns Возвращает экземляр класса GeneratedName с полями imya, familiya, otchestvo,
*/
export default function generate(gender = chance.pickone(['male', 'female'])) {
    let imya = chance.pickone(gender == 'male' ? males : females);
    let familiya = fixName(chance.pickone(males)) + (gender == 'female' ? 'а' : '');
    let otchestvo = fixName(chance.pickone(males)) + (gender == 'female' ? 'на' : 'ич');
    return new GeneratedName(imya, familiya, otchestvo);
}
