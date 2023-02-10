# Cose da fare

1. create un service persona che abbia una lista di persone
2. create i metodi per vedere la lista - modificare persona - inserire persona

1a. Create a service con api https://jsonplaceholder.typicode.com/users

1b. Salvare la lista per poi poterla modificare

> Creare le interface che avete bisogno


service avrà props lista

```
getUsers(){
salvo la lista

}
```

```
insert(item: IUser): boolean {
    this.lista.push(item);
}
```

```
modifica(item: IUser): boolean {
    dovrò come prima cosa cercare utente nella lista, 
    nel caso che lo trovo allora modifico la lista.
}
```