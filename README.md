**Erdtree Cards**

> Ein responsives Projekt zur Verwaltung von Elden Ring Objekten bei dem man Suchen als auch nach Werten filtern kann. Der Vorteil zum Elden Ring Wiki besteht darin, dass man mit Hilfe des Filters schneller die gewünschten Items finden kann.  > Ein weiterer Vorteil ist es, dass man beliebig viele Filter gleichzeitig anwenden kann und so das passende Item schnell finden kann. Außerdem wird Docker verwendet um die Funktionalität auf verschiedener Hardware als auch Betriebssystemen  > zu  gewährleisten. 

**Anleitung zum Starten des Anwendungscontainers und des Postgres Containers sowie zum Füllen der DB**

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







