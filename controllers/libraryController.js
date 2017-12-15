angular.module("Library").controller("libCtrl", function ($scope) {
    $scope.item = "";
    $scope.new = {};
    $scope.new.actors=[];
    $scope.editable = {};
    let taille=2;
    $scope.movies = [{
        id: 1,
        title: "Pulp Fiction",
        duration: 154,
        actors: [{
            name: "John Travolta",
            link: "http://www.imdb.com/name/nm0000237/?ref_=tt_ov_st_sm"
        }, {
            name: "Uma Thurman",
            link: "http://www.imdb.com/name/nm0000235/?ref_=tt_ov_st_sm"
        }, {name: "Samuel L. Jackson", link: "http://www.imdb.com/name/nm0000168/?ref_=tt_ov_st_sm"}],
        director: {name: "Quentin Tarantino", link: "http://www.imdb.com/name/nm0000233/?ref_=tt_ov_dr"},
        picture: "http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg"
    },
        {
            id: 2,
            title: "Fight Club",
            duration: 139,
            actors: [{
                name: "Brad Pitt",
                link: "http://www.imdb.com/name/nm0000093/?ref_=tt_ov_st_sm"
            }, {
                name: "Edward Norton",
                link: "http://www.imdb.com/name/nm0001570/?ref_=tt_ov_st_sm"
            }, {name: "Meat Loaf", link: "http://www.imdb.com/name/nm0001533/?ref_=tt_ov_st_sm"}],
            director: {name: "David Fincher", link: "http://www.imdb.com/name/nm0000399/?ref_=tt_ov_dr"},
            picture: "https://telemachusunedited.files.wordpress.com/2011/07/fight-club-movie-poster-1999.jpg"
        }
    ];
    $scope.newActorsNb = 1;
    $scope.getNumber = function () {
        return new Array($scope.newActorsNb);
    }
    $scope.addItem = function () {
        $scope.movies.push($scope.addMe);
    }
    $scope.addMovie = function () {
        $scope.new.id=taille+1;
        console.log($scope.new);
        $scope.movies.push($scope.new);
        angular.element("#myModal").modal("hide");
        taille++;

    }
    $scope.removeItem = function (x) {
        $scope.movies.splice(x, 1);
    }
    $scope.remove = function (movie) {
        var index = $scope.movies.indexOf(movie);
        $scope.movies.splice(index, 1);
    }
    $scope.removeActor = function (id){
        $scope.editable.actors.splice(id, 1);
    };
    $scope.editMovie = function () {
        var index = $scope.movies.map(x => x.id).indexOf($scope.editable.id);
        $scope.movies[index] = $scope.editable;
        angular.element("#editModal").modal("hide");
    }
    $scope.addActor = function () {
      $scope.editable.actors.push({});
    };
    $scope.edit = function (movie) {
        $scope.editable = angular.copy(movie);
        angular.element("#editModal").modal("show");
    }
});