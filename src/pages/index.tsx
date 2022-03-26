/** @format */

import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
	password: yup.string().required('Senha obrigatório'),
});

export default function Home() {
	const { handleSubmit, register, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(values);
	};

	return (
		<Flex w='100vw' h='100vh' align='center' justify='center'>
			<Flex
				as='form'
				w='100%'
				maxWidth='360px'
				bg='gray.800'
				p='8'
				borderRadius={8}
				flexDir='column'
				onSubmit={handleSubmit(handleSignIn)}>
				<Stack spacing='4'>
					<Input
						label='E-mail'
						name='email'
						error={errors.email}
						type='email'
						{...register('email')}
					/>
					<Input
						label='Senha'
						name='password'
						error={errors.password}
						type='password'
						{...register('password')}
					/>
				</Stack>

				<Button size='lg' type='submit' mt='6' colorScheme='pink'>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
