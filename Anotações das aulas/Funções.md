## Funções no Javascript

<details>
<summary>Maneiras de declarar funções</summary>
<br>
  
A primeira maneira de declarar uma função é a seguinte:
```
function sayHello(){
    console.log('Hii!');
}
sayHello();
```
Também pode ser declarado usando uma Arrow Function:
```
const funcArrow = () =>{
    console.log('Sou uma arrow function');
};
funcArrow();
```
No JS uma função pode ser declarada dentro de um objeto:
```
const obj = {
    falar: function(){
        console.log('Estou falando.......');
    }
};
obj.falar();
```
</details>
