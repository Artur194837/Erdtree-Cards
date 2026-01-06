# Erdtree Cards 🌳⚔️

Ein hochperformantes, responsives Web-Projekt zur Verwaltung und Analyse von **Elden Ring Objekten**. 

Dieses Tool wurde entwickelt, um die Lücke zwischen reiner Information und praktischer Auffindbarkeit zu schließen. Während das offizielle Wiki eine großartige Wissensdatenbank ist, ermöglicht **Erdtree Cards** eine gezielte Suche durch komplexe Datenbestände.

## 🚀 Warum Erdtree Cards?

* **Multifunktionales Filtern**: Wende beliebig viele Filter gleichzeitig an (z. B. *Stärke-Skalierung S* + *Magieschaden*), um in Sekunden das perfekte Item für deinen Build zu finden.
* **Speed-Vorteil**: Die optimierte Benutzeroberfläche erlaubt es, gewünschte Objekte deutlich schneller zu finden als durch das manuelle Durchsuchen statischer Wiki-Tabellen.
* **Responsive Design**: Das Layout passt sich nahtlos an – ideal für die Nutzung auf einem Zweitmonitor oder dem Smartphone während des Spielens.

## 🛠️ Technische Highlights

* **Docker-Integration**: Dank der Containerisierung mit Docker ist das Projekt plattformunabhängig lauffähig. Die Funktionalität ist auf Windows, macOS und Linux identisch.
* **Next.js & Tailwind CSS**: Ein moderner Tech-Stack sorgt für blitzschnelle Ladezeiten und ein flüssiges Nutzererlebnis.
* **PostgreSQL**: Eine robuste Datenbank im Hintergrund verwaltet die umfangreichen Item-Daten effizient.

## Anleitung zum Starten des Anwendungscontainers und des Postgres Containers sowie zum Füllen der DB

> 1.  Kommandozeile öffnen und in das Hauptverzeichnis von Erdtree Cards navigieren
> 2. "docker build -t erdtree-cards-web ." Ausführen, um das Image der Anwendung zu erstellen
> 3. Per "docker compose up –-watch" Container für die Postgres DB und die Anwendung erstellen und diese starten
> 4. Neue Kommandozeile öffnen, wieder in das Hauptverzeichnis navigieren und "docker exec -i erdtree-cards-db pg_restore -U postgres -d cards < cards.dump" ausführen, um die Datenbank zu befüllen
> 5. Im Browser die URL localhost:3000/weapons besuchen

<img width="1690" height="1289" alt="image" src="https://github.com/user-attachments/assets/fe22af6c-1680-4788-8ee6-6989e4f865ca" />
<img width="1733" height="1294" alt="image" src="https://github.com/user-attachments/assets/2e23a596-4621-4225-bd4e-a7e4df19a44a" />
<img width="1378" height="1288" alt="image" src="https://github.com/user-attachments/assets/1bd88e8d-7902-40aa-8071-fed188479bb4" />
<img width="472" height="1259" alt="image" src="https://github.com/user-attachments/assets/ca754219-1c89-4c8a-873f-cf1d47d7596d" />
<img width="1690" height="1256" alt="image" src="https://github.com/user-attachments/assets/b11a181b-a039-4f17-80a6-5d5b38405b34" />
<img width="1688" height="1261" alt="image" src="https://github.com/user-attachments/assets/edab9697-91d7-4208-b388-31c9530e524f" />
<img width="1691" height="1266" alt="image" src="https://github.com/user-attachments/assets/67dcc7c7-983f-437c-827b-aebcd2eda98f" />







