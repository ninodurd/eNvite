const inilialState =
    [
        {
            "id": 1,
            "name": "Nina",
            "last_name": "Lorens",
            "email":"ninal@gmai.l.com",
            "birth_day":"11.06.1998",
            "image": "../img/img1.jpg",
            "messages": "Hi dear, good you come!!!!!",
            "status":"Admin",
            "group":{"title":"Asos Team","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to bottom right, #f66a78, #fdc491)'
        },
        {
            "id": 2,
            "name": "Marry",
            "last_name": "Goldberg",
            "image": "../img/img2.jpg",
            "messages": "joined to Asos Team",
            "status":"member",
            "group":{"title":"Teamshop","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to right bottom, #d1dd7e, #74c99a, #3abbb0)'

        }, {
            "id": 3,
            "name": "Amelia",
            "last_name": "Cruse",
            "image": "../img/img3.jpg",
            "messages": "<3 <3 <3",
            "status":"member",
            "group":{"title":"NinaGroup","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to right, #8f80dc , #4d7ce0)'

        }
    ]



export default function userInfo(state = inilialState) {
    return state
}