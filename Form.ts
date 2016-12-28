/**
 * Form and its derivates are used to generate the Form element
 *
 * @interface Form
 */
interface Form {
    title: string;
    text: string;
    createElement(): JQuery;
}

class Select implements Form {
    title: string;
    text: string;
    options: Option[];
    createElement(): JQuery {
        var $element = c('form');

        var $title = c('div', { id: "title" }).text(this.title);
        var $text = c('div', { id: "text" }).text(this.text);
        $element.append($title).append($text);

        var $select = c("select", { name: "select" });
        this.options.forEach(el => {
            $("option", { value: el.value }).text(el.text).appendTo($select);
        });
        $element.append($select);

        return $element;
    }
    constructor(title: string, text: string, options: Option[]) {
        this.title = title;
        this.text = text;
        this.options = options;
    }
}

interface Option {
    text: string;
    value: string;
}

class Check implements Form {
    checked: boolean;
    title: string;
    text: string;
    createElement(): JQuery {

        var $element = c('form');

        var $title = c('div', { id: 'title' }).text(this.title);
        var $text = c('div', { id: 'text' }).text(this.text);
        $element.append($title).append($text);

        var $check = c('input', { name: 'check', type: 'checkbox' }).prop('checked', this.checked);
        $element.append($check);

        return $element;
    }
}