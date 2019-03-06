const elements = [...document.getElementsByTagName('*')];

const myZedeAbreu = [
'Jair Messias Bolsonaro', 'Bolsonaro', 'Jair'
];

elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);

  validNodes.forEach((node) => {
    const text = node.nodeValue;
    const politicsSUX = text.replace(new RegExp(myZedeAbreu.join('|'), 'ig'), 'zé de abreu');

    if (politicsSUX !== text) {
      node.nodeValue = politicsSUX;
    }
  });
});