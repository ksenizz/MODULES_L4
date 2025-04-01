const sort = require('./sort_string'); 
const dataLoder = require('./data_loder'); 
const fs = require('./file_systems'); 


const url = 'https://jsonplaceholder.typicode.com/users';
const folderPath = 'C:\\Users\\HONOR\\Desktop\\lab_js\\LABA4.2\\src\\modules\\users';

dataLoder.dataLoder(url, (result) => {
    if (result.error) {
        console.error('Ошибка:', result.error);
        return;
    }
    const sortData = sort.sortStrings(result.data, 'name');
    const dataNames = sortData.map((elem) => elem.name).join('\n');
    const dataEmails = sortData.map((elem) => elem.email).join('\n');

    fs.writeFileSync(folderPath + '/names.txt', dataNames);
    fs.writeFileSync(folderPath + '/email.txt', dataEmails);
});
