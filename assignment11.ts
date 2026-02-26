// Print the numbers in diamond-shaped pyramid of numbers.
//Pattern should be as below.
//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
//  1 2 3 4
//   1 2 3
//    1 2
//     1

class DiamondPyramid {
    printDiamondPyramid(rows: number): void {

        // print Upper half part of diamond
        for (let i = 1; i <= rows; i++) {
            let line = "";

            // Spaces
            for (let j = 1; j <= rows - i; j++) {
                line += " ";
            }

            // Numbers
            for (let k = 1; k <= i; k++) {
                line += k + " ";
            }

            console.log(line);
        }

        // print Lower half part of diamond
        for (let i = rows - 1; i >= 1; i--) {
            let line = "";

            // Spaces
            for (let j = 1; j <= rows - i; j++) {
                line += " ";
            }

            // Numbers
            for (let k = 1; k <= i; k++) {
                line += k + " ";
            }

            console.log(line);
        }
    }
}

const pyramid = new DiamondPyramid();
pyramid.printDiamondPyramid(5);
