/**
 * Step:
 * -generates Step element
 * -extracts information from its Form
 * @class Step
 */
class Step {
    id: string;
    form: Form;
    createElement(): JQuery {
        var wrapper = c('step', {id: this.id});
        return this.form.createElement().wrap(wrapper);
    }
    getElement(): JQuery {
        return $('#' + this.id);
    };
    getFormElement(): JQuery {
        return $('#' + this.id + ' > ' + 'form');
    }
    
    /**
     * Serializes the form data into a JS object
     * 
     * @returns {Object} The JS object containing the form data
     * 
     * @memberOf Step
     */
    getData(): Object {
        var o = {};
        var a = this.getFormElement().serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    constructor(id: string, form: Form) {
        this.id = id;
        this.form = form;
    }
}