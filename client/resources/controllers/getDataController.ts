import {GnomeModel} from "../models/gnomeModel";
import {GetDataService} from "../services/getDataService";

export class GetDataController {
    public static $inject = ["$scope", "GetDataService"];

    public title: string;
    public gnomeList: GnomeModel[];
    public gnomeTotal: number;

    constructor(private $scope: any, private getDataService: GetDataService){
        this.LoadData();
    }

    private LoadData(){
        this.getDataService.GetAllData()
            .then(success => {
                this.$scope.gnomeList = success.data;
                this.$scope.gnomeTotal = success.data['Brastlewark'].length;
                console.log(this.$scope.gnomeTotal);
            }, error => {
                console.log(error);
            });
    }
}