const productWheels = require('../app/controllers/productsWheels')
const auth = require('../app/controllers/auth')
const {regist} = require('../app/controllers/auth')
module.exports = (app)=>{

    app.get(
        "/api/product",productWheels.getAllWheels);

    app.get(
        "/wheels/api/product/:id", productWheels.GetOneWheel);

    app.put(
        "/api/product/:id",productWheels.UpdateWheel);

    app.delete(
        "/api/product/:id", productWheels.DeleteWheel);

    app.post(
        "/api/product", productWheels.CreateWheel   );

    app.post("/auth", auth.signIn)

    app.post("/register", regist)
}