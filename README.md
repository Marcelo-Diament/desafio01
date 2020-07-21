# Challenge #01

_JüssiLabs | VTEX IO v2_

The idea is to construct a custom app based on VTEX IO v2 good practices and within the JüssiLabs store theme.
___
  

## 'About the Repo' Notes

This repository is dedicated to this first challenge. Each branch represents a newer step on the challenge.

The branch naming is based on the following rules:

* **D01** represents the current challenge, so it will be kept all over the repo.
* **001** would represent the first step. So the second step is 002, the third is 003, and so on.
* **Getting-Started** is the task or step descriptive and concise name.

Note that the first part is separated from the second one by a hyphen, while the second on is separated from the third with an underscore character. Finally, words in the third part are separated by hyphens.

At the same time steps are represented by branches, they will also be represented by chapters in the documentation (in this `README.md` file).

In parallel, the commits will represent small steps towards completing the task. As well as part of the sub-chapters of the documentation. Commits should be classified by their type (feature, improvement, or bugfix).
___
  

## 1. Getting Started

### 1.1. Prerequisites

In order to use this repository and/or app, it is required that the following tools are already installed and correctly configured:

* An IDE of your preference (we suggest the [Visual Studio Code a.k.a. VS Code](https://code.visualstudio.com/download))
* A Git terminal (like [GitBash](https://git-scm.com/downloads))
* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable), if you're using Mac

Make sure you have the VTEX toolbelt installed too. For installing it, please, run:

``` sh
npm i -g vtex
```

or, for Mac users:

``` sh
yarn global add vtex
```

Check if it was correctly installed by typing `vtex-v` (Windows) or `vtex` (Mac).

### 1.2. Required

Also, you must have a VTEX account and an authorized user as well.

### 1.3. Cloning the Repo

Through the terminal, access the folder where the repository should be created (for example, `cd ../../c/xampp/htdocs` ) and run:

``` sh
git clone https://github.com/Marcelo-Diament/desafio01.git
```

Then you can run `cd desafio01` to access the repo folder, and `code .` to open the IDE with the repository already opened.

If there is any doubt related to git basic commands, [this link](https://www.thewebdev.com.br/git.php) may be useful (in Brazilian Portuguese).

### 1.4. Log in

Now it is necessary to log in to your VTEX account. You can do this running the following command on your the terminal of your preference:

``` sh
vtex login accountname
```

_where accountname is your VTEX account name._

A browser window will be opened, asking you to log in. Remember to choose an authorized account (it is suggested to login with Google Auth).

Then a confirmation message should be shown. You can close this window now.

You can also check your login status with the 'who am I' command:

``` sh
vtex whoami
```

### 1.5. Workspace

Use the `desafio01marcelodiament` workspace by running:

``` sh
vtex workspace use desafio01marcelodiament
```

Don't forget to check these [workspace important info](https://vtex.io/docs/concepts/workspace/) out.

### 1.6. Installs

Run the following commands:

``` sh
vtex install vtex.store
vtex install vtex.store-theme
```

### 1.7. Preview

To preview this workspace, access https://desafio01marcelodiament--{accountname}.myvtex.com, *after updating the accountname value*.

___
