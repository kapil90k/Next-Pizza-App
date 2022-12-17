This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
git remote add origin https://github.com/USER/REPO.git
git push --set-origin origin main
git remote -v
git push -f origin master
```

## React Cheatsheet
```bash
Installing react:
npm install --global yarn
npm install -g create-react-app
create-react-app -version
create-react-app learningreact
npm install @material-ui/core
npm install @material-ui/icons
npm install react-router-dom
npm install react-currency-format
npm install firebase
sudo npm install -g firebase-tools
npm install @stripe/stripe-js
npm install @stripe/react-stripe-js
npm install moment
npm install @heroicons/react@v1 (built by tailwindcss peoples)
npm install tailwind-scrollbar-hide
https://github.com/hypeserver/react-date-range
https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown
https://github.com/Ibaslogic/react-multilevel-dropdown-menu
https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
npm install --save react-date-range
npm install --save react date-fns
npm in stall --save react-map-gl
npm install geolib
npm view react version
npm install react-icons --save
npm install swiper
npm i react-calendar
```
package.json will have all the dependencies.
src/index.js Update and save this file to refresh the page on localhost:3000

https://www.youtube.com/watch?v=zd_aDbwr4pY
https://www.youtube.com/watch?v=WK3-BK-RvcM
https://www.youtube.com/c/CodeAProgram/videos
https://www.youtube.com/c/AngleBrace
https://www.youtube.com/watch?v=5OEOLDBow_0&t=544s
https://www.youtube.com/watch?v=S5q4sPe_K_Q

useEffect() is listener in react.

create-react-app tutorialreact

useEffect()--->
no []: Only run once.
[]: Runs whenever component mounts.
[count]: Runs whenever count value changes.

Stripe functionality..
Checkout page(payment page).
Cloud function to process stripe payment(serverless).
Firebase for realtime database firestore.
MERN stack.

Cloud function command for api:
$ firebase init
I got this error in command "firebase init". I deleted firebase.ps1 file from error location and then ran command "firebase login" and it worked fine.
"firebase.ps1 cannot be loaded because running scripts is disabled on this system"

$ cd functions
$ npm install express
$ npm install cors
$ npm install stripe

update index.js to create rest api.

$ firebase emulators:start Spin ups express server.
firebase deploye --only functions

For actual hosting of firebase, select below option in "firebase init":
\*\* Hosting: Configure and deploy Firebase hosting sites.

$ npm run build && firebase deploy --only hosting

Hosting:
Video--> Challange day 4, 3:40:00

my secret key:
my base url:
http://localhost:5001/challange-1a4a6/us-central1/api

for test keys, type in card number and date:
424242424242

https://stackoverflow.com/questions/62773674/react-suspense-concurrent-mode-not-working
https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-web-vitals

CSS--->
bg-gradient-to-tr
bg-gradient-to-tl
from-purple-900
to-greep-700
text-slate-300
mix-blend-overlay

Gym website
https://www.youtube.com/watch?v=gpqoZQ8GNK8&t=1001s

################################################################ NEXT.JS STARTS HERE ########################################################################

For png, use react-router-dom
yarn build
pages.cloudflare.com

Install next.js with tailwind css:
npx create-next-app -e with-tailwindcss project_name
npm run dev
-- If error "next is not recognzied command"
npm install next react react-dom
Tailwind CSS IntelliSense
es7 snippet

https://links.papareact.com/pyp

vercel
mapbox integration

npx create-next-app@latest
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js--->
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./pages/**/_.{js,ts,jsx,tsx}",
"./components/\*\*/_.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
};

global.css--->
@tailwind base;
@tailwind components;
@tailwind utilities;

npm install next react react-dom

Rum app on specific port:
npm run dev -- -p 3001

https://picsum.photos/1000/3500?random=1

https://github.com/elias-carlson/Nokia3310-DAT257/tree/1e8fcd116b0f4fac3901977367f3b5c9a4575d1e

react-date-range
date-fns
https://littlefarms.com/groceries/fruit-vegetables

@layer base {
body {
@apply bg-gray-100;
}
}

https://stackoverflow.com/questions/71930685/nextjs-localstorage-and-context-of-shopping-cart
