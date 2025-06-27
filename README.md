# Vidya Mani Personal Portfolio Website

This is the source code for [vidyasrimani.github.io](https://vidyasrimani.github.io), a personal portfolio and blog built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Features

- **Modern, clean design** with PaperMod
- **Homepage** with custom intro and social links
- **Writings**: Local articles and Medium posts (auto-fetched)
- **Projects**: Local project highlights and dynamic GitHub repo integration
- **About**: Professional background and contact info
- **Responsive** and mobile-friendly
- **Only three social icons**: LinkedIn, Medium, GitHub
- **Automated workflows** for content and deployment

## Social Links

- [LinkedIn](https://www.linkedin.com/in/vidya-mani/)
- [Medium](https://medium.com/@vidyamani)
- [GitHub](https://github.com/vidyasrimani)

## Automated Workflows

### 1. Medium Integration
- GitHub Actions fetches latest Medium posts and creates markdown files in `content/writings/medium/`.
- See `.github/workflows/update-medium-posts.yml` and `scripts/fetch-medium-posts.js`.

### 2. GitHub Projects Integration
- Projects page dynamically fetches and displays public GitHub repositories using the GitHub API (client-side JavaScript).

### 3. Build & Deploy
- (Recommended) Use [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) to build and deploy the site to GitHub Pages.

## Local Development

```sh
# Install dependencies for Medium fetch script
npm install

# Start Hugo server
hugo server --bind 0.0.0.0 --port 1313
```

## Directory Structure

- `content/` — Markdown content (about, writings, projects)
- `layouts/` — Custom Hugo templates and partials
- `themes/PaperMod/` — Theme files
- `scripts/` — Automation scripts (e.g., Medium fetch)
- `.github/workflows/` — GitHub Actions workflows

## Customization
- Social icons are limited to LinkedIn, Medium, and GitHub (see `config.yml`)
- Share buttons are limited to LinkedIn or can be disabled
- All other social media icons and share options are removed

## License

MIT
