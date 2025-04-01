const fs = require('fs');
const path = require('path');


function writeFileSync(filePath) {
    try {
        fs.writeFileSync(filePath, 'Мама мыла раму (синхрон)');
        console.log('Запись успешна (синхрон)');
    } catch (error) {
        console.error('Ошибка при записи файла (синхронно):', error);
    }
}
function writeFileAsync(filePath) {
    fs.writeFile(filePath, 'Мама мыла раму (асинхрон)', (error) => {
        if (error) {
            console.error('Ошибка при записи файла (асинхронно):', error);
        } else {
            console.log('Запись успешна (асинхрон)');
        }
    });
}

function readFileSync(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('Данные прочитаны (синхронно):', data);
        return data;
    } catch (error) {
        console.error('Ошибка при чтении файла (синхронно):', error);
    }
}
function readFileAsync(filePath) {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла (асинхронно):', error);
        } else {
            console.log('Данные прочитаны:', data);
        }
    });
}

function updateFileSync(filePath) {
    try {
        fs.writeFileSync(filePath, 'Обновленные данные');
        console.log('Файл обновлен синхронно');
    } catch (error) {
        console.error('Ошибка при обновлении файла синхронно:', error);
    }
}
function updateFileAsync(filePath) {
    fs.writeFile(filePath, 'Обновленные данные', (error) => {
        if (error) {
            console.error('Ошибка при обновлении файла асинхронно:', error);
        } else {
            console.log('Файл обновлен асинхронно');
        }
    });
}

function deleteFileSync(filePath) {
    try {
        fs.writeFileSync(filePath, '', 'utf8');
        console.log('Содержимое файла успешно удалено синхронно');
    } catch (error) {
        console.error('Ошибка при удалении содержимого файла синхронно:', error);
    }
}
function deleteFileAsync(filePath) {
    fs.writeFile(filePath, '', 'utf8', (error) => {
        if (error) {
            console.error('Ошибка при удалении содержимого файла асинхронно:', error);
        } else {
            console.log('Содержимое файла успешно удалено асинхронно');
        }
    });
}

function removeNoiseSync(filePath) {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        data = data.replace(/[0-9]/g, '').toLowerCase();
        fs.writeFileSync(filePath, data);
        console.log('Шум удален синхронно');
    } catch (error) {
        console.error('Ошибка при удалении шума синхронно:', error);
    }
}
function removeNoiseAsync(filePath) {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла асинхронно:', error);
        } else {
            data = data.replace(/[0-9]/g, '').toLowerCase();
            fs.writeFile(filePath, data, (error) => {
                if (error) {
                    console.error('Ошибка при записи файла асинхронно:', error);
                } else {
                    console.log('Шум удален асинхронно');
                }
            });
        }
    });
}

function copyFileSync(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        fs.writeFileSync(copiedFilePath, data);
        console.log('Файл скопирован синхронно');
    } catch (error) {
        console.error('Ошибка при копировании файла синхронно:', error);
    }
}
function copyFileAsync(filePath) {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Ошибка при чтении файла асинхронно:', error);
        } else {
            fs.writeFile(copiedFilePath, data, (error) => {
                if (error) {
                    console.error('Ошибка при записи файла асинхронно:', error);
                } else {
                    console.log('Файл скопирован асинхронно');
                }
            });
        }
    });
}

function createFolderSync(folderPath) {
    try {
        fs.mkdirSync(folderPath);
        console.log('Папка создана синхронно');
    } catch (error) {
        console.error('Ошибка при создании папки синхронно:', error);
    }
}
function createFolderAsync(folderPath) {
    fs.mkdir(folderPath, (error) => {
        if (error) {
            console.error('Ошибка при создании папки асинхронно:', error);
        } else {
            console.log('Папка создана асинхронно');
        }
    });
}

function deleteFolderSync(folderPath) {
    try {
        fs.rmdirSync(folderPath, { recursive: true });
        console.log('Папка удалена синхронно');
    } catch (error) {
        console.error('Ошибка при удалении папки синхронно:', error);
    }
}
function deleteFolderAsync(folderPath) {
    fs.rmdir(folderPath, { recursive: true }, (error) => {
        if (error) {
            console.error('Ошибка при удалении папки асинхронно:', error);
        } else {
            console.log('Папка удалена асинхронно');
        }
    });
}

module.exports = {
    writeFileSync,
    writeFileAsync,
    readFileSync,
    readFileAsync,
    updateFileSync,
    updateFileAsync,
    deleteFileSync,
    deleteFileAsync,
    removeNoiseSync,
    removeNoiseAsync,
    copyFileSync,
    copyFileAsync,
    createFolderSync,
    createFolderAsync,
    deleteFolderSync,
    deleteFolderAsync,
};
