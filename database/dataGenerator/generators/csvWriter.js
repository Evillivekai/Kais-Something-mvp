const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path');
// const { u_Generator } = require('./u_Generator.js');
const uc_Generator = require('./uc_Generator.js');
// const uc_Generator = require('./uc_Generator.js');
// const fileList = [
//   // 'users.csv',
//   'coffee.csv',
//   'users_coffee.csv'
// ];
// const headerList = [
//   // 'usersHeader',
//   'coffeeHeader',
//   'UCHeader'
// ];
// const generatorList = [
//   // uGenerator,
//   c_Generator.cGenerator,
//   uc_Generator.ucGenerator,
// ];

// const batchWriter = async (writer, data) => {
//   await writer.writeRecords(data);
// }

// // func for async looping write to csv file.
// const writeToCsv = async (writer, index) => {
//     let i = [1, 5];
//     let data = generatorList[index](i[index]);
//     await batchWriter(writer, data);
// };

// fileList.forEach((file, index) => {
//   const csvWriter = createCsvWriter({
//     path: path.join(__dirname, '../', 'CSVfiles', file),
//     header: headerList[index],
//   });
//   writeToCsv(csvWriter, index);
// });

/* eslint-disable import/no-extraneous-dependencies */
// const createImgWriter = require('csv-writer').createArrayCsvWriter;
// const path = require('path');
// const dataGenerator = require('./imagesGenerator.js');

let Data;
// ignore header
const ucHeader = uc_Generator.generateCsvHeader();

const ucWriter = createCsvWriter({
  path: path.join(__dirname,'../', 'CSVfiles', 'users_coffee.csv'),
  header: ucHeader,
});

// 10M
const writeToCsv = () => {
    Data = uc_Generator.ucGenerator(5);
    console.log(Data);
    ucWriter.writeRecords(Data)
      .then(() => {
        console.log('...Done');
      });
};

writeToCsv();
