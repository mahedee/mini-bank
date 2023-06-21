## Mini Banking

### Tools and Technology

__Backend application__ 
* Clean Architecture
* CQRS Pattern
* C#
* MS SQL Server
* Entity Framework
* AutoMapper
* MediatR
* ASP.NET Core Web API
* .NET 6.0
* Visual Studio 2022

__Frontend Application__  
* React.js
* Bootstrap

__How to run application__

* Run back end application 
    * Go to backend\TechTest
    * Open BasicBanking.sln file using visual studio
    * Change connection string in BasicBanking.API -> appsettings.json
    * Go to Package Manager Console
        * Set BasicBanking.API project as startup project
        * Set BasicBanking.Infrastructure as Default Project in Package Manager Console
        * Run ```Update-Database -Verbose```

* Run Front end application
    * Go to frontend\ClientApp
    * Open terminal and run ```npm start ```
    * Client application will run http://localhost:3003
