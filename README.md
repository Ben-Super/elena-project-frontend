# EleNa Project Frontend

By the 'OHill Squad' (Ben Super, Phil Hopen, Jurgen Yu, Sanjay Rajasekaran, and Jigar Patel)

This is the frontend of our CS520 final project. It is a reactive webpage that allows the user to input coordinates and see a route that either maximizes or minimizes elevation plotted on an interactive 'click-and-drag' map. Please refer to the Running Website section to run application (which is being hosted on server) without having to install nod or Angular. 

## Run on a Dev Server
https://angular.io/guide/setup-local

1) Install node.js by downloading and installing from this link:<br />
        Windows: https://nodejs.org/dist/v16.13.1/node-v16.13.1-x64.msi<br />
        MacOS: https://nodejs.org/dist/v16.13.1/node-v16.13.1.pkg
2) Run 'npm install -g @angular/cli' to install the Angular CLI
3) Run 'npm install --save-dev @angular-devkit/build-angular' to install the Angular Devkit
4) `cd` into the folder containing your local copy of this repo.
5) Run `npm install` to install all necessary packages for the app.
6) Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

NOTE: The routing will not work without a running instance of our backend: https://github.com/pjhopen/elena-project-backend

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Test

Run `ng test` to run a suite of basic tests on the project. This will generate a webpage showing the results of the tests.

# Running Website
http://104.224.183.111

## User Instructions
1) Input the longitude and latitude coordinates for the From and To points
![image]( | width=100)
<img src="https://user-images.githubusercontent.com/17773869/145902094-94cabef2-de8b-4c61-b0f1-356e7e2626dc.png" alt=""  width="200"/>

2) Set the weight parameter and choose to minimize or maximize the elevation <br/>
   The routes that get considered are ones that are less than weight * optimal 2D route length <br/>
<img src="https://user-images.githubusercontent.com/17773869/145903056-b8f9e5f9-6b3f-4848-aa33-2a65aedcf91b.png" alt=""  width="200"/>

3) Click the 'Find Path' button and the desired route will be displayed on the map



