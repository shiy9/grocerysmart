# Grocery Smart

## Git Basics
In your terminal, `cd` into a desired folder and do `git clone https://github.com/shiy9/grocerysmart.git` to copy the entire project.

Note: if you have never set up Git credentials before:
- You will need a [GitHub Token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) as your password 
to modify the repository (using password became deprecated in August of last year).
- If credentials are not stored on your machine, you will be prompted to enter the credentials every time there is a `push` (which is rather inconvenient). Instead:
  - You can [store the credentials locally](https://git-scm.com/docs/git-credential-store) (also read [this post](https://stackoverflow.com/questions/28104581/how-secure-is-storing-password-with-git/28104587#28104587). In general, be sure not to use `git config credential.helper store` as the token will be in plain text which is not secure at all)
  - Or use some sort of [caching](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).
- OR go straight to the SSH method (which may be a headache for Windows users. I never figured out how to use PuTTY or any SSH terminal on Windows before I switched to macOS...)
  - Anyways, the instructions are [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

(Some project development git operations may be added here in the future. I can also go over them in a future team meeting.)

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

