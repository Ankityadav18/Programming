function seats(seat) {
    if (seat % 8 == 1) {
        console.log("SL");
    }
    else if (seat % 8 == 2) {
        console.log("SU");
    }
    else if (seat % 8 == 3 || seat % 8 == 6) {
        console.log("Lower");
    }
    else if (seat % 8 == 4 || seat % 8 == 7) {
        console.log("Middle");
    }
    else if (seat % 8 == 5 || seat % 8 == 0) {
        console.log("Upper");

    }
}
seats(73);