const obj={

  id:1,
  pName:'laptop',
  pRam:'8Gb',
  pRom:'1TB',
  PFeture:{
    processor:'Intel',
    Greaphics:'Nvdia',
  },
  pBrand:['Lenovo','Hp','Samsung','Mi',{brand1:'hp'}]
}

// console.log(obj.pName);
// console.log(obj['pName']);

//we can update valye

// obj.pName="mobile"
// console.log(obj);

//pFeature
console.log(obj.PFeture);
console.log(obj.PFeture.Greaphics);
const specificBrand = obj.pBrand[4];

console.log(specificBrand.brand1)


