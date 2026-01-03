##Erdtree Cards

Ein responsives Projekt zur Verwaltung von Elden Ring Objekten bei dem man Suchen als auch nach Werten filtern kann. Der Vorteil zum Elden Ring Wiki besteht darin, dass man mit Hilfe des Filters schneller die gewünschten Items finden kann. Ein weiterer Vorteil ist es, dass man beliebig viele Filter gleichzeitig anwenden kann und so das passende Item schnell finden kann. Außerdem wird Docker verwendet um die Funktionalität auf verschiedener Hardware als auch Betriebssystemen zu gewährleisten. 

##Anleitung zum Starten des Anwendungscontainers und des Postgres Containers

1.  Kommandozeile öffnen und in das Hauptverzeichnis von Erdtree Cards navigieren
2. docker build -t erdtree-cards-web . Ausführen, um das Image der Anwendung zu erstellen
3. Per docker compose up Container für die Postgres DB und die Anwendung erstellen und diese starten
4. Neue Kommandozeile öffnen, wieder in das Hauptverzeichnis navigieren und docker exec -i erdtree-cards-db pg_restore -U postgres -d cards < cards.dump ausführen, um die Datenbank zu befüllen
5. Im Browser die URL localhost:3000/weapons besuchen

<img width="1690" height="1289" alt="image" src="https://github.com/user-attachments/assets/fe22af6c-1680-4788-8ee6-6989e4f865ca" />

