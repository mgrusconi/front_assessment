/**
 * Directiva de datos del gnomo.
 * Gnome Data Directive.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GnomeDataDirective implements ng.IDirective{
    public restrict = 'E';
    public templateUrl = "../templates/gnome-data.html";
 
    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new GnomeDataDirective();
        return directive;
    }
}