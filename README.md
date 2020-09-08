# SAM
This is the frontend of a training calendar the SAM Paris 12 running club. It is made for a running club, but is potentially usable for any week-based event calendar.
It is made with [Sapper](https://github.com/sveltejs/sapper). It is currently in very early stage (but it's working…).

Demo of the staging app can be found here 👉https://sam-front.etienneburdet.vercel.app/ (reload if you have an error, it means the backend was sleeping 😴)

The backend is powered by Strapi to build the API. See repo here : https://github.com/etienneburdet/SAM-cms


# Develop locally
The usual :
```
git clone https://github.com/etienneburdet/sam-front.git my-app-directory
yarn ## or npm install
yarn dev ## or npm run dev
```
Open up [localhost:3000](http://localhost:3000) and start clicking around.

A few less usuals things : 
* Every store is in its own file, wich export only one store (these are the state variables available to all components). It's a convention I like 😅.
* The `src/theme.scss` is available globally, through the rollup preprocess config :
```
scss: {
  includePaths: ['src'],
  data: '@import "theme.scss";'
}
```

Don't forget to switch the source of data if you develop (just cmd+shift+f *fetch*), depending if you want the staging CMS or a local one you are running (not automated yet).

# Deploy
This app is optimized for static host with a Node.js build and SSR such as Vercel, Heroku, Begin etc. For exemple Vercel will automatically detect a Sapper app. Just running : 
```
vercel
```
will work. Other host are pretty easy as well (I don't any Vercel shares 😛)

# Issues, PRs, forks…
Please do!
If you fork the project, I would love to know what you did!

# TODO
An awful lot!!!
