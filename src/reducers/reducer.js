const inilialState =
    [
        {
            "id": 1,
            "name": "Nina",
            "last_name": "Lorens",
            "email":"ninal@gmai.l.com",
            "birth_day":"11.06.1998",
            "image": "https://images.vogue.it/imgs/galleries/vogue-gioiello/come-indossare/006602/vgit-0229-ok-751964_0x440.jpg",
            "messages": "Hi dear, good you come!!!!!",
            "status":"Admin",
            "group":{"title":"Asos Team","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to bottom right, #f66a78, #fdc491)'
        },
        {
            "id": 2,
            "name": "Marry",
            "last_name": "Goldberg",
            "image": "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/md10004279/4f4fe210-6d73-4fba-b806-02695d292b73_thumb.jpg",
            "messages": "joined to Asos Team",
            "status":"member",
            "group":{"title":"Teamshop","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to right bottom, #d1dd7e, #74c99a, #3abbb0)'

        }, {
            "id": 3,
            "name": "Amelia",
            "last_name": "Cruse",
            "image": "https://format-com-cld-res.cloudinary.com/image/private/s--auCcS_GS--/c_crop,h_813,w_610,x_0,y_0/c_fill,g_center,h_506,w_380/a_auto,fl_keep_iptc.progressive,q_95/v1/09408c289bbfbcd66ef4028a575b0c87/Photo_2017-01-29_9_10_58_PM.jpg",
            "messages": "<3 <3 <3",
            "status":"member",
            "group":{"title":"NinaGroup","id":1,"members":["Nina","Emma","Milla"]},
            "gradients":'linear-gradient(to right, #8f80dc , #4d7ce0)'

        }
    ]



export default function userInfo(state = inilialState) {
    return state
}