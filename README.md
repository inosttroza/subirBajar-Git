# Pruebas
Repositorio es solo para pruebas

<h1>Subir a git</h1>
1-git init(en ruta del proyecto)<br>
2-git add .<br>
3-git commit -m "Primer commit"<br>
4-git remote add origin https://github.com/inosttroza/Test.git<br>
5-git push -u origin master<br>

<h1>Bajar de git y luego subir cambios</h1>
1-git init(en ruta del proyecto)<br>
2-git clone https://github.com/inosttroza/Test.git<br>
3-git config --global user.name "inosttroza"<br>
4-git config --global user.email inosttroza@gmail.com<br>
5-git branch rama1<br>
  git branch -d rama1 (elimina rama)<br>
6-git checkout rama1<br>
7-git add . (luego de modificar y agregar)<br>
8-git commit -m "cambios varios"<br>
9-git checkout master<br>
10-git merge rama1<br>
11-git commit -m "guardo los cambios copiados desde la rama"<br>
12-git push -u origin master<br>

