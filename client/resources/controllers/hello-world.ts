/**
 * 
 * 
 *
 * 
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export class HelloWorld {

  static $inject = ["$scope"];

  constructor (private $scope) {
    $scope.name = "World"
  }

}