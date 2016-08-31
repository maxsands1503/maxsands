# maxsands1503.com
## My Portfolio Site
### Objective:
The objective of this walkthrough is to teach how to create a simple portfolio website using AngularJS, jQuery,
HTML, CSS, Bootstrap and FTPing to a hosted domain. The end product will be a single page app that displays different bits of information depending on the page.

### Website structure
There will be four pages. The first is going to be a pretty landing page, with an image slider in background, the links to the About section. The About section will give a breakdown of my goals, my past and what development environments I enjoy.  The next section will be a gallery of my projects. The final page will be a resume page, with a button to download my resume.

## Disclaimer
This tutorial will go over the use of [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) (File Transfer Protocol), if you do not already own a domain or have a hosting account, that is OK, you can deploy your project to Firebase.

##Step 1
Start a github repository. We will be committing frequently during this project. Clone the repository to your machine.  

##Step 2
Building out our file structure, we will begin with an 'index.html' file in our root. Next we will create our subdirectories. The subdirectories are 'components', 'controllers', 'css', 'js' and 'templates'.  
```
touch index.html && mkdir components controllers css js templates

```
We may not end up using all of those, but we are doing an organic walkthrough, wherever creativity takes us, that is where we are headed.

In 'templates' create 'about.html', 'gallery.html' and 'resume.html'.  
```
cd templates && touch about.html gallery.html resume.html
```

In 'js' we will add an 'app.js' file.   
```
cd ../js && touch app.js
```
In 'css' we will add a 'master.css' file, we may add more css files later, but for now we will start with one.   
```
cd ../css && touch master.css
```
In our 'controllers' directory we will add a controller file for each page (excluding our index.html). We will create 'about.js', 'gallery.js' and 'resume.js'.  
```
cd ../controllers && touch about.js gallery.js resume.js

```
The components directory will have two files, 'directive.js' and 'service.js', we may not end up using them, but you know, better to have and not need...  
```
cd ../components && touch directive.js service.js
```
![terminal](terminal-ss.jpg "So much done, so far to go!")

#COMMIT YOUR STUFF!
Seriously, get into the habit of committing your work often. If you are eventually deploying to Firebase or Heroku, do that now too.

## Step 3
Open the whole project in your text editor of choice, I use Atom. In terminal I type:  
```
atom .  

```
in my root directory, BAM, it is open. Open your index.html file. We had originally said that this was going to be a pretty landing page with an image slider, so we are going to need to add a few things.  
1) An image directory  
2) Images  
3) A 'scripts.js' file inside of our 'js' directory.   
```
mkdir images && cd js && touch scripts.js
```
Cool, now that is completed lets open up our 'index.html' file. We need to start the set up of all of our scripts. I am going to give you a nice list of what you will need, I will leave it up to you to find a CDN for each.   
- Bootstrap  
- master.css
- AngularJS  
- Angular-ui-router  
- jQuery  
- app.js  
- scripts.js
- Your controllers
- Your directives
- Your service  

Now, as I am looking through this ridiculously long list, I start to think, isn't something missing? Yes, we need a home controller and template. So we are going to add that.  

```
cd controllers && touch home.js && cd ../templates && touch home.html
```
Ok so now that we have fixed that, oversight, and we have all the links and script tags we need, we are going to add some link tags we want, AKA some fonts. I use google fonts, specifically Roboto and Roboto Slab, I am making this site match my portfolio, so you don't have to do that. Grab the links and add them to the head of your 'index'. Then in 'master.css' we will add our font-family declarations.

There are two really important things we have to add to our 'index.html'. Just above the closing head tag, we need to add `<base href="/">`, this set our base url for ui-router. At the bottom of the body, we need to add `<div ui-view></div>` this is where our templates will render.   

End product of index.html:  
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/css/master.css" media="screen" charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/">
  </head>
  <body>

     <div ui-view></div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
   <script type="text/javascript" src="/js/app.js"></script>
   <script src="controllers/gallery.js" charset="utf-8"></script>
   <script src="controllers/home.js" charset="utf-8"></script>
   <script src="controllers/about.js" charset="utf-8"></script>
   <script src="controllers/resume.js" charset="utf-8"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   <script type="text/javascript" src="/js/script.js"></script>
  </body>
</html>
```   
End product of 'master.css':  
```
h1,h2,h3,h4,h5,h6{
  font-family: 'Roboto Slab', serif;
}
p{
  font-family: 'Roboto', sans-serif;
}
```
#COMMIT!!!!!
And you know deploy, or whatever.
