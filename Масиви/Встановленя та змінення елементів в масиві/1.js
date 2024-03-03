let dinosaurs = [];

dinosaurs[0] = 'T-Rex';
dinosaurs[1] = 'Velociraptor';
dinosaurs[2] = 'Stegosaurus';
dinosaurs[3] = 'Triceratops';
dinosaurs[4] = 'Brachiosaurus';
dinosaurs[5] = 'Pteranodon';
dinosaurs[6] = 'Apatosaurus';
dinosaurs[7] = 'Diplodocus';
dinosaurs[8] = 'Compsognathus';

console.log(dinosaurs);

dinosaurs[0] = 'Tyrannosaurus REX';

console.log(dinosaurs);

dinosaurs[33] = 'Philosoraptor';

console.log(dinosaurs);

// Муксуємо типи даних у масиві

let dinosaursAndNumbers = [3, 'dinosaurs', ['tyrannosaurus', 'diplodocus', 3627.5], 10];

console.log(dinosaursAndNumbers[2][0]);
