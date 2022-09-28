import { useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';

type SigninForm = {
    email: string;
    password: string;
};

const Signup = () => {
    const { register, handleSubmit } = useForm<SigninForm>();

    const submit = async (form: SigninForm) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password,
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
            <button type="submit">Valider</button>
        </form>
    );
};

export default Signup;
