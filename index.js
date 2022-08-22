// Code your solution in this file!

function distanceFromHqInBlocks(d) {
    const hq = 42;
    if (d>hq) {
        return d - hq;
    } else if(d<hq) {
        return hq - d;
    }
};

function distanceFromHqInFeet(distance) {
    const convert = distanceFromHqInBlocks(distance);
    return convert * 264;
};

function distanceTravelledInFeet(start, destination) {
    const diff = (destination - start) * 264;
    if (destination<start) {
        return (start - destination) * 264;
    } else if (destination>start) {
        return diff;
    }
};

function calculatesFarePrice(start, destination) {
    const inFeet = distanceTravelledInFeet(start, destination);
    //const charge = (destination - start) * 264;
    if (inFeet <= 400) {
        return 0;
    }
    else if (inFeet > 400 && inFeet<=2000) {
        return (inFeet - 400) * 0.02;
    }
    else if (inFeet > 2000 && inFeet <= 2500) {
        return 25;
    }
    else if (inFeet > 2500) {
        return `cannot travel that far`;
    }
}