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

let marriedStatusValues = [{
    title: 'married'
},{
    title:'unMarried'
}]

let motherToungeValues = [{
    title: 'telugu'
}, 
 {
    title: 'tamil'
 }, 
 {
    title: 'Hindi'
 },
 {
    title: 'other'
 }
]

let religionValues = [{
    title: 'hindu'
}]

let educationValues = [{
   title: 'B-Tech'
},{
   title: 'Degree'
},{
   title: 'Pharmcy'
}, {
    title: 'Dental'
}, {
    title: 'Mbbs'
}, {
    title: 'BBA'
}, {
    title: 'MBA'
}]


// serach values
let searchValues = [
    {
        id: "age", name: "age", label: "age", dropDownValues: ageValues
    },
    {
        id: "height", name: "height", label: "height", dropDownValues: heightValues
    },
    {
        id: 'marriedStatus', placeholder: 'marriedStatus',  label:'mariedStatus', renderValues: marriedStatusValues
    },
    {
        id:'motherTongue' , placeholder: 'motherTongue', label:'motherTongue' , renderValues: motherToungeValues 
    },
    {
        id:'religion' , placeholder: 'religion', label:'religion' , renderValues: religionValues 
    },
    {
        id:'education', placeholder:'Education' ,label: 'Eductaion' , renderValues: educationValues
    }

]

export default searchValues;

// { id: "age", name: "toAge", label: "AGE", dropDownValues: ageValues },
// {

//     id: "height", name: "From Height", label: "HEIGHT", dropDownValues: heightValues
// }