let itemCircleArr = [];
let itemCrossArr = [];
let resultBox = document.querySelector(".resultBox") //Result showing Div

let interSectionForCircle;
let interSectionForCross;

//Essential Patterns for win
let matchingSet = {
    set1: ['n0', 'n1', 'n2'],
    set2: ['n3', 'n4', 'n5'],
    set3: ['n6', 'n7', 'n8'],
    set4: ['n0', 'n3', 'n6'],
    set5: ['n1', 'n4', 'n7'],
    set6: ['n2', 'n5', 'n8'],
    set7: ['n0', 'n4', 'n8'],
    set8: ['n2', 'n4', 'n6']
};


//containing sets 

let setContainer = [matchingSet.set1,
    matchingSet.set2,
    matchingSet.set3,
    matchingSet.set4,
    matchingSet.set5,
    matchingSet.set6,
    matchingSet.set7,
    matchingSet.set8
];