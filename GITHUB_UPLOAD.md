# Upload SecureLab to GitHub

## 1. Extract and open

Extract the ZIP, then open the `SecureLab-GitHub-Ready` folder in VS Code using **File → Open Folder**.

## 2. Test locally

Open **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and check Home, SQL Lab, XSS Lab, and Quiz.

Stop the dev server with `Ctrl + C`.

## 3. Create the local Git repository

```bash
git init
git add .
git status
git commit -m "Initial commit - SecureLab"
git branch -M main
```

Before committing, confirm `.env.local`, `node_modules`, and `.next` are not listed by `git status`.

## 4. Create the GitHub repository

On GitHub, create a new repository named `SecureLab`. Do not initialize it with another README or `.gitignore` because this project already includes them.

## 5. Connect and push

GitHub will show your repository URL. Use it in:

```bash
git remote add origin https://github.com/YOUR_USERNAME/SecureLab.git
git push -u origin main
```

After the first push, future updates are:

```bash
git add .
git commit -m "Describe your changes"
git push
```
