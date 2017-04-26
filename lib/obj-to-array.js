const toArr = obj => Object.entries(obj).map(s => ({ label: s[0], value: s[1] }));

export default toArr;
