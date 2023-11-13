// # Recréez la fonction Array.prototype.filter() avec la signature suivante => 'myFilter(arr, func)' elle doit donc prendre un array et une fonction en paramètre
// Que faire dedans ?

// 1. Créer un array vide filteredArr (par exemple)
// 2. Boucler sur l'array passé en argument à myFilter
// 3. Appeller `func` sur chaque element de `arr`
// 4. Push le résultat de `func` dans filteredArr SI le retour de `func` == true
// 5. Return filteredArr après la fin de la boucle

// Vous ne devez utiliser ni forEach ni aucune fonction provenant de Array.prototype (Donc toute les fonction qui s'écrivent array.func() sont interdites.)
// EDIT : Sauf push() bien évidemment

function myFilter(arr, func) {
  let filterAdd = [];
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      filterAdd.push(func(arr[i]));
    }
  }
  return filterAdd;
}

function myMap(arr, func) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}
