import { useState } from "react";
import logo from "./assets/logo.png";
import bg_maguey from "./assets/bg_maguey.jpg";
import "./index.css";

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<header className="bg-primary-900">
				<nav className="container mx-auto flex min-h-[80px] items-center justify-between">
					<img src={logo} alt="" className="h-10 w-36" />

                    <ul className="hidden lg:block">
                        <li className="flex gap-7">
                            <a href="" className="nav-link">Conócenos</a>
                            <a href="" className="nav-link">Nuestras plantaciones</a>
                            <a href="" className="nav-link">Perfilamiento</a>
                            <a href="" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                    

                    <div className="lg:hidden border relative">
                        <div onClick={() => setToggle((prev) => !prev)}>
                            {
                                toggle ? (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11 fill-none stroke-white stroke-[1.5px] cursor-pointer"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>  ) : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11 fill-none stroke-white stroke-[1.5px] cursor-pointer"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 6L20 6"></path>
                                    <path d="M4 12L20 12"></path>
                                    <path d="M4 18L20 18"></path>
                                </svg>)
                            }
                        </div>

                        <div className={`${toggle ? 'flex' : 'hidden'} bg-orange-400 absolute top-20`}>
                            <ul>
                                <li className="flex flex-col gap-7">
                                    <a href="" className="nav-link">Conócenos</a>
                                    <a href="" className="nav-link">Nuestras plantaciones</a>
                                    <a href="" className="nav-link">Perfilamiento</a>
                                    <a href="" className="nav-link">Contacto</a>
                                </li>
                            </ul>
                        </div>

                    </div>                    


                    
				</nav>
			</header>


            <section className={`relative h-[80vh]`}>               
                <div className="h-full bg-cover bg-no-repeat bg-center brightness-50 bg-[url('https://images.unsplash.com/photo-1570600116722-27d2016a2b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-black">
                </div>
                
                <div className="container mx-auto">
                    <div className="absolute bottom-20 w-2/5">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <p className="font-sans font-bold text-white text-[32px]">¡Invierte en el futuro del agropecuario con MagueyToken!</p>
                                <p className="font-sans font-medium text-white text-[20px]">Compra tu propia plantación de maguey en Oaxaca hoy mismo y aprovecha los retornos de inversión superiores al 30% promedio anual variable. ¡Haz crecer tu patrimonio con nosotros!</p>
                            </div> 
                            <a href="" className="block w-fit bg-primary-500 font-sans font-semibold text-[16px] rounded-md px-4 py-3">
                                Compra ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container mx-auto mt-[68px]">
                <header>
                    <h2 className="font-sans font-bold text-[32px] text-primary-900">Últimos eventos</h2>
                </header>
                <div className="grid grid-cols-4 mt-[36px]">
                    <article className="h-[320px] w-[260px] flex flex-col gap-3 bg-slate-50 rounded border border-[#EDEDED] cursor-pointer">
                        <img className="h-40 object-cover rounded-t" src="https://images.unsplash.com/photo-1583184442258-1ae42ba36ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                        <div className="flex flex-col gap-[6px] p-2 pt-0 h-[148px] text-ellipsis overflow-hidden">
                            <h2 className="font-sans font-semibold text-[16px] text-primary-800">¡Fiesta de la cosecha de Maguey!</h2>
                            <span className="font-sans font-light text-[12px] text-[#838282]">20 de marzo del 2013</span>
                            <p className="font-sans font-normal text-[14px] text-[#191203]">Celebra con nosotros en nuestra plantación de maguey en Oaxaca y aprende todo sobre el proceso de producción de nuestro tequila premium. Disfruta de una degustación exclusiva de nuestras bebidas, música en vivo y deliciosa comida mexicana. ¡No te lo pierdas!</p>
                        </div>
                    </article>

                    <article className="h-[320px] w-[260px] flex flex-col gap-3 bg-slate-50 rounded border border-[#EDEDED] cursor-pointer">
                        <img className="h-40 object-cover rounded-t" src="https://images.unsplash.com/photo-1634130132261-3bdf61051454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className="flex flex-col gap-[6px] p-2 pt-0 h-[148px] text-ellipsis overflow-hidden">
                            <h2 className="font-sans font-semibold text-[16px] text-primary-800">Webinar sobre inversión en el sector agropecuario</h2>
                            <span className="font-sans font-light text-[12px] text-[#838282]">19 de marzo del 2013</span>
                            <p className="font-sans font-normal text-[14px] text-[#191203]">¿Quieres saber más sobre cómo invertir en el sector agropecuario y obtener grandes retornos? Únete a nuestro webinar en línea donde nuestros expertos hablarán sobre las últimas tendencias en el mercado y cómo puedes aprovecharlas con MagueyToken®. ¡Regístrate ahora!</p>
                        </div>
                    </article>

                    <article className="h-[320px] w-[260px] flex flex-col gap-3 bg-slate-50 rounded border border-[#EDEDED] cursor-pointer">
                        <img className="h-40 object-cover rounded-t" src="https://images.unsplash.com/photo-1635547018520-043b6f0e1a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className="flex flex-col gap-[6px] p-2 pt-0 h-[148px] text-ellipsis overflow-hidden">
                            <h2 className="font-sans font-semibold text-[16px] text-primary-800">Taller de coctelería con Maguey</h2>
                            <span className="font-sans font-light text-[12px] text-[#838282]">18 de marzo del 2013</span>
                            <p className="font-sans font-normal text-[14px] text-[#191203]">Aprende a preparar los mejores cócteles con nuestra bebida premium en nuestro taller de coctelería. Nuestros mixólogos te enseñarán todo lo que necesitas saber para crear deliciosas bebidas con un toque de maguey. ¡Ven y pasa una tarde divertida y educativa con nosotros!</p>
                        </div>
                    </article>

                    <article className="h-[320px] w-[260px] flex flex-col gap-3 bg-slate-50 rounded border border-[#EDEDED] cursor-pointer">
                        <img className="h-40 object-cover rounded-t" src="https://images.unsplash.com/photo-1539575344446-34d43ec355d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className="flex flex-col gap-[6px] p-2 pt-0 h-[148px] text-ellipsis overflow-hidden">
                            <h2 className="font-sans font-semibold text-[16px] text-primary-800">Visita guiada a la destilería desde una perspectiva de negocios</h2>
                            <span className="font-sans font-light text-[12px] text-[#838282]">17 de marzo del 2013</span>
                            <p className="font-sans font-normal text-[14px] text-[#191203]">Descubre los secretos detrás de la elaboración de nuestro tequila premium en una visita guiada exclusiva a nuestra destilería en Oaxaca. Aprende sobre nuestro proceso de producción y disfruta de una degustación de nuestras bebidas. Además, obtén acceso a ofertas especiales en productos de MagueyToken®. ¡Reserva tu lugar ahora y no te pierdas esta experiencia única!</p>
                        </div>
                    </article>
                </div>
            </section>


            <section className="mt-[80px] h-[440px] flex">
                <div className="bg-[#E0A71A] w-1/2 border-[#7D5D0F] border-l-[10px] p-[80px] relative">
                    <div className="absolute w-[480px] right-[80px] flex flex-col gap-6">
                        <p className="font-sans font-bold text-[32px] text-primary-900">¿Qué es MagueyToken?</p>
                        <p className="font-sans font-normal text-[20px] leading-[28px] text-[#4b3709]">Es un sistema que te permite comprar tu plantación de maguey en Oaxaca. Invertimos en el sector agropecuario por medio de estructuras legales y financieras aprovechando la tendencia alcista de los activos agropecuarios de más alta demanda en México y el mundo obteniendo desempeños mayores al 30% promedio anual variable.</p>
                    </div>
                
                </div>
                <div className="w-1/2">
                    <img className="object-cover bg-cover object-top h-[440px] w-full" src="https://images.unsplash.com/photo-1633209174553-870cdca1cfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
            </section>

            <section className="my-[227px] grid grid-cols-2">
                <div className="relative">
                    <div className="absolute -top-[127px] right-[60px] z-10">
                            <img className="w-[520px] h-[682px] object-cover bg-cover object-left" src="https://images.unsplash.com/photo-1535419342184-f4bd555a3c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                    </div>

                    <div className="w-[468px] h-[609px] bg-primary-600 absolute top-0 right-0">
                    </div>
                </div>
                <div className="flex flex-col gap-[80px] px-[80px]">
                    <article className="flex flex-col gap-[26px]">
                        <p className="font-sans font-bold text-[24px] text-primary-900">Modelo integral único</p>
                        <p className="font-sans font-normal text-[20px] leading-[28px]">Conviértete en dueño de una plantación de Maguey en Oaxaca, estado originario del mezcal y sus derivados. Visita el Rancho <span className="font-semibold">MagueyToken</span> y conoce por medio de un extraordinario tour recreativo y temático el crecimiento de su plantación.</p>                
                    </article>

                    <article className="flex flex-col gap-[26px]">
                        <p className="font-sans font-bold text-[24px] text-primary-900">¿Por qué formar parte?</p>
                        <p className="font-sans font-normal text-[20px] leading-[28px]">Las bebidas destiladas a partir del maguey se han vuelto tendencia internacional y nacional, provocando una alta demanda de producción en la industria, convirtiéndose en una gran oportunidad de negocio.</p>
                    </article>
                </div>

            </section>



		</>
	);
}

export default App;
