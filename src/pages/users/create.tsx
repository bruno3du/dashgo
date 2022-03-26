/** @format */

import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Form';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormDate = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Nome Obrigatório'),
	email: yup.string().email('E-mail Inválido').required('E-mail Obrigatório'),
	password: yup
		.string()
		.required('Senha Obrigatório')
		.min(6, 'Numero de caracteres abaixo do requerido'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const handleCreateUser: SubmitHandler<CreateUserFormDate> = async (
		values
	) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(values);
	};

	const { errors } = formState;

	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxW={1480} mx='auto' px={['6', '8']}>
				<Sidebar />
				<Box
					as={'form'}
					flex='1'
					borderRadius={8}
					bgColor='gray.800'
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}>
					<Heading size='lg' fontWeight='normal'>
						Criar um usuário
					</Heading>

					<Divider my='6' borderColor='gray.700' />

					<VStack spacing='8'>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='name'
								label='Nome Completo'
								{...register('name')}
								error={errors.name}
							/>
							<Input
								name='email'
								error={errors.email}
								type='email'
								label='E-mail'
								{...register('email')}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='password'
								type='password'
								error={errors.password}
								label='Senha'
								{...register('password')}
							/>
							<Input
								name='password_confirmation'
								type='password'
								error={errors.password_confirmation}
								label='Confirmação de Senha'
								{...register('password_confirmation')}
							/>
						</SimpleGrid>

						<Flex mt='8' justify='flex-end'>
							<HStack spacing='4'>
								<Button colorScheme='whiteAlpha'>Cancelar</Button>
								<Button colorScheme='pink' type='submit' isLoading={formState.isSubmitting}>
									Salvar
								</Button>
							</HStack>
						</Flex>
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
}
