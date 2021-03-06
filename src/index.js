arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
  ];

function validateGroups(arrGroups){

  const regex = /^(F[DEM]|f[dem])20\d{2}(-\d+)?$/g;

  arrGroups.forEach((name) => {
    if(name.search(regex)< 0) {
      console.log(name + ' - Error');
    }else {
      console.log(name + ' - Success'); 
  }
})
}

validateGroups(arrGroups)