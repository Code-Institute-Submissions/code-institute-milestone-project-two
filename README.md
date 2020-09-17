
# Interactive Frontend Development - Code Institute Milestone Project Two - Matt Inglis

## *Explore Bielefeld - Tourism Information Site and Map Application.*

## Tourism-based Website built using HTML, CSS & JavaScript, with the aim of providing travel information to a user in a stylish and clean UI, centered around a JavaScript oriented, interactive experience.

## Deployed link : https://mattingliscoding.github.io/code-institute-milestone-project-two/


# Overview 

The aim of this site is to create an informative platform for prospective travellers to the North-West German city of Bielefeld, which I lived in for a time. The site provides an insight into the recommended activities, restaurants and some background information on the town.

The Map page uses the Google Maps and Places APIs to initialise the map (centered on Bielefeld) and then markers (created using TripAdvisor data in JSON format) populate the map. The intention being that travellers can see by category, the best place to visit in each of the three categories (restaurants, hotels and activities). The buttons underneath the map to toggle the markers, also utilise the Google Places placeID of each marker to show handy cards on the page, which show useful information such as contact details and website links, all dynamically updated using JavaScript.

In addition, using Email.js, the final page on the site (sign-up.html) has a form to allow the user to submit their name, email and a request to sign up for a digital newsletter. Email.js sends an email to the administrator's email with the user details, and an Auto-Reply to the user thanking them for their interest (screenshots/video attached). 

# UI/UX

Here is a link to the wireframe I created using Balsamiq for this site: 
* https://pdfhost.io/v/Tsqwy31tg_MattInglisMS2WIREFRAMEpdf.pdf
*Also included in docs folder of repository, in case of issues with pdfhost.*

Firstly, I perused several other city tourism websites to gain an insight into what kind of things a user expects to see and the things that need to be immediately available when they first load the site. I found a lot of inspiration on Zürich's official city site, finding their UI and design choices, in typography, layout and colour scheme to be clean and the website overall is an extremely smooth experience, which I have tried to also achieve. Big, bold text for links and article headers, prevent any information-fatigue and keep the website looking dynamic and intuitive.

Speaking in UX terms, I found that other tourism sites (for smaller, more pedestrian cities) were plagued with overly text-heavy pages and old-fashioned UI choices that don't scale well to modern devices and have plenty of drab elements bogged down with text. For this site, I purposefully aimed to make the site feel minimal, yet still dynamic and with bombastic, high-quality images, elements and CTA's on the pages to provide a visually pleasing experience. At no point does the user have to work too hard to progress through the site, or to retreat back to other pages. Usage of Bootstrap 4's card and shadow functionality allowed elements to jump out at the user.

## Some user stories that would highlight project ease of use are: 

* As a user when I arrive at the landing page, I would like to at a glance gain insight into the global subject matter (Bielefeld).
* As a user, I want to be able to take a look at local businesses and their location, in order to gather information for my trip there, and also to be able to head directly to their websites or contact them, without needing to go back to Google.
* As a user, I would like to know the current weather status of the city, a big deciding factor in potential holidays
* As a user I would like to easily learn more about the local culture and history.
* As a user I want to see images of the place I am interested in, in a high-quality format. 
* As a user, I would a simple process to enable me to receive further email updates from site administrators.

# Features

* Navigation bar with page links (ALL PAGES) - This header navigation bar gives the user a clear point of control, and makes it easy to navigate through the website. Using a collapse function creates the recognisable "hamburger" icon, denoting how to display the menu when viewing on smaller screen sizes. 
* Footer (ALL PAGES) - A simplistic footer that allows a user to swiftly be taken back up to the main navigation bar (point of control), and minimal icons (FontAwesome) to link to social media. 
* Text areas (ALL PAGES) - Bootstrap 4 was pivotal in the design of the site, which makes full use of their intuitive row & column system to format areas, and the ".shadow" class helps to give the user a pleasant sense of depth to the UI, as a white-oriented design can often look flat and two-dimensional.
* Home Page - Small version of localised Google Map API Integration - Adds interactivity and a recognition effect to this element of the page. As soon as a user lands here, they can use the mini-map or click the nearby text link element to be taken the Map page.
* Home Page - ClimaCell Weather Widget - Instant gratification in the form of aesthetically pleasing and easy to understand weather information. As previously mentioned, in terms of tourism and travel, there is rarely a more pivotal factor than the weather.
* Home Page - JavaScript Accordion Feature - A simple, but tactile way to display information split into categories (in this case, the dates of events in the city). Code credited to W3Schools.com for their great learning materials for JavaScript.
* Map Page - Google Maps & Places API - This map element has the purpose of allowing the user to select from three categories of locations in Bielefeld. Restaurants (labelled Food), Hotels and Things To Do. With each button press, the JavaScript code populates the map with custom markers, providing info about each location. The geolocation data for these markers is stored in local JSON files. This allows the user to check out where in the city the best of each category can be found. When the button is pressed, the Google Places API takes placeID values also stored in local JSON, to perform a search of the API. Returning with a set of chosen details in the JavaScript code, it uses these to dynamically create and fill the card elements in the HTML area underneath the map, to provide the user with another point of information about each location. The cards contain a link to location websites, contact information and the Google Places rating out of 5, all fetched and displayed dynamically by the JavaScript code. 
* See & Do Page & linked sub-pages - The aim of this area of the website is to firstly give the user real sense of depth, a pertinent, engaging presentation of information, and a feel of quality as if the site was commissioned and administrated by the city. Secondly, it was a chance for me to experiment and develop my skills in UI and fluency in Frontend design, using primarily Bootstrap. 
* Sign Up Page - Using the Email.js service to automate a contact exchange via simple email entry. The user submits their name, email address and a short message/request to be added to a (hypothetical) newsletter. The site administrator receives the message email with the relevant user informative, and the user receives an automated reply thanking them for their interest and confirming their subscription to the newsletter.
* Hover.css (ALL PAGES) - A third party hover "shrinking" animation applied to Nav items and cards. This provides the site with an interactive, responsive feel.

