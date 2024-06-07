"use client";
import Rive, { useRive } from "@rive-app/react-canvas";

interface IGatoRivProps {
  stateMachines: "wink" | "vibe";
}

export default function GatoRiv({ stateMachines }: IGatoRivProps) {
  return <Rive src="/gato.riv" stateMachines={stateMachines} />;
}
