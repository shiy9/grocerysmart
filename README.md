# Grocery Smart
* 2022 Fall COMS 4170 UI Design 
* Team 20: Aarushi Jain (aj3087), Tongyu Liu (tl3181), Yuxuan (Bill) Shi (ys3595), Jing Wu (jw4288)
* Mentor: Sofia Bianchi

**Note: this README file was used throughout the project development stage and was written by Bill--hence some first-person occurrences**

**The README may look more presentable on GitHub rather than on a local IDE. If you are interested in taking a closer look at our project, feel free to reach out to me (Bill) on slack any time after the project's due date,
and I can add you as a collaborator!**

## How to start and run the project

If you have never installed Node.js on your machine, install it [here](https://nodejs.org/en/download/). \
You will need it to install packages and run the following `npm` commands.

* ### Open the project in your preferred IDE (the team used Webstorm and VSCode for the project)
* ### Run `npm install` in the terminal (system and IDE terminals would both work)
  * This command installs all the needed packages in the dependencies.
* ### Run `npm start`
  * This will run the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  * **If, for whatever reason, any of the above commands failed to work, feel free to contact Bill on Slack at any time!**
* ### To quit the application, press Ctrl + C in the terminal
* ### As explained in the report, since we are inputting data manually, there were only so many items we could put in as the dummy data within the time frame. 
* ### For optimal demonstration, search "apple" or "chicken" or click on any of the main category buttons for a rather populated page.

## Folder Structure
```
|--- public
|   |--- index.html (Not super important in the case of our single-page application)
|   |--- (misc. items from create-react-app)
|--- src
|   |--- components (folder)
|   |   |--- css (folder)
|   |   |   |--- Two CSS files for the two static pages in HTML/CSS (detailed items and shopping cart page)
|   |   |
|   |   |--- Every .js file in the components folder is a single page/component
|   |
|   |--- data (folder) (this is our "backend")
|   |   |--- images (folder)
|   |   |   |--- Our image "database"
|   |   |
|   |   |--- schemas (folder)
|   |   |   |--- Stores all the schemas for our json files for error checking
|   |   |
|   |   |--- inventory.json (the file storing all the store and inventory information, more information below)
|   |   |--- priceCompare.json (the file storing display information for the static price compare page)
|   |   |--- selected-stores.json (the file containig which stores are selected by the user--just a JSON array)
|   |   |--- cart.json (deprecated)
|   |   |--- cart_compare.json (deprecated)
|   |
|   |--- App.js (where the main component lives and all the React Routing happens)
|   |--- (misc. items from create-react-app)
```

## List of URLs
Putting the list here in case any of the button mal-functions (all the buttons that are supposed to work should work :)
You can also see the routes in `src/App.js`
* Welcome page: http://localhost:3000
* Store Selection Page: http://localhost:3000/storeselect
* Home/Search-bar Page: http://localhost:3000/home
* Search Result Page: http://localhost:3000/search/<search-query> (e.g. /search/chicken)
* Main Category Page: http://localhost:3000/maincat/<category-name> (see Main and sub-categories of the items in inventory.json section for exact values)
* Sub Category Page: http://localhost:3000/subcat/<category-name> (see the same section as above for exact values)
* Compare Price Page (static): http://localhost:3000/compare
* Detailed Item's Page (static and work-in-progress): http://localhost:3000/staticitem
* Shopping Cart's Page (static and work-in-progress): http://localhost:3000/staticcart

## File and Page Mappings
(Again, all `.js` files can be found under `src/components`)
* `header.js` -> Header bar component that is present on all pages
* `welcome.js` -> Welcome Page
* `storeselection.js` -> Store Selection Page
* `home.js` -> Home Page
* `searchresults.js` -> Search Result Page
* `maincategory.js` -> Main Category Page
* `subcategory.js` -> Sub Category Page
* `compare.js` -> (semi-static) Price Comparison Page
* `static-cart.js` -> (static) Shopping Cart Page
* `static-item.js` -> (static) Detailed Item Page



---

## Note: the content below was the "old" development notes. It was kept here for the record and some information may be useful for a better understanding of our project!

---

## How the data is stored:
* Content of the **cart** is stored in `sessionStorage` with a key of `"cart"`, it is an array of JavaScript objects.
* The list of selected stores is stored in `sessionStorage` with a key of `"sel-stores"`, it is an array of store ids (integers).
* All the store and items information are stored in `src/data/inventory.json`. The schema for this JSON file is in `src/data/schemas/inventory-schema.json`

For anything in `sessionStorage`, you can store and retrieve the items with the following operations:
  * Here is an example to store and retrieve cart content:
```javascript
// JSON.parse because sessionStorage can only store strings, 
// and we need to stringify the original data
let cartData = JSON.parse(sessionStorage.getItem("cart"));
// Do some manipulation on cartData here
sessionStorage.setItem("cart", JSON.stringify(cartData));

// If you are not sure if the key is present in sessionStorage,
// and want to start with an empty array if it is not, 
// then use this handy ternary operation:
let cartData = sessionStorage.getItem("cart") === null
                ? []
                : JSON.parse(sessionStorage.getItem("cart"));
```
### Example structure of `cart` in `sessionStorage`
Note that the only different between this and an item in `inventory.json` is there is an extra `quantity` attribute.

```JSON
[
  {
    "item-id": 1,
    "item-name": "Bananas (Dozen)",
    "unit-price": 3.99,
    "unit": "unit",
    "tot-price": 3.99,
    "num-sold": 800,
    "pic-dir": "banana-1.jpg",
    "storeid": 0,
    "sub-category": "fruit",
    "main-category": "produce",
    "type": "g",
    "quantity": 1,
  },
  ...
]
```

### Example structure of selected stores (`sel-stores`) in `sessionStorage`
Just a list of integers representing store ids
```JSON
[0, 3, 2]
```

### Main and sub-categories of the items in `inventory.json`
* Main categories: [
  "Produce",
  "Meat and Seafood",
  "Dairy and Eggs",
  "Beverage",
  "Household",
  "Personal Care"
  ]
  * **Exact values used in the `json` files and in the URL: ["produce",
    "meat-seafood",
    "dairy-eggs",
    "beverage",
    "household",
    "personal-care"]**
* Sub categories:
  * Produce: ["Fruit", "Vegetable"]
  * Meat and Seafood: ["Beef", "Chicken", "Mutton", "Pork", "Fish", "Seafood"]
  * Dairy and Eggs: ["Milk", "Yogurt", "Eggs"]
  * Beverage: ["Water", "Juice", "Alcohol"]
  * Household: ["Cleaning", "Laundry", "Bed & Bath"]
  * Personal Care: ["Baby Products", "Makeup", "Skin Care"]
  * **Exact values used in the `json` files and in the URL: ["fruit",
    "vegetable",
    "beef",
    "chicken",
    "mutton",
    "pork",
    "seafood",
    "milk",
    "yogurt",
    "eggs",
    "water",
    "juice",
    "alcohol",
    "cleaning",
    "laundry",
    "bed-bath",
    "baby-products",
    "makeup",
    "skin-care"]**

## Updates:
* main branch, 12/17:
  * Merged Welcome and Home page to `main`
* main branch, 12/16:
  * Added `src/data/schemas` containing JSON schema files to enforce the JSON data structure. You can apply the schema in your preferred IDE
, and when adding data to the JSON files, you should see a warning when some of the fields do not meet the requirements.
  * Note that in `inventory-schema.json` the sub-category `enum` may not be complete since the database is not very populated at the moment. More subcategories may be added in the future
  * `inventory.json` is now simply a JSON array storing store objects, which will make traversal easier in JavaScript. (We can use `forEach` instead of a for loop now)
* main branch, 12/11: added `src/data` folder to store all of our images, store, and inventory information to act as a backend.
  * `cart.json` is used to store what items are in the cart at the moment. It is a JSON array.
  * `inventory.json` is used to store grocery store inventory information. ~~The outer keys are store ids. Every store has an `items` array which is the
store's inventory.~~ (See above)
  * `selected-stores.json` is used to store the list of store ids that have been selected by the user. It is a JSON array.
  * See all files for details, they are pretty straight forward. 
  * Notes:
    * The `pic-dir` is the item picture file name (**NOT THE ENTIRE PATH**). The pictures will be stored in `data/images`. The reason we are not storing
the entire path is because we need to use `require()` for the image `src` with Webpack. Webpack runs in build-time, and it cannot only accept a variable as an input.
So we can use a little hack like `require("../data/images" + <variable>")` to get past this.
    * The `distance` key in `inventory.json` is just for display since we are just developing static pages at the moment. 
    * Each item also has a `storeid`--the store that has this item. This is kinda redundant, but I found out that I needed this info stored in
the `items` array after I was almost done coding the search result page and would have to rewrite the JSON processing part of the program
if the structure had to change. I will settle on this for now, but we can definitely change it if we have time.

## Git operations for development
* **Always** work on a separate branch first. Make sure everything works, and then merge to main. (Ideally we would do this step during group meetings in case there are merge conflicts.)
  * To create a new branch and switch to it, use `git checkout -b <branch-name>`
    * The new branch will not immediately appear on the GitHub repository. You can attempt to do a `push` and the terminal 
  will tell you what to do in order to establish a connection to `origin/<branch-name>`.
* To pull changes from `main` to your development branch, follow the commands below:
```
git checkout main
git pull
git checkout <your-branch>
git merge main
git push
```
* When adding-committing-pushing changes to development branch or the main branch, it is always a good idea to do a `git status` first to check which files
may be added/committed before doing `git add *`. If certain hidden files are generated from certain packages and does not need to be pushed to the repository, add
them to `.gitignore` following the [Glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)).
  * The current `.gitignore` accounts for a lot of the unnecessary file types already, but you can always add more.

## Git Basics
In your terminal, `cd` into a desired folder and do `git clone https://github.com/shiy9/grocerysmart.git` to copy the entire project.

Note: if you have never set up Git credentials before:
- You will need a [GitHub Token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) as your password 
to modify the repository (using password became deprecated in August of last year).
- If credentials are not stored on your machine, you will be prompted to enter the credentials every time there is a `push` (which is rather inconvenient). Instead:
  - You can [store the credentials locally](https://git-scm.com/docs/git-credential-store) (also read [this post](https://stackoverflow.com/questions/28104581/how-secure-is-storing-password-with-git/28104587#28104587). In general, be sure **NOT** to use `git config credential.helper store` as the token will be in plain text which is not secure at all)
  - Or use some sort of [caching](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).
- OR go straight to the SSH method (which may be a headache for Windows users. I never figured out how to use PuTTY or any SSH terminal on Windows before I switched to macOS...)
  - Anyways, the instructions are [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)




