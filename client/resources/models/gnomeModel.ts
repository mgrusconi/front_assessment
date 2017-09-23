/**
 * Modelo de dato del objeto Gnome.
 * Gnome Object Data Model.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GnomeModel{
    public id: number;
    public name: string;
    public thumbnail: string;
    public age: number;
    public weight: number;
    public height: number;
    public hair_color: string;
    public professions: Array<string>;
    public friends: Array<string>;
}