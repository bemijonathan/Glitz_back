import { crudControllers } from '../../utils/crud.js';
import { User } from './user.model';

export default {
    ...crudControllers(User),
    async getCount(_, res) {
        try {
            let count = await User.countDocuments();
            return res.status(200).send({
                count,
            });
        } catch (error) {
            res.status(400).end();
        }
    },
};
