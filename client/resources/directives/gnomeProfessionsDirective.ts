/**
 * Directiva de profesiones del gnomo.
 * Gnome Profession Directive.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GnomeProfessionsDirective implements ng.IDirective{
    public restrict = 'E';
    public templateUrl = "../templates/gnome-professions.html";
 
    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new GnomeProfessionsDirective();
        return directive;
    }
}
