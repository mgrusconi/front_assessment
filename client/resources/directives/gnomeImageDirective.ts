/**
 * Directiva de la imagen del gnomo.
 * Gnome Image Directive.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GnomeImageDirective implements ng.IDirective{
    public restrict = 'E';
    public templateUrl = "../templates/gnome-image.html";
 
    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new GnomeImageDirective();
        return directive;
    }
}
