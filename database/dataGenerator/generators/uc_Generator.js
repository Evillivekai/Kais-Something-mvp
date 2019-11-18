class uc_Generator {
  generateCsvHeader() {
    return ['user_id', 'cof_id'];
  }

  generateRandomInt(min, max) {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ucGenerator(num) {
    const ucs = [];
    for (let i = 0; i < num; i += 1) {
      const uc = [
        1,
        this.generateRandomInt(1, 10),
      ];
      ucs.push(uc);
    }
    return ucs;
  }
}

module.exports = new uc_Generator();
