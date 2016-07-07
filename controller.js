/**
 * Created by ttandale on 6/30/2016.
 */
app1.controller("Filmlist",function ($scope,filmService) {


    function categoriesList (category) {
        $scope.categoriesLis1=category;

    }


    function actorList (actor) {
        $scope.actorLis1=actor;

    }


function filmm(film1)
{
    $scope.filmd=film1;
}
    function callback(obj) {
        $scope.films=obj;
        $scope.showinfo=function (film)
        {
            document.getElementById("Title").value=film.title;
            document.getElementById("ReleaseYear").value=film.releaseYear;
            document.getElementById("Language").value=film.language;
            document.getElementById("Rating").value=film.rating;
            document.getElementById("Description").value=film.description;
            document.getElementById("Length").value=film.length;
            categoriesList(film.categories);
            actorList(film.actors);


        }
        $scope.SearchFilmByFilm=function()
        {
            var title= angular.element($('#title')).val();
            console.log(title);
            for(var i=0;i<obj.length;i++)
            {
                if(obj[i].title==title)
                {
                    filmm(obj[i]);
                }
            }
        }

        $scope.SearchFilmByActor=function()
        {
            var firstName= angular.element($('#firstName')).val();
            var lastName= angular.element($('#lastName')).val();
var filmArray=[];

k=0;
            for(var i=0;i<obj.length;i++)
            {
                for(var j=0;j<obj[i].actors.length;j++)
                {


                if(obj[i].actors[j].firstName==firstName && obj[i].actors[j].lastName==lastName)
                {
                    filmArray[k]=obj[i];
                    k++;

                }
                }
            }

            filmm(filmArray);
        }

    }


    filmService(callback);


});
