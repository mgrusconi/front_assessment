/**
 * Controlador encargado del conjunto de datos.
 * Dataset Manager Controller.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

import {GnomeModel} from "../models/gnomeModel";
import {GetDataService} from "../services/getDataService";

export class GetDataController {
    public static $inject = ["$scope", '$filter','$stateParams', "GetDataService"];

    public gnomeList: GnomeModel[];
    public gnomeTotal: number;

    constructor(private $scope: ng.IScope, private $filter: any, private $stateParams: any,private getDataService: GetDataService){
        if($stateParams['prof']){
            this.getListByProfession($stateParams['prof']);
        }else{
            this.LoadData();
        }
    }

    private LoadData(){
        this.getDataService.GetAllData()
            .then(success => {
                this.$scope.gnomeList = success.data;
                this.$scope.gnomeTotal = success.data['Brastlewark'].length;
            }, error => {
                console.log(error);
            });
    }

    public getListByProfession(prof: string){
        const normalize = this.$filter('normalize');
        prof = normalize(prof);
        return this.getDataService.GetAllData().then(success => {
            let results = success.data['Brastlewark'].filter(function (gnome) {
                return gnome.professions.some(function (p) {
                    return normalize(p) == prof;
                });
            });
            if (results.length <= 0) {
                window.location.href = '/#/not_found'
            }
            this.$scope.gnomeList = {'Brastlewark': results};
            this.$scope.gnomeTotal = results.length;
        }, error => {
            console.log(error);
        });
    }
}