# Technologies Used

In this project I used the following technologies to achieve my end result:
* Languages - HTML5, CSS3, JSON and JavaScript.
* Frameworks - [Bootstrap 4](https://getbootstrap.com/)
* Other - [Email.js](https://www.emailjs.com/), [Hovr.css](https://ianlunn.github.io/Hover/), [ClimaCell](https://www.climacell.co/), [jQuery](https://jquery.com/), [Google Maps API](https://developers.google.com/maps/documentation) & [Places API](https://developers.google.com/places/web-service/overview), [Google Fonts](https://fonts.google.com/).


# Testing 

### Browser Support & General Functionality

The site was tested and working in several browsers; Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Edge (Edge tested in Apple Safari using Developers Menu, User Agent as an emulator). 

All site links, internal and external have been manually checked and tested thoroughly and no errors were found as a result of bad pathing.

### Responsive Design Testing

The site has been extensively tested on a range of screen sizes, despite Bootstrap's native catering to responsive web development, much of mine was heavily customised and required stringent . This was achieved using various physical smartphones and different computer screen sizes, and also manually in Chrome DevTools Device Toolbar. When viewed on mobile devices, some elements disappear, to keep the UI clean and uncluttered. Text font sizes reduce smoothly to scale down with the screen size, and the pages are transitioned into a single column, again to reduce clutter. All banner images have their height reduced so as to also scale down in an efficient way.

### Email.js Testing

Email.js provides a fantastic platform for the creation of templates, and a handy JSFiddle window to preview, and tweak the code for the email form. I used this built-in feature extensively to test the service and make sure I was using the correct selectors. 

 
Click below to see a short screen-recorded video I made, to show how the two separate recipients receive their relevant responses:

[![](http://img.youtube.com/vi/TFkkqceeBgY/0.jpg)](http://www.youtube.com/watch?v=TFkkqceeBgY "Email.js tested and working screen recording.")

To give context to the video, you watch as I submit a request for the newsletter using my personal email (matt_inglis@hotmail.co.uk). Going to my email application, you can see that the reply first came through to my site administrator email (mattingliscoding@gmail.com), which containers the details of the user to be collected. Then lastly, I check the original (personal) inbox to see the Auto-Reply created by Email.js to confirm the user request.

### - Map Testing & Known Error/Issue with Google Places API.

Google Map Element - All internal controls tested manually and working (street view, zoom toggles, view options and terrain changing)

The testing of the JavaScript code was predominantly done manually and in some cases using Chrome DevTools debugger, to problem solve. The  manual testing for the Map buttons process would involve the following:
* Click on a category button.
* Ensure markers initially drop down onto the map.
* Check markers have all populated, with correct information in the infoWindow objects, and when one is selected with another open, the previous closes. 
* Once markers have been populated and displayed, check that all ten pertinent information cards have been dynamically created in the HTML area under the map. 
* Check all data/links drawn from Google Places API such as website links, is displaying correctly. 

### *Google Places API Known Error* 

Upon successfully sending the getDetails request to the Google Places API (clicking the buttons under the map), it was discovered that there is a limit to the speed at which calls can be made in short periods of time. 

This results in an issue whereby if a user was to click the "FOOD" button to display the relevant cards, and then in quick succession, clicked the "HOTELS" button to display that category, the API would not have time to return the data and therefore the HTML would not be dynamically updated. 

Google Places API has a built-in limitation to the frequency of calls and as a result, returns an "OVER_QUERY_LIMIT" message when the objects do not get loaded. 

My solution was to implement a setTimout(); function to delay the dynamic creation of the HTML card elements by a few seconds in order to allow time for all the data to be retrieved without interruption. This mechanically allows the cards to display correctly but regrettably slows down the user experience.

To address this in the future I would attempt to find a way to restructure my Places API search so that all data was stored in a variable instead of each category being called individually by each button's function. 


## Deployment

To deploy the project for public viewing, I used the feature in GitHub called GitHub Pages. 

GitHub allowed me to simply go into the repository settings and choose which branch (master) of the repository to deploy to Pages, which generates a deployed, shareable URL for my project.

In order to clone the application to run it locally themselves,
they could follow these steps found in the GitHub documentation here: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository


# Credits

### Content 

Much of the written content comes from the official tourism site for the city of Bielefeld: https://www.bielefeld.de/en/ti1/

Credit also to 
* https://www.tripadvisor.co.uk/Tourism-g187368-Bielefeld_North_Rhine_Westphalia-Vacations.html
* https://www.germany.travel/en-mobile/towns-cities-culture/shopping/bielefeld.html
* https://www.citymetric.com/fabric/city-doesn-t-exist-and-when-angela-merkel-made-joke-story-bielefeld-2692
* TripAdvisor.com

### Media 

All photographic media is taken from:

* Unsplash.com
* Shutterstock.com
* TripAdvisor.com
* Google Image Search 

### Inspiration
* Zuerich.com/en
* https://www.visitdublin.com/
* W3Schools.com 
* mdbootstrap.com
* https://material.io