
copiar e colar função determinada e achar os erros
![[Pasted image 20251203220704.png]]

1 - é function
2 - trims nao é uma função e sim trim()
3 - texto é string, que vai inferir na troca do nome da funçao trim(s)

===

código inicial:
![[Pasted image 20251203225207.png]]
transformar codigo para versao mais robusta e livre de erros
1- input pode ser null, caso nao tivesse input, o codigo quebra. ter certeza que ele existe com o input 
2 - verificar se input e total existe. por pegar o total do local storage, que é uma string
3 - value como number
4 - converter a stringo input.value para number
5 - se p existe
6 - se input existe dentro da função
7 - setItem exige string
codigo final
![[Pasted image 20251203224753.png]]