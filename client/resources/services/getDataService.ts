/// <reference path="../../../typings/index.d.ts" />

import {GnomeModel} from "../models/gnomeModel";

export class GetDataService{
    
    public static $inject = ['$http'];
    private url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
    public gnomeList: GnomeModel[];

    constructor(private $http: ng.IHttpService) {
    }

    public GetAllData(): ng.IHttpPromise<GnomeModel[]>{
        return this.$http.get<GnomeModel[]>(this.url);
    }
}