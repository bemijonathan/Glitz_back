import axios from 'axios';
import Mailer from '../utils/mailer';

export const verifyPaystack = async (req, res, next) => {
    // verifyPaystack here
    try {
        let options = {
            headers: {
                Authorization: 'Bearer ' + process.env.PAYSTACK_SECRET,
            },
        };
        const response = await axios.get(
            'https://api.paystack.co/transaction/verify/' + req.params.id,
            options
        );
        if (
            response.data.data.status === 'success' &&
            response.data.data.amount === 1000000
        ) {
            const mail = new Mailer();
            await mail.RegisterationSuccessfulEmail(req.body.email);
            next();
        } else {
            res.status(400).send({
                data: 'transaction has not been made',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
};
