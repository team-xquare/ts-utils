function replaceAll(searchValue: string | RegExp, replaceValue: any): string {
  return this.replace(new RegExp(searchValue, 'g'), replaceValue);
}

const replaceAllFunctionInit = () => {
  String.prototype.replaceAll = String.prototype.replaceAll || replaceAll;
};

const replaceAllFunctionDowngrade = () => {
  String.prototype.replaceAll = replaceAll;
};

export { replaceAllFunctionInit, replaceAllFunctionDowngrade };
