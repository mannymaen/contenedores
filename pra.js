angular.module('praApp', [])
	.controller('generalListController', function ($scope, $http) {
		$scope.contenedores = [];
		var currentContainer = 0;
		$http.get('https://demo6260747.mockable.io/get_listadoGeneral').then(function (response){
			$scope.response = response.data
			$scope.listadoGeneral = $scope.response.result.listadoGeneral
			$scope.opcionesCombo = $scope.response.result.opcionesCombo
		})
		$scope.addContainer = function (element) {
			angular.forEach($scope.contenedores, function (value, key) {
				if(value.contenedor == currentContainer){
					console.log(element.descripcion)
					value.listaElementos.push(element)
				}
			})
			console.log($scope.contenedores);
		}
		$scope.change = function (option) {
			$scope.contenedores = [];
			for (var i = option.id; i > 0; i--) {
				$scope.contenedores.push({
					'contenedor':i,
					'listaElementos':[] 
				})
			}
			// console.log($scope.contenedores);
		}
		$scope.selectContainer = function (contenedor) {
			currentContainer = contenedor
		}

		$scope.deleteElement = function (elemento, contenedor) {
			console.log('delete*******')
			console.log(contenedor.listaElementos)
			angular.forEach(contenedor.listaElementos, function (value, key) {
				if (value.id == elemento.id) {
					// console.log(contenedor.listaElementos[key])
					contenedor.listaElementos.splice(key,1);
				}
				
			})
			console.log($scope.contenedores)
			
		}

	});