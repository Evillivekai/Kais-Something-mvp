const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = ruquire('path');
// const { u_Generator } = require('./u_Generator.js');
const { c_Generator } = require('./c_Generator.js');
const { uc_Generator } = require('./uc_Generator.js');

const fileList = [/*'users.csv', */'coffee.csv', 'users_coffee.csv'];
const headerList = [/*'usersHeader', */'coffeeHeader','UCHeader'];
const generatorList = [/*u_Generator, */c_Generator, uc_Generator];

const batchWriter = async (writer, data) => {
  await writer.writeRecords(data);
}

// func for async looping write to csv file.
const writeToCsv = async (writer, data) => {
  for (let i = 0; i < 10; i += 1) {
    data = generatorList[index].(10);
    await batchWriter(writer, data);
  }
};

fileList.forEach((file, index) => {
  let data;
  const csvWriter = createCsvWriter({
    path: path.join(__dirname, '../', 'CSVfiles', file),
    header: headerList[index],
  });
  writeToCSV(csvWriter, data);
});