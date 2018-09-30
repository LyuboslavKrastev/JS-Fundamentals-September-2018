function getTripLength([x1, y1, x2, y2, x3, y3]){
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, x3 = +x3, y3 = +y3;

    let calculateDistanceBetweenTwoPoints = function(x1, y1, x2, y2){
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    let distanceBetween1and2 = calculateDistanceBetweenTwoPoints(x1, y1, x2, y2);
    let distanceBetween1and3 = calculateDistanceBetweenTwoPoints(x1, y1, x3, y3);
    let distanceBetween2and3 = calculateDistanceBetweenTwoPoints(x2 , y2, x3, y3);
    let totalDistance = 0;

    if ((distanceBetween1and2 <= distanceBetween1and3) && (distanceBetween2and3 <= distanceBetween1and3)) {
         totalDistance = distanceBetween1and2 + distanceBetween2and3;
         console.log(`1->2->3: ${totalDistance}`);
     }
     else if ((distanceBetween1and2 <= distanceBetween2and3) && (distanceBetween1and3 < distanceBetween2and3)) {
         totalDistance = distanceBetween1and3 + distanceBetween1and2;
         console.log(`2->1->3: ${totalDistance}`);
     }
     else {
         totalDistance = distanceBetween2and3 + distanceBetween1and3;
         console.log(`1->3->2: ${totalDistance}`);
     }
}

getTripLength([0, 0, 2, 0, 4, 0]);
getTripLength([5, 1, 1, 1, 5, 4]);
getTripLength([-1, -2, 3.5, 0, 0, 2]);
