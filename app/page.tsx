import Image from "next/image"
import BlurText from "../components/BlurText"
import { Button } from "@/components/ui/button"
import SpotlightCard from "../components/SpotlightCard"

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative top-3 flex justify-center">
        <Image
          src={"/curve.png"}
          alt="Imagem de curva de vetor"
          width={70}
          height={70}
        />
      </div>
      <h1 className="text-center font-[Instrument_Serif] text-[38px] leading-9 text-white italic">
        Ideias ganham forma para <br />
        <span className="bg-purple-700 text-3xl">
          destacar marcas no digital.
        </span>
      </h1>
      <p className="relative bottom-5 p-7 text-justify text-gray-200">
        Bem-vindo(a) à Nicosign. aqui, transformo ideias em identidade visual
        estratégica e marcante. Explore os serviços e descubra como elevar sua
        marca com design profissional, criativo e pensado para gerar resultado.
      </p>

      <div className="flex justify-center">
        <SpotlightCard
          className="custom-spotlight-card h-70 min-w-80 bg-white/5"
          spotlightColor="rgba(255, 229, 255, 0.1)"
        >
          <div className="flex justify-center">
            <h1 className="w-25 bg-purple-700 text-center font-[instrument_serif] text-4xl text-white italic -rotate-2">
              Teste
            </h1>
          </div>
        </SpotlightCard>
      </div>
    </div>
  )
}
