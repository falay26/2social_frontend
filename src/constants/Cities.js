const Cities = [
  {
    value: '01',
    name: 'Adana',
  },
  {
    value: '02',
    name: 'Adıyaman',
  },
  {
    value: '03',
    name: 'Afyon',
  },
  {
    value: '04',
    name: 'Ağrı',
  },
  {
    value: '05',
    name: 'Amasya',
  },
  {
    value: '06',
    name: 'Ankara',
  },
  {
    value: '07',
    name: 'Antalya',
  },
  {
    value: '08',
    name: 'Artvin',
  },
  {
    value: '09',
    name: 'Aydın',
  },
  {
    value: '10',
    name: 'Balıkesir',
  },
  {
    value: '11',
    name: 'Bilecik',
  },
  {
    value: '12',
    name: 'Bingöl',
  },
  {
    value: '13',
    name: 'Bitlis',
  },
  {
    value: '14',
    name: 'Bolu',
  },
  {
    value: '15',
    name: 'Burdur',
  },
  {
    value: '16',
    name: 'Bursa',
  },
  {
    value: '17',
    name: 'Çanakkale',
  },
  {
    value: '18',
    name: 'Çankırı',
  },
  {
    value: '19',
    name: 'Çorum',
  },
  {
    value: '20',
    name: 'Denizli',
  },
  {
    value: '21',
    name: 'Diyarbakır',
  },
  {
    value: '22',
    name: 'Edirne',
  },
  {
    value: '23',
    name: 'Elâzığ',
  },
  {
    value: '24',
    name: 'Erzincan',
  },
  {
    value: '25',
    name: 'Erzurum',
  },
  {
    value: '26',
    name: 'Eskişehir',
  },
  {
    value: '27',
    name: 'Gaziantep',
  },
  {
    value: '28',
    name: 'Giresun',
  },
  {
    value: '29',
    name: 'Gümüşhane',
  },
  {
    value: '30',
    name: 'Hakkâri',
  },
  {
    value: '31',
    name: 'Hatay',
  },
  {
    value: '32',
    name: 'Isparta',
  },
  {
    value: '33',
    name: 'Mersin',
  },
  {
    value: '34',
    name: 'İstanbul',
  },
  {
    value: '35',
    name: 'İzmir',
  },
  {
    value: '36',
    name: 'Kars',
  },
  {
    value: '37',
    name: 'Kastamonu',
  },
  {
    value: '38',
    name: 'Kayseri',
  },
  {
    value: '39',
    name: 'Kırklareli',
  },
  {
    value: '40',
    name: 'Kırşehir',
  },
  {
    value: '41',
    name: 'Kocaeli',
  },
  {
    value: '42',
    name: 'Konya',
  },
  {
    value: '43',
    name: 'Kütahya',
  },
  {
    value: '44',
    name: 'Malatya',
  },
  {
    value: '45',
    name: 'Manisa',
  },
  {
    value: '46',
    name: 'Kahramanmaraş',
  },
  {
    value: '47',
    name: 'Mardin',
  },
  {
    value: '48',
    name: 'Muğla',
  },
  {
    value: '49',
    name: 'Muş',
  },
  {
    value: '50',
    name: 'Nevşehir',
  },
  {
    value: '51',
    name: 'Niğde',
  },
  {
    value: '52',
    name: 'Ordu',
  },
  {
    value: '53',
    name: 'Rize',
  },
  {
    value: '54',
    name: 'Sakarya',
  },
  {
    value: '55',
    name: 'Samsun',
  },
  {
    value: '56',
    name: 'Siirt',
  },
  {
    value: '57',
    name: 'Sinop',
  },
  {
    value: '58',
    name: 'Sivas',
  },
  {
    value: '59',
    name: 'Tekirdağ',
  },
  {
    value: '60',
    name: 'Tokat',
  },
  {
    value: '61',
    name: 'Trabzon',
  },
  {
    value: '62',
    name: 'Tunceli',
  },
  {
    value: '63',
    name: 'Şanlıurfa',
  },
  {
    value: '64',
    name: 'Uşak',
  },
  {
    value: '65',
    name: 'Van',
  },
  {
    value: '66',
    name: 'Yozgat',
  },
  {
    value: '67',
    name: 'Zonguldak',
  },
  {
    value: '68',
    name: 'Aksaray',
  },
  {
    value: '69',
    name: 'Bayburt',
  },
  {
    value: '70',
    name: 'Karaman',
  },
  {
    value: '71',
    name: 'Kırıkkale',
  },
  {
    value: '72',
    name: 'Batman',
  },
  {
    value: '73',
    name: 'Şırnak',
  },
  {
    value: '74',
    name: 'Bartın',
  },
  {
    value: '75',
    name: 'Ardahan',
  },
  {
    value: '76',
    name: 'Iğdır',
  },
  {
    value: '77',
    name: 'Yalova',
  },
  {
    value: '78',
    name: 'Karabük',
  },
  {
    value: '79',
    name: 'Kilis',
  },
  {
    value: '80',
    name: 'Osmaniye',
  },
  {
    value: '81',
    name: 'Düzce',
  },
];

const getCityFromId = id => {
  return Cities.filter(i => i.value === id)[0]?.name;
};

const wholeCityFromId = id => {
  return Cities.filter(i => i.value === id)[0];
};

export {getCityFromId, wholeCityFromId};
export default Cities;
