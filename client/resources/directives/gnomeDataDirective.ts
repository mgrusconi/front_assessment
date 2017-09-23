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