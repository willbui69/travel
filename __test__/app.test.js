const app = require('../src/server/index')
const  supertest =  require('supertest')
const request = supertest(app)

describe("GET /", () => {
    describe("when passed json data", ()=>{
        test("should respond with a 200 status", async()=>{
            const response = await request.get("/").send({
                cityName: 'Ha Noi',
                startDate: '2021-11-26',
                endDate: '',
                tripLength: NaN,
                latitude: '21.0245',
                longitude: '105.84117',
                countryName: 'Vietnam',
                dateGap: 6,
                temp: 23,
                des: 'Overcast clouds',
                imageLink: 'https://pixabay.com/get/ga7f7c3d8f7c5a0e01c0d9649960eb6e686d1f55c28df1ad271fda5f25b5cec50c150db2dd73d5c68dbc460961ddbe63b1720e14450980571751f694b1e8c9b68_640.jpg' 
            })
            expect(response.status).toBe(200)
        })
    })
})
