const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];


function searchName (initial, output, callback) {
    const search = name.filter (x => x.toLowerCase().includes(initial.toLowerCase()));
    const result = search.slice(0,output);
    callback (result);
     }
     function print (result) {
        result.forEach (x => console.log(x));
     }
 searchName ("el", 5, print);

