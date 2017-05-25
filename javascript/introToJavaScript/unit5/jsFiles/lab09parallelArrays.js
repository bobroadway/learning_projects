/*
    This is the JavaScript code for 
    "Lab 9: Parallel Arrays" 
    File: /unit5/labs/lab09parallelArrays.html
*/
function lab09parallelArrays() {
    // Your code goes in here.
    var CUTOFF_SCORE = 88;
    var output = document.getElementById('outputTable');
    var scores = [76, 99, 56, 78, 72, 50, 54, 86, 75, 55, 61, 54, 81, 97, 93,
            74, 51, 86, 67, 83, 80, 61, 97, 55, 75, 54, 92, 74, 52, 76,
            73, 82, 73, 74, 88, 64, 66, 56, 95, 97, 68, 85, 79, 92, 67,
            57, 88, 52, 93, 79];
    var names = ["Latashia Peeks", "Boyd Girone", "Kimiko Lints",
            "Arminda Renicker", "Emanuel Ingber", "Winston Nakama",
            "Marlen Offerman", "Toby Huxford", "Courtney Schmidgall",
            "Isidra Edgmon", "Randal Colver", "Theola Betancur",
            "Timmy Outram", "Timmy Crossgrove", "Cary Goldammer",
            "Isa Gamage", "Timmy Foulkes", "Elois Surgeon",
            "Roman Eggett", "Shirleen Omary", "Abel Newfield",
            "Armanda Matts", "Mirtha Bensing", "Shery Rauls",
            "Abel Wahpekeche", "Van Mazzie", "Magdalen Sopher",
            "Jerald Nasir", "Dominick Cadenas", "Marlon Schibi",
            "Winston Ramsdale", "Tommie Pinley", "Annett Kierce",
            "Lasandra Batrum", "Elijah Morasca", "Shirleen Roehm",
            "Aliza Strause", "Marilu Lankard", "Cary Portor",
            "Wei Maune", "Aubrey Chahal", "Omega Cloney",
            "Jenice Cawthorn", "Timmy Villarrvel", "Emilio Genovesi",
            "Elois Bucey", "Tommie Scroggie", "Juliane Yepes",
            "Randal Deshon", "Juliane Hermenegildo"];
            
    for (var index = 0; index < names.length; index++) {
        
        if (scores[index] > CUTOFF_SCORE) {
            output.innerHTML += "<tr><td>" + names[index] + "</td>"
                + "<td>" + scores[index] + "</td></td>";
        }
        
    }
}