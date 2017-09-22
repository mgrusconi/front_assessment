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
