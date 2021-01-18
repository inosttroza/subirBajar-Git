# Comentarios
Repositorio de ejemplo para subir y bajar codigos de Git

<h1>Subir a git</h1>
1-git init(en ruta del proyecto)<br>
2-git add .<br>
3-git reset . (en caso de revertir el .add)<br>
4-git commit -m "Primer commit"<br>
5-git remote add origin https://github.com/inosttroza/subirBajar-Git.git<br>
6-git push -u origin master<br>

<h1>Bajar de git y luego subir cambios</h1>
1-git init(en ruta del proyecto)<br>
2-git clone https://github.com/inosttroza/subirBajar-Git.git<br>
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

# Nota:
1- git checkout -- . (vuelve a obtener el ultimo codigo del commit(seria como Ctrl+z))<br>
2- git commit --amend (Corrige o inserta textos ya ingresados en los commit anteriores)<br>

3- git pull (trae los ultimos cambios desde el remoto)<br>
 *Es posible que git nos muestre un error<br>

Este error ocurre porque una rama local de nuestro repositorio no tiene<br>
asignada una rama del repositorio remoto. Podremos especificar a qué rama remota<br> 
corresponde la rama local con el siguiente comando:<br>
  3.1- git branch --set-upstream-to=origin/master master (en caso de error del primer comando git pull)<br>
  
 Mas detalles aca:<br>
 https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/subir-y-bajar-cambios-a-un-repositorio-remoto.html
