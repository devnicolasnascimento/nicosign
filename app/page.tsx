import Image from "next/image"
import BlurText from "../components/BlurText"
import { Button } from "@/components/ui/button"
import SpotlightCard from "../components/SpotlightCard"
import AnimatedContent from "../components/AnimatedContent"
import ScrollVelocity from '../components/ScrollVelocity';


export default function Page() {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power2.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.4}
      delay={0}
    >
      <div className="flex flex-col gap-6">
        <div className="relative top-3 flex justify-center">
          <Image
            src={"/sparkles.png"}
            alt="Imagem de curva de vetor"
            width={70}
            height={70}
            className="-rotate-5"
          />
        </div>
        <h1 className="text-center font-[Instrument_Serif] text-[38px] leading-9 text-white italic z-0">
          Ideias ganham forma para <br />
          <span className="bg-purple-700 text-3xl">
            destacar marcas no digital.
          </span>
        </h1>
        <p className="relative bottom-5 p-10 text-justify text-[12px] text-gray-200">
          Bem-vindo(a) à Nicosign. aqui, transformo ideias em identidade visual
          estratégica e marcante. Explore os serviços e descubra como elevar sua
          marca com design profissional, criativo e pensado para gerar
          resultado.
        </p>



<ScrollVelocity
  texts={['Nicosign', 'Design criativo']} 
  velocity={100}
  className="custom-scroll-text text-white font-[instrument_serif] italic p-0.5 bg-purple-600 md:text-3xl"
  numCopies={40}
  damping={50}
  stiffness={500}
/>

        <div className="flex justify-center pt-20">
          <SpotlightCard
            className="custom-spotlight-card h-70 min-w-80 bg-white/10"
            spotlightColor="rgba(255, 229, 255, 0.1)"
          >
            <div className="flex justify-center">
              <h1 className="w-25 -rotate-2 bg-purple-700 text-center font-[instrument_serif] text-4xl text-white italic">
                Teste
              </h1>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </AnimatedContent>
  )
}
