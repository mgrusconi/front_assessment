/**
 * Directiva del nombre del gnomo.
 * Gnome Name Directive.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GnomeNameDirective implements ng.IDirective{
    public restrict = 'E';
    public templateUrl = "../templates/gnome-name.html";
 
    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new GnomeNameDirective();
        return directive;
    }
}
