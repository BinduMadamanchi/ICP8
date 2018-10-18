Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @BinduMadamanchi Sign out
0
0 0 Niteesha97/CS551_team_ICP_9-2
Code  Issues 4  Pull requests 0  Projects 0  Wiki  Insights
CS551_team_ICP_9-2/ICP_8/Source/Client Server/num.js
3f70a26  4 minutes ago
@Niteesha97 Niteesha97 added code

54 lines (49 sloc)  1.65 KB
'use strict';

// Declare app level module which depends on views, and components
function TextToSpeechConverter()
{
    document.getElementById("Display").innerHTML = "Get the audio played from the search bar"
}
function Display()
{
    document.getElementById("Display").innerHTML = "Signed In";
}
function NutritionProviderFunc()
{
    document.getElementById("Display").innerHTML = "Search for the item bellow to get nutrition details"
}
function Contact()
{
    document.getElementById("Display").innerHTML = "check for the contact bellow"
}function Home()
{
    document.getElementById("Display").innerHTML = "Welcome To Home Page"
}
function Login()
{
    document.getElementById("Display").innerHTML = "Login page"
}
angular.module('NutritionApp',[])

    .controller('NutritionController',function ($scope,$http)
    {
        console.log("welcome to Nutrition Converter");
        $scope.getNutritionApp = function ()
        {
            var link1='https://api.nutritionix.com/v1_1/search/'+$scope.dish+'?results=0:1&fields=*&appId=50cd56b2&appKey=bb1554e78ba472b88ab75048dd8f2fce';
            console.log(link1);
            $http.get(link1).success(function (data)
            {
                console.log(data);
                $scope.Nutritions = data.hits;
            });
        }


    })
    .controller('SpeechController',function($scope)
    {
        $scope.getspeechtotext = function ()
        {
            var link2='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text='+$scope.dish;
            var mySound = new Audio( link2 );
            mySound.play();
        }

    });
© 2018 GitHub, Inc.
    Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.