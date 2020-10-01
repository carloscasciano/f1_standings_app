### Formula 1 Standings App

#### Summary

App online here: https://ccasci-formula1-app.netlify.com/

Formula 1 Standings app made for study purposes regardings API calls, server creation, render information on screen and to have fun.

This app was made for study purposes only and does not intend to have commercial value.

I do not own or intend to own any of the information or images displayed here. They are probably FIA copyrighted.


#### Features

Check any circuit year (2020 was cancelled due COVID19, so it will not appear until season starts) for Formula 1 Standings, drivers and races details.  
  
<img src="https://media.giphy.com/media/MCio2anvEVpwfuI1Gg/giphy.gif"/>
  
----
  
Constructors:  
:white_check_mark: Check position.
:white_check_mark: Check # of wins.
:white_check_mark: Check Total Points.
:white_check_mark: Link to company Wikipedia Page.
  
<img src="https://media.giphy.com/media/hoyAKEFiNvD7LS0tva/giphy.gif" />
  
----
  
Drivers:  
:white_check_mark: Show current constructor.
:white_check_mark: Check position.
:white_check_mark: Check # of wins.
:white_check_mark: Check Total Points.
:white_check_mark: Link to personal Wikipedia Page.
  
<img src="https://media.giphy.com/media/Veqmeii5wnKQf668ai/giphy.gif"/>
  
----
  
Schedule:  
:white_check_mark: Check Circuits order.
:white_check_mark: Check Date and Time (if available).
:white_check_mark: Show Pole Position.
:white_check_mark: Show Race Winner.
:white_check_mark: Show Country.
:white_check_mark: Link to specific race Wikipedia Page for more details.
  
<img src="https://media.giphy.com/media/ZaFXBFU6WMdZQ8v2hd/giphy.gif"/>
  
----
  
Twitter:
:white_check_mark: Check last news.
  
<img src="https://media.giphy.com/media/YSHbDHYSaetEDkodRM/giphy.gif"/>
  
----
  
Mobile ready
:white_check_mark: Used react-responsive package: https://www.npmjs.com/package/react-responsive
  
<img src="https://media.giphy.com/media/JUYp2SOsKey1fUFJdz/giphy.gif"/>
  
----
  
#### Component Logic

Used Material-UI for components: https://material-ui.com/

Structure:  

|- TopMenu  
|-- Personal Info  
|-- Year Selector  
|-- Twitter Area  
|--- Twitter Commands  
|--- Extra Information  
|- Standings Area  
|-- Constructor Standings  
|-- Driver Standings  
|-- Schedule Table  

#### Api Calls

F1 WorkFlow:  

- All files on ```f1_data_calls``` folder  
- Using axios to get JSON raw information from https://ergast.com/mrd/ API  
- Filter and manipulate raw information  
- Moment.js to handle date when necessary: https://momentjs.com/  
- Serve info to react components  

Twitter:  

- Used react-twitter-embed package: https://www.npmjs.com/package/react-twitter-embed  

#### Images

- For further studies, created a simple personal server to serve drivers and constructors images with Node and Express. Code on this repository: https://github.com/carloscasciano/f1_assets_server.

- Flags images are served from www.countryflags.io and receives a small treatment to get proper countries names and codes

#### Online

- Used Netlify to add app to online production.

#### Tools

- VSCode
- Node
- React
- ESLint




