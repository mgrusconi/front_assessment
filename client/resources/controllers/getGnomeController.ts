/**
 * Controlador encargado del perfil de Gnome.
 * Gnome Profile Manager Controller.
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

import {GnomeModel} from "../models/gnomeModel";
import {GetDataService} from "../services/getDataService";

export class GetGnomeController {
    public static $inject = ["$scope", '$filter','$stateParams', "GetDataService"];

    public gnome: GnomeModel;

    constructor(private $scope: ng.IScope, private $filter: any, private $stateParams: any,private getDataService: GetDataService){
        const id = $stateParams['id'];
        if($stateParams['id']){
            this.getById($stateParams['id']);
        }else if($stateParams['name']){
            this.getByName($stateParams['name']);
        }
        
    }

    private getById(id: number){
        return this.getDataService.GetAllData().then(success => {
            var results = success.data['Brastlewark'].filter(function (gnome) {
                return gnome.id == id;
            });

            if (results.length <= 0) {
                window.location.href = '/#/not_found'
            }
            this.$scope.gnome = results[0];
        }, error => {
            console.log(error);
        });
    }

    private getByName(name: string){
        const normalize = this.$filter('normalize');
        name = normalize(name);
        return this.getDataService.GetAllData().then(success => {
            var results = success.data['Brastlewark'].filter(function (gnome) {
                return normalize(gnome.name) == name;
            });

            if (results.length <= 0) {
                window.location.href = '/#/not_found'
            }
            this.$scope.gnome = results[0];
        }, error => {
            console.log(error);
        });
    }
}