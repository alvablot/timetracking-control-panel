# K3

## Testing av K2 ##
Kör först från mappen ./backend/
```
$ json-server --watch db.json
```
och ./k2/
```
$ npm run dev
```
Kör unit och inegrations-tester från ./k2/
```
$ npm run test 
```
End to end-test kör 
(denna mockar inte databasen och tar bort poster i json-filen, och kan därför bara köras en gång. För att köra fler gånger måste databasen vara som den i "./backend/db_copy.json")
```
$ npx playwright test k2.test.ts
```

#
