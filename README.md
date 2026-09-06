# Md Shafi Ud Doula

**Senior AI R&D Engineer** at Deloitte Tohmatsu LLC, Tokyo, Japan 🇯🇵

🌐 **[Visit Shafi’s Website →](https://shaficse.github.io/)**

---

## 🧑‍💻 About Shafi

- 🔬 8+ years of experience in **Document Intelligence, GenAI, NLP, Computer Vision & Vision-Language Models**
- 🎓 **M.Eng. in Data Science & AI** — Asian Institute of Technology, Thailand (🏆 Best Thesis Award)
- 🎓 **B.Sc. in Computer Science & Engineering** — Begum Rokeya University, Bangladesh
- 🏆 **Best Employee Award 2024** (Culture & Inclusion) — Deloitte
- 📝 Open-source contributor to **Bangla Treebank** (Universal Dependencies)

## 🔭 Current Roles

- **Senior AI R&D Engineer** @ Deloitte Tohmatsu LLC (2023–Present)
- **Guest Lecturer** @ Dept. of CSE, Begum Rokeya University
- **Researcher** @ Smart Data Lab, Asian Institute of Technology

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![HuggingFace](https://img.shields.io/badge/-HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![LangChain](https://img.shields.io/badge/-LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![GCP](https://img.shields.io/badge/-GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)

## � Areas of Expertise

`GenAI` `LLMs` `RAG` `Agentic AI` `NLP` `Computer Vision` `OCR/ICR` `Vision-Language Models` `Document AI` `Cloud (AWS/GCP)`

## 📫 Connect with Shafi

[![Website](https://img.shields.io/badge/-Website-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://shaficse.github.io/)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shafi-doula-157063150)
[![ORCID](https://img.shields.io/badge/-ORCID-A6CE39?style=for-the-badge&logo=orcid&logoColor=white)](https://orcid.org/0009-0007-6948-7768)
[![Email](https://img.shields.io/badge/-Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mdshafiud.doula@alumni.ait.asia)

---

⭐ **[View Shafi’s full portfolio →](https://shaficse.github.io/)**


## Website development

This is a static portfolio hosted at **https://shaficse.github.io/**. It needs no build step.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Edit `index.html` for portfolio content, `style.css` for layout, and `script.js` for navigation and project search. `style-elegant.css` is an unused legacy stylesheet.

- Keep project/research counts in the About section aligned with the entries shown. Research works include preprints and pending work; preserve their explicit status labels.
- The public CV is `cv.html`, with a downloadable `cv.pdf`. Update both when changing career details. To regenerate the PDF, open `cv.html` in Chrome, print to PDF using A4 with approximately 16 mm margins, and disable browser headers and footers. The original private PDF remains ignored.
- `favicon.svg`, social-sharing metadata, and ProfilePage/Person structured data provide site identity. `robots.txt` and `sitemap.xml` support crawling; they do not guarantee indexing or rankings.
- If the public domain changes, update canonical URLs, Open Graph/Twitter image URLs, structured data, the CV, `sitemap.xml`, `robots.txt`, and the home link in `404.html` together.
- All content and navigation remain available without JavaScript. Search and filters are progressively enabled. The menu supports keyboard use and Escape; motion follows the visitor’s preference.

### Deployment and version checkpoint

`v1.8-before-professional-refresh` marks commit `7d27fce`, the version before this refresh. Inspect it with `git show v1.8-before-professional-refresh:index.html` or create a separate checkout with `git worktree add ../website-before-refresh v1.8-before-professional-refresh`.

The configured remote is `shafi-collab/shafi`, while the verified public website is `shaficse.github.io`. Confirm the publishing repository and GitHub Pages source before deploying. Local changes and the checkpoint tag do not update the live site until published.

### Verification

The refresh was checked in Chrome at widths of 320, 390, 768, 1024, and 1440 pixels. Browser checks covered project categories and search, empty results, mobile menu state, Escape/focus behavior, anchor targets, local assets, reduced motion, and JavaScript-disabled navigation. Axe scans at desktop and mobile sizes reported no WCAG 2.0/2.1 A/AA violations; automated scans do not replace a complete manual accessibility review.


### English and Japanese

The header provides EN / JP links on desktop and mobile. English is `index.html`; Japanese is `jp.html` (`lang="ja"`). Both pages work without JavaScript, and the shared script preserves the current section when switching languages. The CV is currently provided in English and is labeled accordingly on the Japanese page. Published paper titles retain their original English wording.

After editing English content or Japanese translations, rebuild the Japanese page:

```sh
python3 scripts/build_japanese.py
```

`translations/ja.json` contains translations of visible text, metadata, and accessibility labels, plus the Japanese About paragraph. Update its English keys when changing source wording. Do not edit generated `jp.html` directly. Language-specific search counts and menu labels are in `script.js`.
