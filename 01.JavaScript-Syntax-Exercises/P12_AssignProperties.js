function AssignProperties(arr){
    let key1 = arr[0];
    let value1 = arr[1];
    let key2 = arr[2];
    let value2 = arr[3];
    let key3 = arr[4];
    let value3 = arr[5];
    let object = {};
    object[key1] = value1;
    object[key2] = value2;
    object[key3] = value3;

    return object;
}

console.log(AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
