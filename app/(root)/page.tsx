import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import GradientButton from "@/components/ui/GradientButton";
import { CustomFeatures } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";


export default function Home() {
  return (
    <main>
      <section className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Header/>
        <div className="max-w-7xl w-full h-[1250px]">
          <FloatingNav navItems={[
            {name: 'Inicio', link:"/"},
            {name: 'Modelos', link:"/"},
            {name: 'Planos', link:"/"},
            {name: 'Sobre-nós', link:"/"},
            {name: 'Contacte-nos', link:"/"},
          ]}/>
          <Hero/>
        </div>
      </section >
      <section className="bg-white py-8">
        <div className=" bg-white mb-10 md:max-w-screen-xl sm:max-w-screen-md mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CustomFeatures.map((feature, i) => (
              <div key={i} className="flex flex-col items-center p-2 overflow-hidden text-justify">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black-100">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-wrap">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center bg-no-repeat" style={{background: "rgb(0,0,52);", backgroundColor:"linear-gradient(60deg, rgba(0,0,52,1) 0%, rgba(3,24,123,1) 18%);"}}>
        <div className="flex flex-col justify-center p-4 gap-8">
          <div className="p-4 mt-24 md:ml-20">
            <div className="text-5xl font-extrabold tracking-wide text-justify leading-[61px] max-w-full">
              Você sempre pode escolher
              <br />
              qualquer modelo que você quiser
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center p-4 gap-8 md:gap-16 whitespace-pre-line mb-28">
            <div className="mt-5 text-justify text-xl md:w-1/2">
              Escolha abaixo um de nossos tipos de currículo preparados por especialistas, usando partes pré-estabelecidas que foram endossadas por recrutadores internacionalmente, você pode começar a criar seu currículo em menos de 5 segundos, além disso, você pode editar para se adequar às suas preferências e personalidade antes de clicar em &quot;Download&quot;. Mesmo que você nunca tenha criado um currículo antes, é MUITO SIMPLES de usar!
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <Image src="/images/A4-2.png" alt="" width={200} height={200} className="w-full md:w-1/4 object-cover h-48 opacity-50" />
              <Image src="/images/A4-2.png" alt="" width={200} height={200} className="w-full md:w-2/4 object-cover h-64" />
              <Image src="/images/A4-2.png" alt="" width={200} height={200} className="w-full md:w-1/4 object-cover h-48 opacity-50" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EFF2F9] bg-contain py-5 md:py-10">
        <div className="wrapper mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <Image src='/images/hand.png' alt="hand" width={600} height={600}/>
          <div className="flex sm:flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px] text-black-100">
              Use o melhor criador de currículos como guia
            </h1>
            <p className="p-regular-20 md:p-regular-24 font-extralight text-justify text-black-100">Conseguir o emprego dos sonhos pode parecer uma tarefa impossível. Estamos aqui para mudar isso. Dê a si mesmo uma vantagem real com o melhor criador de currículos online: criado por especialistas, aprimorado por dados e com a confiança de milhões de profissionais.</p>

            <Link href= "/modelos">
              <GradientButton
                otherClasses='w-full sm:w-fit'
                title='Criar CV'
                icon={<FaLocationArrow/>}
                position='righ'
              />
            </Link>
            
          </div>
        </div>
        <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2 overflow-hidden text-justify">
            <img src="/icons/cup.png" alt="cup" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black-100">Faça um currículo que ganhe entrevistas</h3>
                <p className="text-sm text-gray-600 text-wrap">Use nosso criador de currículos com suas ferramentas avançadas de criação para contar uma história profissional que envolva recrutadores, gerentes de contratação e até mesmo CEOs.</p>
            </div>
            <div className="flex flex-col items-center p-2 overflow-hidden text-justify">
            <img src="/icons/cake.png" alt="cup" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black-100">Retomar a redação ficou mais fácil</h3>
                <p className="text-sm text-gray-600 text-wrap">Retomar a redação nunca foi tão fácil. Texto pré-gerado, designs visuais e muito mais – tudo já integrado ao criador de currículos. Basta preencher seus dados.</p>
            </div>
            <div className="flex flex-col items-center p-2 overflow-hidden text-justify">
            <img src="/icons/verified.png" alt="cup" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black-100">Uma ferramenta de criação de currículos 
                testada por recrutadores</h3>
                <p className="text-sm text-gray-600 text-wrap">Nosso criador de currículos e seu conteúdo pré-gerado são testados por recrutadores e especialistas em TI. Ajudamos seu currículo a se tornar verdadeiramente competitivo no processo de contratação.</p>
            </div>
        </div>
      </section>

    </main>
  )
}
