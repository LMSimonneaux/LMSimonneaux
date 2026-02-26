import os
import requests
from markdownify import markdownify as md

# Liste de tes pages Muse (ajoute les autres ici)
urls = {
    "README.md": "https://muse.io/student-portfolio-abd240",
    "engineering.md": "https://muse.io/student-portfolio-abd240/engineering-course",
    "carrer.md": "https://muse.io/student-portfolio-abd240/career-development"
}

def clean_portfolio(url, filename):
    print(f"Extraction de {url}...")
    response = requests.get(url)
    # On transforme le HTML en Markdown
    content = md(response.text, heading_style="ATX")
    
    # Petit nettoyage des espaces en trop
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"✅ Terminé : {filename}")

for file, url in urls.items():
    clean_portfolio(url, file)