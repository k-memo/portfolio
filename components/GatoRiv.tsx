"use client";
import Rive, { useRive } from "@rive-app/react-canvas";

interface IGatoRivProps {
  stateMachines: "wink" | "vibe";
}

export default function GatoRiv({ stateMachines }: IGGatoRivProps) {
  return <Rive src="/gato.riv" stateMachines={stateMachines} />;
}
