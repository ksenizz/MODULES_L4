const bcrypt = require ('bcryptjs');
require('dotenv').config();
console.log(`Текущий режим приложения:${process.env.MODE}`);
const passwords =[
    'k123s456e','n123i456a89','zabl3456ots7689','07zabl03ts06kaya',
    'e654s321k','98a654i321','9867sto6543lbaz','ayak60st30lbaz70',
    'ksenia0307zabl','ksenzll60023070','ksenizz60207030','zKsen3456789'
];

async function hashPasswords(passwords) {
    for (const password of passwords) {
      const start = Date.now();
      const hashedPassword = await bcrypt.hash(password, 10);
      const end = Date.now();
      console.log(`Пароль "${password}" зашифрован за ${end - start} ms`);
    }
}
hashPasswords(passwords).then(() => {
    console.log('Все пароли зашифрованы.');
    console.log('Время хеширования зависит от сложности пароля и мощности вычислительных ресурсов.');
  });
  


  