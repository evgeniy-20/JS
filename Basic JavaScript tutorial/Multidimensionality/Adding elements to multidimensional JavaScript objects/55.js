// Зробіть четверту групу, у ній зробіть підгрупу та додайте до неї двох нових студентів

let students = {
    'group1': {
        'subgroup11': ['student111', 'student112', 'student113'],
        'subgroup12': ['student121', 'student122', 'student123'],
    },
    'group2': {
        'subgroup21': ['student211', 'student212', 'student213'],
        'subgroup22': ['student221', 'student222', 'student223'],
    },
    'group3': {
        'subgroup31': ['student311', 'student312', 'student313'],
        'subgroup32': ['student321', 'student322', 'student323'],
    },
};

students['group1']['subgroup11'].push('student114');
students['group1']['subgroup13'] = [];
students['group4'] = {
    'subgroup41': ['student411', 'student412']
}
console.log(students);
