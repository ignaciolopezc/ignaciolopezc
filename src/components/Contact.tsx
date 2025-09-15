import React, { useState } from 'react';

function validate(payload: Record<string, FormDataEntryValue | null>) {
	const errors: string[] = [];
	if (!payload.name || String(payload.name).trim().length < 2) {
		errors.push('El nombre debe tener al menos 2 caracteres');
	}
	if (!payload.email || !String(payload.email).includes('@')) {
		errors.push('Email inválido');
	}
	// Validación de teléfono: solo dígitos y al menos 8 caracteres
	const phone = String(payload.phone || '').replace(/\D/g, '');
	if (!phone || phone.length < 8) {
		errors.push('El teléfono debe tener al menos 8 dígitos');
	}
	if (!payload.subject || String(payload.subject).trim().length < 4) {
		errors.push('El asunto debe tener al menos 4 caracteres');
	}
	if (!payload.message || String(payload.message).trim().length < 10) {
		errors.push('El mensaje debe tener al menos 10 caracteres');
	}
	return errors;
}

const ContactForm: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<'success' | 'error' | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		setLoading(true);
		setStatus(null);

		try {
			const formData = new FormData(form);
			const payload = {
				name: formData.get('name'),
				email: formData.get('email'),
				phone: formData.get('phone'),
				subject: formData.get('subject'),
				message: formData.get('message'),
			};

			// Validación antes de enviar
			const errors = validate(payload);
			if (errors.length > 0) {
				setStatus(errors[0]);
				setLoading(false);
				return;
			}

			const response = await fetch('https://www.ignaciolopezc.cl/api/send-email', {
				// const response = await fetch('http://localhost:3001/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const data = await response.json();

			if (!response.ok || !data.success) {
				setStatus('error');
				throw new Error(`${data.error || 'Error en el envío'}${data.details ? `: ${data.details.join(', ')}` : ''}`);
			}
			setStatus('success');
			form.reset();
		} catch (err: any) {
			setStatus('error');
			setStatus('Hubo un problema al enviar tu mensaje. Por favor, revisa tu conexión a internet o inténtalo de nuevo más tarde.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id='contact' className='relative md:py-24 py-16 text-white'>
			<div className='container relative'>
				<div className='grid grid-cols-1 text-center'>
					<h6 className='text-indigo-600 text-sm font-bold uppercase mb-2'>Contactame</h6>
					<h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>¿ Tiene una pregunta ? Conversemos!</h3>
					<p className='text-slate-400 mb-8 max-w-xl mx-auto'>
						En el inicio y al final de esta pagina podras encontrar mis redes sociales o si gustas puedes enviarme un mensaje con el siguiente formulario
					</p>

					<form onSubmit={handleSubmit}>
						<div className='grid lg:grid-cols-12 lg:gap-6'>
							<div className='lg:col-span-6 mb-5'>
								<div className='text-start'>
									<label className='font-semibold'>Nombre:</label>
									<div className='form-icon relative mt-2'>
										<input
											name='name'
											id='name'
											type='text'
											placeholder='Agrega tu nombre y apellido :'
											required
											className='form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'
										/>
									</div>
								</div>
							</div>

							<div className='lg:col-span-6 mb-5'>
								<div className='text-start'>
									<label className='font-semibold'>Email:</label>
									<div className='form-icon relative mt-2'>
										<input
											name='email'
											id='email'
											type='email'
											placeholder='Agrega tu email para contactarte :'
											required
											className='form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'
										/>
									</div>
								</div>
							</div>

							<div className='lg:col-span-6 mb-5'>
								<div className='text-start'>
									<label className='font-semibold'>Asunto:</label>
									<div className='form-icon relative mt-2'>
										<input
											name='subject'
											id='subject'
											type='text'
											placeholder='Asunto :'
											required
											className='form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'
										/>
									</div>
								</div>
							</div>

							<div className='lg:col-span-6 mb-5'>
								<div className='text-start'>
									<label className='font-semibold'>Telefono:</label>
									<div className='form-icon relative mt-2'>
										<input
											name='phone'
											id='phone'
											type='text'
											placeholder='Telefono :'
											required
											className='form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='grid grid-cols-1'>
							<div className='mb-5'>
								<div className='text-start'>
									<label className='font-semibold'>Mensaje:</label>
									<div className='form-icon relative mt-2'>
										<i data-feather='message-circle' className='size-4 absolute top-3 start-4'></i>
										<textarea
											name='message'
											id='message'
											placeholder='Tu mensaje :'
											required
											className='form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0'></textarea>
									</div>
								</div>
							</div>
						</div>

						{status === 'success' && (
							<div className='w-full'>
								<div className='relative bg-emerald-800 rounded-lg shadow-xl w-full border border-emerald-700'>
									<div className='px-4 py-3'>
										<div className='flex items-center gap-3'>
											<div className='flex-shrink-0'>
												<div className='w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center'>
													<svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' stroke-width='2.5'>
														<path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'></path>
													</svg>
												</div>
											</div>
											<div className='flex-1 min-w-0'>
												<h3 id='modal-title' className='text-white font-medium text-sm leading-tight'>
													¡Listo! He recibido tu mensaje. Me pondre en contacto contigo lo antes posible.
												</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						{typeof status === 'string' && status !== 'success' && (
							<div className='w-full'>
								<div className='relative bg-red-800 rounded-lg shadow-xl w-full border border-red-700'>
									<div className='px-4 py-3'>
										<div className='flex items-center gap-3'>
											<div className='flex-shrink-0'>
												<div className='w-6 h-6 bg-red-600 rounded-full flex items-center justify-center'>
													<svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' stroke-width='2.5'>
														<path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12'></path>
													</svg>
												</div>
											</div>
											<div className='flex-1 min-w-0'>
												<h3 className='text-white font-medium text-md leading-tight'>{status}</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						<button
							type='submit'
							disabled={loading}
							className='py-2 mb-10 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4'>
							<i className='uil uil-phone'></i> {loading ? 'Enviando...' : 'Enviar'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
