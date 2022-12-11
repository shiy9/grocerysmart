# Grocery Smart

## Updates:
* main branch, 12/11: added `data` folder to store all of our images, store, and inventory information to act as a backend.
  * `cart.json` is used to store what items are in the cart at the moment. It is a JSON array.
  * `inventory.json` is used to store grocery store inventory information. Every store has an `items` key which is the
store's inventory.
  * See both files for details, they are pretty straight forward. 
  * Notes:
    * The `pic-dir` is the item picture file path. The pictures will be stored in `data/images`. The reason there is `../../` in
front is because we would be using these file paths within the components in `src/components`.
    * Also, the `distance` key in `inventory.json` is just for display since we are just developing static pages at the moment. 

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


## How to start and run the project

If you have never installed node.js on your machine, install it [here](https://nodejs.org/en/download/). \
You will need it to install packages and run the following `npm` commands.

### Run `npm install` in the terminal (system and IDE terminals would both work)

Installs all the needed packages in the dependencies.

### Run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the browser console.

### To quit the application, press Ctrl + C in the terminal

