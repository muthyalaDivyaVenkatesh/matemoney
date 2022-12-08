export let profileDetails = [{
    label: 'Name',
    name: 'name'
}, {
    label: 'Sur Name',
    name: 'surName'
}, {
    label: 'Age',
    name: 'age',
    type: 'number'
}, {
    label: 'Height',
    name: 'height',
    type: 'number'
},
{
    label: 'complexation',
    name: 'complexation'
},
{
    label: 'Collage',
    name: 'collage'
},
{
    label: 'Job & location',
    name: 'job'
}

]

export const familyDetails = [
    {
        label: 'fatherName',
        name: 'fatherName'
    },
    {
        label: 'fatheroccupation',
        name: 'fatheroccupation'
    },
    {
        label: 'motherName',
        name: 'motherName'
    },
    {
        label: 'motheroccupation',
        name: 'motheroccupation'
    },
    {
        label: 'NativePlace',
        name: 'nativePlace'
    },
    {
        label: 'presentCity',
        name: 'presentCity'
    }


]


export const horoscope = [
    {
        label: 'zodic',
        name: 'zodic'
    },
    {
        label: 'star',
        name: 'star'
    },
    {
        label: 'Date and time of Birth',
        name: 'birthTime'
    },
    {
        label:'gotram',
        name: 'gotram'
    }


]


let marriedStatusValues = [{
    title: 'unMarried'
},{
    title:'married'
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


export let newAutoCompleteValues = [
{
    id: 'marriedStatus', name:  'marriedStatus' ,placeholder: 'marriedStatus',  label:'mariedStatus', renderValues: marriedStatusValues
},
{
    id:'motherTongue' , name: 'motherTongue' ,placeholder: 'motherTongue', label:'motherTongue' , renderValues: motherToungeValues 
},
{
    id:'education', placeholder:'Education' , name:'education',label: 'Eductaion' , renderValues: educationValues
}]

export let keyForAutoCompleteDegree = [
     'B-Tech','Degree','Pharmcy','Dental', 'Mbbs','BBA','MBA'
]

export let keyForMothertongue = [ 'telugu', 'tamil','Hindi','other']

export let keyForMarried = [ 'unMarried','married']