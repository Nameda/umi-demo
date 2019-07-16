import mockjs from 'mockjs';
export default {
    "/getList":mockjs.mock({
        "list|10":[{
            city:"@city",
            name:"@name",
            "sex|0-1":1,
            email:"@email",
            "id|1-10":5
        }]
    })
}