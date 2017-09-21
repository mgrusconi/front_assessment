/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class GoodbyeWorld {

  static $inject = ["$scope"];

  constructor (private $scope) {
    $scope.name = "World 2"
  }

}