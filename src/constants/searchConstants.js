let heightValues;
let ageValues;

(function dropDownValues() {
    let height = [];
    for (var i = 1; i <= 8; i++) {
        height.push(i);
    }

    heightValues = height.map(height => {
        return {
            key: height,
            label: height,
            value: height
        }
    })

    var Ages = [];
    for (var i = 18; i <= 60; i++) {
        Ages.push(i);
    }

    ageValues = Ages.map(age => {
        return {
            key: age,
            label: age,
            value: age
        }
    })
})()

let marriedStatusValues = [
       'married',
      'unMarried'
]

let motherToungeValues = [
       'telugu',
       'tamil',
       'Hindi',
       'other',
 
]

let religionValues = [
       'hindu']

let educationValues = [
      'B-Tech',
      'Degree',
      'Pharmcy',
       'Dental',
       'Mbbs',
       'BBA',
       'MBA'
]


// serach values
let searchValues = [
    {
        id: "age", name: "age", label: "age", dropDownValues: ageValues
    },
    {
        id: "height", name: "height", label: "height", dropDownValues: heightValues
    },
    {
        id: 'marriedStatus', placeholder: 'marriedStatus', name:"marriedStatus", label:'mariedStatus', renderValues: marriedStatusValues
    },
    {
        id:'motherTongue' , placeholder: 'motherTongue', name:'motherTongue', label:'motherTongue' , renderValues: motherToungeValues 
    },
    {
        id:'education', placeholder:'Education' ,label: 'Eductaion', name: 'education', renderValues: educationValues
    }

]

export default searchValues;

