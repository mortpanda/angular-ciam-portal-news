# angular-ciam-portal-news-app
 **Please note this is NOT an official Okta tool, and the Okta support team WILL NOT provide support for this.**

## What does this tool do?
* This app gets the latest News headlines from https://gnews.io using their API, and display in the screen.
* This app uses OpenID Connect as a means of authentication, so can be used to SSO from another app.

## Screenshots
<img src="/Capture.PNG" alt="drawing" width="600"/>
<img src="/Capture2.PNG" alt="drawing" width="600"/>
<img src="/Capture3.PNG" alt="drawing" width="600"/>

## Supported Language
- Currently in Japanese only.

## Development Environment
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 11.0.4
Node: 14.15.0
OS: linux x64

Angular: 11.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.4
@angular-devkit/build-angular   0.1100.4
@angular-devkit/core            11.0.4
@angular-devkit/schematics      11.0.4
@angular/cdk                    11.2.13
@angular/flex-layout            12.0.0-beta.35
@angular/http                   7.2.16
@angular/localize               11.2.14
@angular/material               11.2.13
@schematics/angular             11.0.4
@schematics/update              0.1100.4
rxjs                            6.6.3
typescript                      4.0.3

```

## How to run this tool
- In a directory of your choice,
- Clone the repo,
- Enter the directory,
- Install pakackages : `npm install`
- Run the tool : `ng serve`
- Open the tool : `http://localhost:4200`

## Configurations
- Information on the API enpoints - `src/app/shared/okta-config.ts`
- OIDC configuration - `src/app/shared/okta-config.ts`
- Sample configuration file - `src/app/shared/sample-okta-config.ts`
- Inside the files, the below section will need to be updated with your setting.
  
- Gnews configuration file `/src/app/shared/gnews/gnews-config.service.ts`
- Sample configuration file for Gnews `/src/app/shared/gnews/SAMPLE-gnews-config.service.ts`