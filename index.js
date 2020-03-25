 function getFirstSelector(selector) {
  const result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  const result = document.getElementById('nested').querySelector('.target');
  return result;
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node').querySelectorAll('div');
  return grandNode[grandNode.length-1];
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lists.length; i++) {
    const child = lists[i].children;

    for (let i = 0; i < child.length; i++) {
      var value = parseInt(child[i].innerHTML);
      newValue = value + 3;
      return (`{newValue}`);
    }

  }
}
