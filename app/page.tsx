import Image from "next/image"
import BlurText from "../components/BlurText"
import { Button } from "@/components/ui/button"
import SpotlightCard from "../components/SpotlightCard"
import AnimatedContent from "../components/AnimatedContent"
import ScrollVelocity from "../components/ScrollVelocity"
import { ButtonVariant } from "@/components/reusable/btn"
import BorderGlow from "../components/BorderGlow"

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
        <h1 className="z-0 text-center font-[Instrument_Serif] text-[38px] leading-9 text-white italic">
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

        <div className="relative bottom-7 flex items-center justify-center gap-4">
          <ButtonVariant
            route="/about"
            content="Saiba mais"
            tailwind="text-white text-[20px] font-[instrument_Serif] border-2 border-purple-600 w-35 text-center p-[10px_20px_10px_20px] rounded-[10px] bg-purple-600 hover:border-purple-900 hover:bg-purple-900 transition duration-500 hover:shadow-purple-900 hover:shadow-[0px_0px_30px] hover:scale-105"
          />
          <ButtonVariant
            route="/contact"
            content="Contato"
            tailwind="text-white text-[20px] font-[instrument_Serif] border-2 w-35 text-center p-[10px_20px_10px_20px] rounded-[10px] hover:bg-white hover:text-black transition duration-500 hover:shadow-black hover:shadow-[0px_0px_20px] hover:scale-105"
          />
        </div>

        <div className="pt-20">
          <ScrollVelocity
            texts={["Nicosign", "Design criativo"]}
            velocity={100}
            className="custom-scroll-text bg-purple-600 p-0.5 font-[instrument_serif] text-white italic md:text-3xl"
            numCopies={40}
            damping={50}
            stiffness={500}
          />
        </div>

        <h2 className="text-center text-3xl text-white font-[instrument_serif] italic relative top-15">O que a Nicosign tem a oferecer?</h2>

        <div className="flex justify-center pt-20">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#250055"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div style={{ padding: "2em" }} className="min-h-50 w-85 flex flex-col justify-center gap-3">
              <Image src={"/starr.png"} alt="Foto de estrela" width={30} height={30}/>
              <h2 className="text-[30px] text-gray-200 font-[instrument_serif] leading-7">Serviços Criativos para Destacar Sua Marca.</h2>
              <p className="text-[12px] text-gray-200 text-justify">Soluções em design gráfico pensadas para fortalecer sua identidade visual, transmitir profissionalismo e conectar sua marca ao público certo.</p>
            </div>
          </BorderGlow>
        </div>

        <div className="flex justify-center">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#250055"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div style={{ padding: "2em" }} className="min-h-50 w-85 flex flex-col justify-center gap-3">
              <Image src={"/rocket.png"} alt="Foto de estrela" width={30} height={30}/>
              <h2 className="text-[30px] text-gray-200 font-[instrument_serif] leading-7">Impulsionamento da sua marca.</h2>
              <p className="text-[12px] text-gray-200 text-justify">Design estratégico e criativo para valorizar sua identidade, atrair mais atenção e destacar seu negócio no mercado.</p>
            </div>
          </BorderGlow>
        </div>
      </div>
    </AnimatedContent>
  )
}
