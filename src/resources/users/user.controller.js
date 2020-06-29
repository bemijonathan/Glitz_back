import { crudControllers } from "../../utils/crud.js";
import { User } from "./user.model";

export default {
    ...crudControllers(User),
    getCount(_, res) {
        let count = User.count()
        return res.status(200).send({
            count
        })
    }
};
