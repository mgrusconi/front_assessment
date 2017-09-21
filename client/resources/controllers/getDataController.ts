import {GnomeModel} from "../models/gnomeModel";
import {GetDataService} from "../services/getDataService";

export class GetDataController {
    public static $inject = ["GetDataService"];

    public title: string;
    public gnomeList: GnomeModel[];
    public gnomeTotal: number;

    constructor(private getDataService: GetDataService){
        this.title = "Altran Frontend Assessment";
        this.LoadData();
    }

    private LoadData(){
        this.getDataService.GetAllData()
            .then(success => {
                console.log(success.data);
                this.gnomeList = success.data;
                this.gnomeTotal = success.data['Brastlewark'].length;
            }, error => {
                console.log(error);
            });
    }
}