## Ejecutar el proyecto en local

### instalar paquetes

ejecutar npm install en la raiz del proyecto

### git hooks

agregar dos archivos a la carpeta de git/hooks

- `pre-commit`

  ```
  #!/bin/sh
  echo
  touch .commit
  exit
  ```

- `pre-push`

  ```
  #!/bin/sh
  CURRENT_DATE=$(date '+%Y.%m.%d.%H.%M.%S')
  echo
  if [ -e .commit ]
      then
      git tag -a -m $CURRENT_DATE $CURRENT_DATE
      rm .commit
      npm run commit-log
      git add commit-log.txt
      git commit --amend -C HEAD --no-verify
  fi
  exit
  ```
