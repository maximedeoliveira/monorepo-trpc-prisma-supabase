import { useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';

type SignupForm = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
};

const Signup = () => {
    const { register, handleSubmit } = useForm<SignupForm>();

    const submit = async (form: SignupForm) => {
        console.log(form);
        const { data, error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: {
                    firstname: form.firstname,
                    lastname: form.lastname,
                },
            },
        });

        console.log(data);
        console.log(error);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email')} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" {...register('password')} />
            </div>
            <div>
                <label>Firstname</label>
                <input type="text" {...register('firstname')} />
            </div>
            <div>
                <label>Lastname</label>
                <input type="text" {...register('lastname')} />
            </div>
            <button type="submit">Valider</button>
        </form>
    );
};

export default Signup;
